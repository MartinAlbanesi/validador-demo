/**
 * Vercel Function — receiver del webhook firmado HMAC del validador.
 *
 * Cierra el loop end-to-end del patrón de integración: cuando el SPA
 * termina de validar, el dispatcher del back firma el payload con HMAC
 * y lo entrega acá. Nosotros validamos, logueamos, y devolvemos 200.
 *
 * Por qué no persistimos nada:
 *  - El demo no necesita persistencia (UX la cubre el polling del embed)
 *  - Las Functions de Vercel son stateless (cold starts) — cualquier
 *    KV requiere infra adicional (Upstash, Vercel KV) que es overkill
 *    para un demo. Si llega prod real, el integrador implementa el
 *    receiver en su backend con su BD.
 *  - Los logs de Vercel son suficientes para inspeccionar eventos
 *
 * El back tiene su propia idempotencia (event_id determinístico). Si
 * respondemos 200 al primer intento, no hay retries. Sin retries no
 * hace falta dedupe acá.
 *
 * Spec del header: X-Validador-Signature: t=<unix>,v1=<hex>
 * Spec del body: HMAC-SHA256(secret, "{ts}.{body_raw}")
 *
 * Ver app/services/webhooks/dispatcher.py del back para la firma.
 */
import crypto from "node:crypto"

const SIGNATURE_HEADER = "x-validador-signature"
const EVENT_ID_HEADER = "x-validador-event-id"
const TOLERANCE_SECONDS = 300 // ±5 min anti-replay

// Vercel parsea req.body por default. Necesitamos el raw para HMAC.
export const config = {
  api: { bodyParser: false },
}

async function readRawBody(req) {
  const chunks = []
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks).toString("utf8")
}

function parseSignatureHeader(header) {
  // "t=12345,v1=abcdef..." → { t: "12345", v1: "abcdef" }
  const out = {}
  for (const part of header.split(",")) {
    const [k, v] = part.split("=", 2).map((s) => s.trim())
    if (k && v) out[k] = v
  }
  return out
}

function verifySignature(secret, header, rawBody) {
  const parsed = parseSignatureHeader(header)
  if (!parsed.t || !parsed.v1) return { ok: false, reason: "header_malformed" }

  const ts = parseInt(parsed.t, 10)
  if (!Number.isFinite(ts)) return { ok: false, reason: "bad_timestamp" }

  const now = Math.floor(Date.now() / 1000)
  if (Math.abs(now - ts) > TOLERANCE_SECONDS) {
    return { ok: false, reason: "timestamp_out_of_tolerance" }
  }

  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${ts}.${rawBody}`)
    .digest("hex")

  // Constant-time compare — evita timing attacks. Las hex de SHA-256
  // siempre tienen 64 chars; si parsed.v1 viene de otro tamaño es spoof.
  if (parsed.v1.length !== expected.length) return { ok: false, reason: "bad_signature" }

  const a = Buffer.from(expected, "hex")
  const b = Buffer.from(parsed.v1, "hex")
  if (a.length !== b.length) return { ok: false, reason: "bad_signature" }

  return crypto.timingSafeEqual(a, b)
    ? { ok: true }
    : { ok: false, reason: "bad_signature" }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "method not allowed" })
  }

  const secret = process.env.ATM_HMAC_SECRET
  if (!secret) {
    console.error("[webhook] ATM_HMAC_SECRET no configurada en Vercel")
    return res.status(500).json({ error: "hmac_secret no configurado" })
  }

  const sigHeader = req.headers[SIGNATURE_HEADER]
  if (typeof sigHeader !== "string" || !sigHeader) {
    return res.status(401).json({ error: "firma faltante" })
  }

  let rawBody
  try {
    rawBody = await readRawBody(req)
  } catch (err) {
    return res.status(400).json({ error: "no se pudo leer el body", detail: err?.message })
  }

  const verification = verifySignature(secret, sigHeader, rawBody)
  if (!verification.ok) {
    console.warn(`[webhook] firma rechazada: ${verification.reason}`)
    return res.status(401).json({ error: "firma inválida", reason: verification.reason })
  }

  let payload
  try {
    payload = JSON.parse(rawBody)
  } catch {
    return res.status(400).json({ error: "body no es JSON válido" })
  }

  // Log estructurado para que se vea en Vercel logs. Útil para debug
  // y como evidencia visual al cliente de que el webhook llegó OK.
  const eventId = req.headers[EVENT_ID_HEADER] ?? null
  console.log(
    `[webhook] OK event_id=${eventId} type=${payload.event_type} status=${payload.status} validation_id=${payload.validation_id} external_id=${payload.external_id}`,
  )

  // 200 idempotente. El back marca delivered y no reintenta.
  res.status(200).json({ ok: true, event_id: eventId })
}
