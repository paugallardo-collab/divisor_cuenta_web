import { expect, it } from 'vitest'
import { cuenta } from '../src/domain/cuenta.js'
import { validarEntrada } from '../src/domain/validarEntrada.js'
import { calcularDivision } from '../src/domain/calcularDivision.js'
import { redondeoExacto } from '../src/data/redondeoExacto.js'
import { redondeoHaciaArriba } from '../src/data/redondeoHaciaArriba.js'

it.each([-1, NaN, Infinity, 1000000001])('Rechaza monto %s', monto => {
  expect(validarEntrada(cuenta(monto, 2, 0))).toBe('Monto inválido')
})
it.each([0, -1, 1.5, NaN, Infinity])('Rechaza personas %s', personas => {
  expect(validarEntrada(cuenta(10, personas, 0))).toBe('Debe haber al menos una persona')
})
it('Personas fuera del límite superior', () => {
  expect(validarEntrada(cuenta(10, 1000001, 0))).toBe('Máximo 1000000 personas')
})
it.each([-1, NaN, Infinity, 101])('Rechaza propina %s', propina => {
  expect(validarEntrada(cuenta(10, 2, propina))).toBe('Propina inválida')
})
it('Acepta cero y límites inclusivos', () => {
  expect(validarEntrada(cuenta(0, 1, 0))).toBeNull()
  expect(validarEntrada(cuenta(1e9, 1e6, 100))).toBeNull()
})
it('Exacto conserva mitades hacia arriba como Flutter', () => {
  expect(calcularDivision(cuenta(1.005, 1, 0), redondeoExacto()).porPersona).toBe(1.01)
})
it('Techo no incrementa un entero', () => {
  expect(calcularDivision(cuenta(12, 3, 0), redondeoHaciaArriba()).porPersona).toBe(4)
})
