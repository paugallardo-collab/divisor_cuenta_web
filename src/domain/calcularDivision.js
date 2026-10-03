import { resultado } from './resultado.js'

/** Calcula sobre una Cuenta validada; delega redondeo sin inspeccionar tipos.
 * @param {{monto: number, personas: number, propina: number}} cuenta
 * @param {import('./estrategiaRedondeo.js').EstrategiaRedondeo} estrategia
 */
export function calcularDivision(cuenta, estrategia) {
  const total = cuenta.monto * (1 + cuenta.propina / 100)
  return resultado(estrategia.aplicar(total / cuenta.personas))
}
