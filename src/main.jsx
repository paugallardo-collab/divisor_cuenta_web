import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { calcularDivision } from './domain/calcularDivision.js'
import { validarEntrada } from './domain/validarEntrada.js'
import { redondeoExacto } from './data/redondeoExacto.js'
import { redondeoHaciaArriba } from './data/redondeoHaciaArriba.js'
import { formateadorMoneda } from './presentation/formateadorMoneda.js'
import { PantallaDivisor } from './presentation/PantallaDivisor.jsx'
import './index.css'

// Único punto de composición de implementaciones concretas en producción.
const dependencias = {
  validar: validarEntrada,
  calcular: calcularDivision,
  formatear: formateadorMoneda,
  opciones: [
    { id: 'exacto', etiqueta: 'Exacto', estrategia: redondeoExacto() },
    { id: 'arriba', etiqueta: 'Hacia arriba', estrategia: redondeoHaciaArriba() },
  ],
}
createRoot(document.getElementById('root')).render(
  <StrictMode><PantallaDivisor {...dependencias} /></StrictMode>,
)
