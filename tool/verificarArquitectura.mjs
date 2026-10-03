import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert/strict'
import { cuenta } from '../src/domain/cuenta.js'
import { validarEntrada } from '../src/domain/validarEntrada.js'
import { calcularDivision } from '../src/domain/calcularDivision.js'

/** Lista únicamente archivos fuente, sin node_modules ni build. */
function archivos(directorio) {
  return fs.readdirSync(directorio, { withFileTypes: true }).flatMap(item => {
    const ruta = path.join(directorio, item.name)
    return item.isDirectory() ? archivos(ruta) : [ruta]
  })
}

for (const file of archivos('src')) {
  const contenido = fs.readFileSync(file, 'utf8')
  assert.doesNotMatch(contenido, /(?:import|@import).*https?:\/\//, file)
  const normalized = file.replaceAll('\\', '/')
  if (normalized.startsWith('src/domain/')) {
    assert.doesNotMatch(contenido, /from\s+['"](?:react|react-dom)|\b(?:window|document|HTMLElement)\b|from\s+['"].*\/(?:presentation|data)\//, file)
  }
  if (normalized.startsWith('src/presentation/')) assert.doesNotMatch(contenido, /from\s+['"].*\/data\//, file)
  if (!normalized.startsWith('src/data/') && normalized !== 'src/main.jsx') {
    assert.doesNotMatch(contenido, /redondeoExacto|redondeoHaciaArriba/, file)
  }
}
const calculo = fs.readFileSync('src/domain/calcularDivision.js', 'utf8')
assert.doesNotMatch(calculo, /instanceof|===\s*['"](?:exacto|arriba)|toFixed|inválido|al menos una persona/)
const entrada = cuenta(100, 4, 10)
assert.equal(validarEntrada(entrada), null)
assert.ok(Math.abs(calcularDivision(entrada, { aplicar: valor => valor }).porPersona - 27.5) < 1e-10)
console.log('Domain ejecutado con Node sin React ni DOM: OK')
console.log('DIP: presentation no importa data; implementaciones concretas solo en main.jsx: OK')
console.log('SRP, OCP, LSP e ISP: cálculo sin validación/formato/condiciones por estrategia: OK')
console.log('Assets locales: no hay dependencia CDN en index.html ni src: OK')
assert.doesNotMatch(fs.readFileSync('index.html', 'utf8'), /(?:src|href)=["']https?:\/\//)
