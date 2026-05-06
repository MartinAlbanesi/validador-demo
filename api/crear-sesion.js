/**
 * Vercel Function — crea una sesión de validación contra el backend.
 *
 * Server-side por diseño: la X-API-Key vive solo en el env var de Vercel
 * (ATM_API_KEY), nunca llega al browser. El frontend del demo llama esta
 * function sin credenciales y recibe el session_id ya creado.
 *
 * Este es el patrón que cualquier integrador real debería implementar
 * en su backend. La Vercel Function es solo conveniencia del demo —
 * un integrador con backend propio (PHP, Java, etc) hace lo equivalente
 * con su stack.
 */

const VALIDADOR_API_BASE = "https://api-validador-atm.duckdns.org/api/v1"

// Sane default — los integradores reales pasarían esto de su trámite.
const DEFAULT_DNI = "28543671"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "method not allowed" })
  }

  const apiKey = process.env.ATM_API_KEY
  if (!apiKey) {
    return res.status(500).json({
      error: "ATM_API_KEY no configurada en el env de Vercel",
    })
  }

  const body = req.body && typeof req.body === "object" ? req.body : {}
  const dni = typeof body.dni === "string" && body.dni.trim() ? body.dni.trim() : DEFAULT_DNI
  const returnUrl = typeof body.return_url === "string" && body.return_url.trim()
    ? body.return_url.trim()
    : undefined
  const externalId = `portal-demo-${Date.now()}`

  // El return_url se persiste en la sesión del backend. El SPA lo lee
  // desde la sesión cargada y redirige al integrador después de que el
  // usuario complete el flujo en mobile (sin pasarlo por URL params del
  // QR — más limpio y respeta la allowlist del backend).
  // El callback_url apunta a nuestra Vercel Function api/webhook.js que
  // valida HMAC y devuelve 200. Antes apuntaba a un endpoint inexistente
  // y los webhooks quedaban dead en webhook_deliveries del back.
  // Construimos absoluto desde los headers del request — Vercel routea
  // según Host header, así funciona tanto en deploys preview como prod.
  const host = req.headers["x-forwarded-host"] || req.headers.host
  const proto = req.headers["x-forwarded-proto"] || "https"
  const callbackUrl = `${proto}://${host}/api/webhook`

  const sessionPayload = {
    external_id: externalId,
    dni,
    callback_url: callbackUrl,
    expires_in_minutes: 30,
  }
  if (returnUrl) sessionPayload.return_url = returnUrl

  let upstream
  try {
    upstream = await fetch(`${VALIDADOR_API_BASE}/integration/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify(sessionPayload),
    })
  } catch (err) {
    return res.status(502).json({
      error: "no se pudo contactar al validador",
      detail: err?.message,
    })
  }

  const data = await upstream.json().catch(() => null)

  if (!upstream.ok) {
    return res.status(upstream.status).json({
      error: "el validador rechazó la creación de sesión",
      detail: data,
    })
  }

  res.status(200).json({
    session_id: data.session_id,
    expires_at: data.expires_at,
    external_id: externalId,
  })
}
