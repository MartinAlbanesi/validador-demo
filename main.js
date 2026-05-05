/**
 * Portal ATM — main.js
 *
 * State machine: "pending" | "approved" | "rejected" | "manual_review"
 * Modal lifecycle is independent of portal state.
 */

// ─── Configuration ────────────────────────────────────────────────
const ATM_API_KEY         = "" // Set when API key is available
const API_BASE            = "https://api-validador-atm.duckdns.org/api/v1"
const MOBILE_URL_FALLBACK = "https://validador-atm.duckdns.org/"

// ─── Element refs ─────────────────────────────────────────────────
const modal          = document.getElementById("validator-modal")
const vmodalBackdrop = document.getElementById("vmodal-backdrop")
const vmodalClose    = document.getElementById("vmodal-close")
const vmodalManual   = document.getElementById("vmodal-manual")
const manualDoneBtn  = document.getElementById("manual-done-btn")
const startBtn       = document.getElementById("start-btn")
const continueBtn    = document.getElementById("continue-btn")
const retryBtn       = document.getElementById("retry-btn")
const tramiteFooter  = document.getElementById("tramite-footer")
const statusBadge    = document.getElementById("status-badge")
const statePending      = document.getElementById("state-pending")
const stateApproved     = document.getElementById("state-approved")
const stateRejected     = document.getElementById("state-rejected")
const stateManualReview = document.getElementById("state-manual-review")
const step2             = document.getElementById("step-2")
const step3             = document.getElementById("step-3")

// ─── Runtime state ────────────────────────────────────────────────
let pollInterval     = null
let currentSessionId = null

// ─── Modal ────────────────────────────────────────────────────────
function openModal() {
  modal.hidden = false
  document.body.classList.add("modal-open")

  if (ATM_API_KEY) {
    vmodalManual.hidden = true
    createSessionAndPoll()
  } else {
    vmodalManual.hidden = false
    setWcMobileUrl(MOBILE_URL_FALLBACK)
  }
}

function closeModal() {
  modal.hidden = true
  document.body.classList.remove("modal-open")
  stopPolling()
  currentSessionId = null
}

// ─── WC attribute helper ──────────────────────────────────────────
function setWcMobileUrl(url) {
  const wc = document.getElementById("the-validator")
  if (wc) wc.setAttribute("mobile-url", url)
}

// ─── Integration API + polling ────────────────────────────────────
async function createSessionAndPoll() {
  try {
    const res = await fetch(`${API_BASE}/integration/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": ATM_API_KEY,
      },
      body: JSON.stringify({
        external_id: `portal-demo-${Date.now()}`,
        callback_url: "https://validador-atm.duckdns.org/webhook",
        expires_in_minutes: 30,
      }),
    })

    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const data = await res.json()
    currentSessionId = data.session_id
    setWcMobileUrl(data.validator_url)
    startPolling(data.session_id)
  } catch (err) {
    console.error("[Portal] Session creation failed — falling back to manual:", err)
    vmodalManual.hidden = false
    setWcMobileUrl(MOBILE_URL_FALLBACK)
  }
}

function startPolling(sessionId) {
  stopPolling()
  pollInterval = setInterval(async () => {
    try {
      const res = await fetch(`${API_BASE}/integration/sessions/${sessionId}/status`)
      if (!res.ok) return
      const { status, rejection_code } = await res.json()

      if (status === "approved") {
        stopPolling()
        let detail = {}
        try {
          const detailRes = await fetch(`${API_BASE}/integration/sessions/${sessionId}`, {
            headers: { "X-API-Key": ATM_API_KEY },
          })
          if (detailRes.ok) {
            const d = await detailRes.json()
            detail = {
              ocrResult: d.dni_extracted,
              biometryResult: { liveness_score: d.scores?.liveness_score },
            }
          }
        } catch { /* detail unavailable — setApproved handles nulls */ }
        closeModal()
        setApproved(detail)

      } else if (status === "manual_review") {
        stopPolling()
        closeModal()
        setManualReview()
      } else if (status === "rejected") {
        stopPolling()
        closeModal()
        setRejected({
          error: `Verificación rechazada${rejection_code ? ` (${rejection_code})` : ""}.`,
        })
      }
    } catch (err) {
      console.error("[Portal] Polling error:", err)
    }
  }, 3000)
}

function stopPolling() {
  if (pollInterval) { clearInterval(pollInterval); pollInterval = null }
}

// ─── State transitions ────────────────────────────────────────────
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

  step2.className = "step-node step-done"
  step2.querySelector(".step-circle").innerHTML = '<i class="bi bi-check-lg"></i>'
  step3.className = "step-node step-active"
  step3.querySelector(".step-circle").textContent = "3"

  statePending.hidden      = true
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

  step2.className = "step-node step-rejected"
  step2.querySelector(".step-circle").innerHTML = '<i class="bi bi-x-lg"></i>'
  step3.className = "step-node step-active"
  step3.querySelector(".step-circle").textContent = "3"

  statePending.hidden      = true
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

  step2.className = "step-node step-warning"
  step2.querySelector(".step-circle").innerHTML = '<i class="bi bi-hourglass-split"></i>'
  step3.className = "step-node step-active"
  step3.querySelector(".step-circle").textContent = "3"

  statePending.hidden      = true
  stateApproved.hidden     = true
  stateRejected.hidden     = true
  stateManualReview.hidden = false
  tramiteFooter.hidden     = true
  continueBtn.hidden       = true
  retryBtn.hidden          = true
}

function resetToPending() {
  statusBadge.className = "badge badge-pending"
  statusBadge.innerHTML = '<span class="badge-dot"></span> Pendiente'

  step2.className = "step-node step-active"
  step2.querySelector(".step-circle").textContent = "2"
  step3.className = "step-node"
  step3.querySelector(".step-circle").textContent = "3"

  statePending.hidden      = false
  stateApproved.hidden     = true
  stateRejected.hidden     = true
  stateManualReview.hidden = true
  tramiteFooter.hidden     = true
  continueBtn.hidden       = true
  retryBtn.hidden          = true
}

// ─── Helpers ──────────────────────────────────────────────────────
function formatDni(raw) {
  if (!raw) return "—"
  const d = String(raw).replace(/\D/g, "")
  return d.length === 8 ? d.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2.$3") : d
}

// ─── Event listeners ──────────────────────────────────────────────
startBtn.addEventListener("click", openModal)
retryBtn.addEventListener("click", openModal)

vmodalClose.addEventListener("click", closeModal)
vmodalBackdrop.addEventListener("click", closeModal)

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal()
})

manualDoneBtn.addEventListener("click", () => {
  closeModal()
  statusBadge.className = "badge badge-processing"
  statusBadge.innerHTML = '<span class="badge-dot"></span> En proceso'
})

// WC CustomEvents — composed:true + bubbles:true → reach document
document.addEventListener("validation-success", (e) => {
  closeModal()
  setApproved(e.detail)
})

document.addEventListener("validation-error", (e) => {
  closeModal()
  setRejected(e.detail)
})

document.addEventListener("validation-restart", () => {
  resetToPending()
})
