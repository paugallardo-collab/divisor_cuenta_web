import fs from 'node:fs'
import { spawnSync } from 'node:child_process'

// Comandos fijos: preserva salida, código de retorno e instantes observados.
const comandos = {
  build: ['node_modules/vite/bin/vite.js', 'build'],
  dominio: ['node_modules/vitest/vitest.mjs', 'run', 'test/division.test.js'],
  test: ['node_modules/vitest/vitest.mjs', 'run'],
}
const nombre = process.argv[2]
if (!(nombre in comandos)) throw new Error('Usa build, dominio o test')
const ejecucion = spawnSync(process.execPath, comandos[nombre], { encoding: 'utf8', env: { ...process.env, NO_COLOR: '1' }, maxBuffer: 5e6 })
const salida = (ejecucion.stdout ?? '') + (ejecucion.stderr ?? '')
process.stdout.write(salida)
fs.writeFileSync(`evidencias/react-${nombre}.txt`, salida + `\nCódigo de salida: ${ejecucion.status}\n`)
const tiempos = JSON.parse(fs.readFileSync('evidencias/tiempos.json', 'utf8'))
if (ejecucion.status === 0) {
  if (nombre === 'build' && !tiempos.primeraCompilacion) tiempos.primeraCompilacion = new Date().toISOString()
  if (nombre === 'dominio' && !tiempos.seisCasosVerdes) tiempos.seisCasosVerdes = new Date().toISOString()
  fs.writeFileSync('evidencias/tiempos.json', JSON.stringify(tiempos, null, 2) + '\n')
}
process.exit(ejecucion.status ?? 1)
