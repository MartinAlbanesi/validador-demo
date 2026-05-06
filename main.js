/**
 * Portal ATM — main.js (post-migración a embed thin)
 *
 * Responsabilidades del host (este archivo):
 *  - Pedir session_id al backend (Vercel Function /api/crear-sesion)
 *  - Pasarlo al <validador-biometrico> y abrirlo
 *  - Escuchar eventos del embed y mover la UI del portal
 *  - En approved, fetch PII a /api/sesion-detalle (server-side con API key)
 *  - Si el usuario minimiza el modal antes de un terminal: state-waiting +
 *    polling host-side al endpoint público (el embed paró el suyo)
 *  - Si llega manual_review: state-manual-review + polling cada 10s
 *    esperando aprobación admin (también host-side)
 *  - Si el usuario vuelve desde mobile con ?validation_status=... en la URL,
 *    aplicar ese estado directamente (skippea polling)
 *
 * El embed maneja: modal + QR + polling activo + detección mobile + eventos.
 */

// ─── Configuration ────────────────────────────────────────────────
const API_BASE = "https://api-validador-atm.duckdns.org/api/v1"
const VALIDATION_RETURN_PARAMS = [
  "validation_status",
  "validation_error",
  "validation_name",
  "validation_last_name",
  "validation_dni",
  "validation_dob",
  "validation_liveness",
]

// ─── Element refs ─────────────────────────────────────────────────
const vb              = document.getElementById("the-validator")
const startBtn        = document.getElementById("start-btn")
const continueBtn     = document.getElementById("continue-btn")
const retryBtn        = document.getElementById("retry-btn")
const tramiteFooter   = document.getElementById("tramite-footer")
const statusBadge     = document.getElementById("status-badge")
const statePending      = document.getElementById("state-pending")
const stateWaiting      = document.getElementById("state-waiting")
const stateApproved     = document.getElementById("state-approved")
const stateRejected     = document.getElementById("state-rejected")
const stateManualReview = document.getElementById("state-manual-review")
const step1             = document.getElementById("step-1")
const step2             = document.getElementById("step-2")
const step3             = document.getElementById("step-3")

// ─── Runtime state ────────────────────────────────────────────────
let currentSessionId = null
let hostPollTimer    = null

// ─── Helpers ──────────────────────────────────────────────────────
function getPortalReturnUrl() {
  // URL del portal sin params de validación — para que el SPA mobile
  // sepa a dónde volver cuando termine.
  const url = new URL(window.location.href)
  VALIDATION_RETURN_PARAMS.forEach((p) => url.searchParams.delete(p))
  return url.toString()
}

// external_id estable por sesión de browser. Si el usuario cierra el
// modal sin completar y vuelve a hacer click, reusamos la misma sesión
// pendiente del back (idempotencia por external_id) en lugar de crear
// una nueva — antes ensuciaba el admin con N rows vacíos pending.
// Cuando la validación llega a un estado terminal, rotamos para que
// el próximo "Iniciar" cree una sesión limpia.
const EXTERNAL_ID_KEY = "validador_external_id"

function getOrCreateExternalId() {
  let id = sessionStorage.getItem(EXTERNAL_ID_KEY)
  if (!id) {
    id = `portal-demo-${Date.now()}`
    sessionStorage.setItem(EXTERNAL_ID_KEY, id)
  }
  return id
}

function rotateExternalId() {
  sessionStorage.removeItem(EXTERNAL_ID_KEY)
}

function formatDni(raw) {
  if (!raw) return "—"
  const d = String(raw).replace(/\D/g, "")
  return d.length === 8 ? d.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2.$3") : d
}

function stopHostPolling() {
  if (hostPollTimer !== null) {
    clearInterval(hostPollTimer)
    hostPollTimer = null
  }
}

