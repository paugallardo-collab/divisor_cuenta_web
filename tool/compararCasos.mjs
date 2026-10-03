import fs from 'node:fs'
import assert from 'node:assert/strict'
import { casos } from '../test/casosDePrueba.js'

// Extrae únicamente fixtures Dart de la base congelada; no compara sintaxis.
const dart = fs.readFileSync('evidencias/original/casos_de_prueba.dart', 'utf8')
const bloques = [...dart.matchAll(/CasoDivision\(\s*(nombre:[\s\S]*?)\n  \)/g)]
assert.equal(bloques.length, 6)
const campos = ['nombre', 'monto', 'personas', 'propina', 'modo', 'esperado', 'errorEsperado']
const originales = bloques.map(([, contenido]) => {
  const caso = {}
  for (const campo of campos) {
    const valor = contenido.match(new RegExp(`${campo}:\\s*('([^']*)'|[^,\\n]+)`))
    if (valor) caso[campo] = valor[2] ?? (valor[1].trim() === 'double.nan' ? NaN : Number(valor[1]))
  }
  return caso
})
assert.deepEqual(casos, originales)
console.log('Comparación semántica Dart → JavaScript: 6/6 casos idénticos')
for (const caso of casos) console.log(`${caso.nombre}: monto=${caso.monto}, personas=${caso.personas}, propina=${caso.propina}, modo=${caso.modo} → ${caso.errorEsperado ?? caso.esperado.toFixed(2)}`)
console.log('Entradas, escenarios, valores esperados y mensajes sin cambios; solo sintaxis y runner distintos.')
