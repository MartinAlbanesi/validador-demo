const fs   = require("fs")
const path = require("path")

const ATM_API_KEY = process.env.ATM_API_KEY ?? ""
const OUT         = "dist"

fs.rmSync(OUT, { recursive: true, force: true })
fs.mkdirSync(OUT)
fs.mkdirSync(path.join(OUT, "assets"))
fs.mkdirSync(path.join(OUT, "vendor"))

fs.copyFileSync("index.html",                 path.join(OUT, "index.html"))
fs.copyFileSync("styles.css",                 path.join(OUT, "styles.css"))
fs.copyFileSync("assets/LOGO-ATM.png",        path.join(OUT, "assets/LOGO-ATM.png"))
fs.copyFileSync("vendor/validador-biometrico.js", path.join(OUT, "vendor/validador-biometrico.js"))

// Inject API key into main.js
let js = fs.readFileSync("main.js", "utf8")
js = js.replace(
  /const ATM_API_KEY\s*=\s*"[^"]*"/,
  `const ATM_API_KEY = ${JSON.stringify(ATM_API_KEY)}`,
)
fs.writeFileSync(path.join(OUT, "main.js"), js)

console.log(`Built → ${OUT}/  |  ATM_API_KEY: ${ATM_API_KEY ? "[set]" : "[empty — Mode A]"}`)
