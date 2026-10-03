import { calcularDivision } from '../src/domain/calcularDivision.js'
import { validarEntrada } from '../src/domain/validarEntrada.js'
import { redondeoExacto } from '../src/data/redondeoExacto.js'
import { redondeoHaciaArriba } from '../src/data/redondeoHaciaArriba.js'
import { formateadorMoneda } from '../src/presentation/formateadorMoneda.js'

// Las pruebas pueden componer fixtures; producción solo compone en main.jsx.
export function dependencias() {
  return {
    validar: validarEntrada,
    calcular: calcularDivision,
    formatear: formateadorMoneda,
    opciones: [
      { id: 'exacto', etiqueta: 'Exacto', estrategia: redondeoExacto() },
      { id: 'arriba', etiqueta: 'Hacia arriba', estrategia: redondeoHaciaArriba() },
    ],
  }
}
