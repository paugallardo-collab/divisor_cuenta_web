import { describe, expect, it, vi } from 'vitest'
import { casos } from './casosDePrueba.js'
import { cuenta } from '../src/domain/cuenta.js'
import { validarEntrada } from '../src/domain/validarEntrada.js'
import { calcularDivision } from '../src/domain/calcularDivision.js'
import { redondeoExacto } from '../src/data/redondeoExacto.js'
import { redondeoHaciaArriba } from '../src/data/redondeoHaciaArriba.js'

const estrategias = { exacto: redondeoExacto(), arriba: redondeoHaciaArriba() }

describe('Los mismos seis escenarios de Flutter', () => {
  for (const caso of casos) {
    it(caso.nombre, () => {
      const entrada = cuenta(caso.monto, caso.personas, caso.propina)
      const calcular = vi.fn(calcularDivision)
      const error = validarEntrada(entrada)
      // Mismo orden que producción: validar, detenerse si falla, calcular.
      const resultado = error === null ? calcular(entrada, estrategias[caso.modo]) : null
      if ('errorEsperado' in caso) {
        expect(error).toBe(caso.errorEsperado)
        expect(calcular).not.toHaveBeenCalled()
        expect(resultado).toBeNull()
      } else {
        expect(error).toBeNull()
        expect(calcular).toHaveBeenCalledOnce()
        expect(resultado.porPersona).toBeCloseTo(caso.esperado, 2)
      }
    })
  }
})

it('LSP: el mismo cálculo acepta ambas estrategias sin inspeccionar su tipo', () => {
  const entrada = cuenta(10, 3, 0)
  expect(calcularDivision(entrada, redondeoExacto()).porPersona).toBeCloseTo(3.33, 2)
  expect(calcularDivision(entrada, redondeoHaciaArriba()).porPersona).toBe(4)
})