async function fetchSessionDetail(sessionId) {
  try {
    const r = await fetch(`/api/sesion-detalle?session_id=${encodeURIComponent(sessionId)}`)
    if (!r.ok) return {}
    const d = await r.json()
    return {
      ocrResult: d.dni_extracted ?? {},
      biometryResult: { liveness_score: d.scores?.liveness_score },
    }
  } catch {
    return {}
  }
}

// ─── Inicio del flujo ─────────────────────────────────────────────
async function crearSesion(externalId) {
  return fetch("/api/crear-sesion", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dni: "28543671",
      external_id: externalId,
      return_url: getPortalReturnUrl(),
    }),
  })
}

async function iniciarValidacion() {
  startBtn.disabled = true
  try {
    let externalId = getOrCreateExternalId()
    let r = await crearSesion(externalId)

    // 409: el back tiene una sesion previa con este external_id que ya
    // se completo o expiro. Rotamos y reintentamos con uno nuevo.
    if (r.status === 409) {
      console.debug("[Portal] external_id consumido, rotando")
      rotateExternalId()
      externalId = getOrCreateExternalId()
      r = await crearSesion(externalId)
    }

    if (!r.ok) {
      const err = await r.json().catch(() => ({}))
      console.error("[Portal] crear-sesion fallo:", r.status, err)
      setRejected({ error: "No se pudo iniciar la verificación. Intentá de nuevo." })
      return
    }
    const { session_id } = await r.json()
    currentSessionId = session_id
    vb.setAttribute("session-id", session_id)
    setWaiting()
    vb.open()
  } catch (err) {
    console.error("[Portal] crear-sesion error:", err)
    setRejected({ error: "Error de red. Verificá tu conexión." })
  } finally {
    startBtn.disabled = false
  }
}

// ─── Polling host-side (cuando el embed dejó de pollear) ──────────
// Necesario en dos casos:
//  (1) Usuario cerró el modal antes de un estado terminal — el embed paró,
//      pero la sesión sigue activa y el polling debe continuar en background.
//  (2) Llegó manual_review — el embed considera eso terminal, pero el demo
//      quiere seguir esperando por si el admin aprueba después.
function startHostPolling(sessionId, intervalMs) {
  stopHostPolling()
  hostPollTimer = setInterval(async () => {
    try {
      const r = await fetch(`${API_BASE}/integration/sessions/${sessionId}/status`)
      if (!r.ok) return
      const { status, rejection_code } = await r.json()

      if (status === "approved") {
        stopHostPolling()
        const detail = await fetchSessionDetail(sessionId)
        currentSessionId = null
        setApproved(detail)
      } else if (status === "rejected") {
        stopHostPolling()
        currentSessionId = null
        if (rejection_code === "expired") {
          setRejected({ error: "Tu sesión expiró. Iniciá la verificación de nuevo." })
        } else {
          setRejected({
            error: `Verificación rechazada${rejection_code ? ` (${rejection_code})` : ""}.`,
          })
        }
      } else if (status === "manual_review") {
        // Si veníamos de pending → cambiar a manual_review y bajar el ritmo.
        if (!stateManualReview.hidden) return
        setManualReview()
        startHostPolling(sessionId, 10000)
      }
    } catch (err) {
      console.error("[Portal] polling host error:", err)
    }
  }, intervalMs)
}

// ─── Listeners del embed ──────────────────────────────────────────
vb.addEventListener("validation:pending", (e) => {
  console.debug("[Portal] pending", e.detail)
})

vb.addEventListener("validation:approved", async (e) => {
  console.debug("[Portal] approved", e.detail)
  stopHostPolling()
  rotateExternalId() // sesión consumida — proximo "Iniciar" usa una nueva
  const detail = await fetchSessionDetail(e.detail.session_id)
  currentSessionId = null
  setApproved(detail)
})

vb.addEventListener("validation:rejected", (e) => {
  console.debug("[Portal] rejected", e.detail)
  stopHostPolling()
  rotateExternalId()
  currentSessionId = null
  const code = e.detail.rejection_code
  setRejected({ error: `Verificación rechazada${code ? ` (${code})` : ""}.` })
})

