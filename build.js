/**
 * Build estático del demo. Vercel lo ejecuta como buildCommand.
 *
 * Antes inyectaba ATM_API_KEY directo al main.js (la key viajaba al
 * browser). Ahora la creación de sesión y el fetch de PII pasan por
 * Vercel Functions en api/, que tienen la key server-side via env var.
 * El frontend ya no necesita la key — y este build no la toca.
 */
const fs   = require("fs")
const path = require("path")

const OUT = "dist"

fs.rmSync(OUT, { recursive: true, force: true })
fs.mkdirSync(OUT)
fs.mkdirSync(path.join(OUT, "assets"))

fs.copyFileSync("index.html",          path.join(OUT, "index.html"))
fs.copyFileSync("styles.css",          path.join(OUT, "styles.css"))
fs.copyFileSync("main.js",             path.join(OUT, "main.js"))
fs.copyFileSync("assets/LOGO-ATM.png", path.join(OUT, "assets/LOGO-ATM.png"))

console.log(`Built → ${OUT}/`)
