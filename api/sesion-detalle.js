/**
 * Vercel Function — obtiene PII de una sesión completada.
 *
 * Endpoint autenticado del backend (`GET /integration/sessions/{id}`)
 * devuelve datos OCR (nombre, dni, fecha de nacimiento) y scores. Como
 * requiere X-API-Key, el frontend del demo no puede llamarlo directo —
 * va por esta function que tiene la key server-side.
 *
 * En producción real, el integrador NO debería confiar en este fetch
 * para persistir datos: el webhook firmado HMAC es la fuente autoritativa.
 * Esta function existe solo para que el demo pueda mostrar PII en la UI.
 */

const VALIDADOR_API_BASE = "https://api-validador-atm.duckdns.org/api/v1"

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET")
    return res.status(405).json({ error: "method not allowed" })
  }

  const apiKey = process.env.ATM_API_KEY
  if (!apiKey) {
    return res.status(500).json({
      error: "ATM_API_KEY no configurada en el env de Vercel",
    })
  }

  const sessionId = req.query?.session_id
  if (typeof sessionId !== "string" || !sessionId) {
    return res.status(400).json({ error: "session_id requerido" })
  }

  // Validación defensiva del UUID — evita inyección de paths raros.
  if (!/^[0-9a-f-]{36}$/i.test(sessionId)) {
    return res.status(400).json({ error: "session_id inválido" })
  }

  let upstream
  try {
    upstream = await fetch(`${VALIDADOR_API_BASE}/integration/sessions/${sessionId}`, {
      method: "GET",
      headers: { "X-API-Key": apiKey },
    })
  } catch (err) {
    return res.status(502).json({
      error: "no se pudo contactar al validador",
      detail: err?.message,
    })
  }

  const data = await upstream.json().catch(() => null)
  if (!upstream.ok) {
    return res.status(upstream.status).json(data ?? { error: "upstream error" })
  }

  // Devolvemos solo los campos que el frontend del demo renderiza —
  // evita leakear más PII de lo necesario.
  res.status(200).json({
    dni_extracted: data.dni_extracted ?? null,
    scores: data.scores ?? null,
    completed_at: data.completed_at ?? null,
  })
}