vb.addEventListener("validation:expired", (e) => {
  console.debug("[Portal] expired", e.detail)
  stopHostPolling()
  rotateExternalId()
  currentSessionId = null
  setRejected({ error: "Tu sesión expiró. Iniciá la verificación de nuevo." })
})

vb.addEventListener("validation:manual_review", (e) => {
  console.debug("[Portal] manual_review", e.detail)
  // El embed paró su polling. Mostramos el estado y arrancamos polling
  // host-side cada 10s por si el admin aprueba luego.
  // No rotamos external_id acá: la sesión sigue "viva" esperando aprobación
  // admin — si el usuario cierra y reabre, debería reusar esta misma.
  setManualReview()
  startHostPolling(e.detail.session_id, 10000)
})

vb.addEventListener("validation:error", (e) => {
  console.error("[Portal] error", e.detail)
  // No paramos la sesión — el usuario puede llamar vb.retry() o reabrir.
  // Mostramos el estado pero no resetTo pending.
})

vb.addEventListener("validation:dismissed", (e) => {
  console.debug("[Portal] dismissed", e.detail)
  // Usuario cerró el modal antes de un terminal — el embed paró su polling
  // pero la sesión sigue activa en el backend. Mostramos state-waiting y
  // arrancamos polling host-side al ritmo normal.
  if (currentSessionId) {
    startHostPolling(currentSessionId, 5000)
  }
})

// ─── State transitions del portal ─────────────────────────────────
function setWaiting() {
  statusBadge.className = "badge badge-processing"
  statusBadge.innerHTML = '<span class="badge-dot"></span> En proceso'

  step1.className = "step-node step-done"
  step1.querySelector(".step-circle").innerHTML = '<i class="bi bi-check-lg"></i>'
  step2.className = "step-node step-active"
  step2.querySelector(".step-circle").textContent = "2"
  step3.className = "step-node"
  step3.querySelector(".step-circle").textContent = "3"

  statePending.hidden      = true
  stateWaiting.hidden      = false
  stateApproved.hidden     = true
  stateRejected.hidden     = true
  stateManualReview.hidden = true
  tramiteFooter.hidden     = true
  continueBtn.hidden       = true
  retryBtn.hidden          = true
}

function setApproved(detail) {
  const ocr      = detail?.ocrResult  ?? {}
  const bio      = detail?.biometryResult ?? {}
  const nombre   = ocr.nombre   ?? ""
  const apellido = ocr.apellido ?? ""
  const fullName = [nombre, apellido].filter(Boolean).join(" ") || "—"
  const dni      = formatDni(ocr.dni_number)
  const dob      = ocr.fecha_nacimiento ?? "—"
  const liveness = bio.liveness_score != null
    ? Math.round(bio.liveness_score * 100) + "%"
    : "—"
  const now = new Date().toLocaleString("es-AR", { dateStyle: "short", timeStyle: "short" })

  document.getElementById("vd-name").textContent     = fullName
  document.getElementById("vd-dni").textContent      = dni
  document.getElementById("vd-dob").textContent      = dob
  document.getElementById("vd-liveness").textContent = liveness
  document.getElementById("vd-date").textContent     = now

  statusBadge.className = "badge badge-approved"
  statusBadge.innerHTML = '<i class="bi bi-check-circle-fill"></i> Aprobada'

  step1.className = "step-node step-done"
  step1.querySelector(".step-circle").innerHTML = '<i class="bi bi-check-lg"></i>'
  step2.className = "step-node step-done"
  step2.querySelector(".step-circle").innerHTML = '<i class="bi bi-check-lg"></i>'
  step3.className = "step-node step-active"
  step3.querySelector(".step-circle").textContent = "3"

  statePending.hidden      = true
  stateWaiting.hidden      = true
  stateApproved.hidden     = false
  stateRejected.hidden     = true
  stateManualReview.hidden = true
  tramiteFooter.hidden     = false
  continueBtn.hidden       = false
  retryBtn.hidden          = true
}

function setRejected(detail) {
  const errorMsg = detail?.error ?? "La verificación no pudo completarse."
  document.getElementById("rejection-message").textContent = errorMsg

  statusBadge.className = "badge badge-rejected"
  statusBadge.innerHTML = '<i class="bi bi-x-circle-fill"></i> Rechazada'

  step1.className = "step-node step-done"
  step1.querySelector(".step-circle").innerHTML = '<i class="bi bi-check-lg"></i>'
  step2.className = "step-node step-done"
  step2.querySelector(".step-circle").innerHTML = '<i class="bi bi-check-lg"></i>'
  step3.className = "step-node step-rejected"
  step3.querySelector(".step-circle").innerHTML = '<i class="bi bi-x-lg"></i>'

  statePending.hidden      = true
  stateWaiting.hidden      = true
  stateApproved.hidden     = true
  stateRejected.hidden     = false
  stateManualReview.hidden = true
  tramiteFooter.hidden     = false
  continueBtn.hidden       = true
  retryBtn.hidden          = false
}

function setManualReview() {
  statusBadge.className = "badge badge-manual-review"
  statusBadge.innerHTML = '<i class="bi bi-hourglass-split"></i> En revisión'

  step1.className = "step-node step-done"
  step1.querySelector(".step-circle").innerHTML = '<i class="bi bi-check-lg"></i>'
  step2.className = "step-node step-done"
  step2.querySelector(".step-circle").innerHTML = '<i class="bi bi-check-lg"></i>'
  step3.className = "step-node step-warning"
  step3.querySelector(".step-circle").innerHTML = '<i class="bi bi-hourglass-split"></i>'

  statePending.hidden      = true
  stateWaiting.hidden      = true
  stateApproved.hidden     = true
  stateRejected.hidden     = true
  stateManualReview.hidden = false
  tramiteFooter.hidden     = true
  continueBtn.hidden       = true
  retryBtn.hidden          = true
}

// ─── Mobile flow: el SPA vuelve al portal con params en la URL ────
function applyReturnedValidationState() {
  const url = new URL(window.location.href)
  const status = url.searchParams.get("validation_status")
  if (!status) return

  stopHostPolling()
  // El SPA mobile termino y volvio al portal: la sesion del external_id
  // actual ya esta consumida (approved/rejected/etc). Rotamos para que
  // un "Iniciar" siguiente use uno nuevo y no chocque con 409.
  if (status !== "manual_review" && status !== "pending") {
    rotateExternalId()
  }
  currentSessionId = null

  const detail = {
    ocrResult: {
      nombre:           url.searchParams.get("validation_name")      ?? "",
      apellido:         url.searchParams.get("validation_last_name") ?? "",
      dni_number:       url.searchParams.get("validation_dni")       ?? "",
      fecha_nacimiento: url.searchParams.get("validation_dob")       ?? "",
    },
    biometryResult: {},
  }

  const livenessParam = url.searchParams.get("validation_liveness")
  const liveness = livenessParam == null ? Number.NaN : Number(livenessParam)
  if (!Number.isNaN(liveness)) {
    detail.biometryResult.liveness_score = liveness
  }

  if (status === "approved") {
    setApproved(detail)
  } else if (status === "manual_review" || status === "pending") {
    setManualReview()
  } else if (status === "rejected") {
    setRejected({
      error: url.searchParams.get("validation_error") || "La verificación biométrica no fue exitosa.",
    })
  }

  // Limpiar los params para que un refresh no re-aplique el estado.
  VALIDATION_RETURN_PARAMS.forEach((p) => url.searchParams.delete(p))
  window.history.replaceState({}, "", url.toString())
}

// ─── Bootstrap ────────────────────────────────────────────────────
applyReturnedValidationState()

startBtn.addEventListener("click", iniciarValidacion)
retryBtn.addEventListener("click", iniciarValidacion)
