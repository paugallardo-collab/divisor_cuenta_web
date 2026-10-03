import { useState } from 'react'
import { cuenta } from '../domain/cuenta.js'

/** Convierte toda la cadena decimal; vacío o texto parcial producen NaN. */
function numero(texto) {
  const normalizado = texto.trim().replace(',', '.')
  return /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(normalizado) ? Number(normalizado) : NaN
}

/** Personas se expresa como entero; no trunca fracciones. */
function entero(texto) {
  const normalizado = texto.trim()
  return /^[+-]?\d+$/.test(normalizado) ? Number(normalizado) : NaN
}

/** Estado y coordinación; todas las dependencias llegan por argumento. */
export function useDivisor({ validar, calcular, formatear, opciones }) {
  const [entrada, setEntrada] = useState({ monto: '', personas: '2', propina: '0' })
  const [modo, setModo] = useState(opciones[0].id)
  const [salida, setSalida] = useState({ error: null, resultado: null })

  function cambiar(campo, valor) {
    setEntrada(anterior => ({ ...anterior, [campo]: valor }))
    setSalida({ error: null, resultado: null })
  }

  function seleccionar(id) {
    setModo(id)
    setSalida({ error: null, resultado: null })
  }

  function enviar(evento) {
    evento.preventDefault()
    const datos = cuenta(numero(entrada.monto), entero(entrada.personas), numero(entrada.propina))
    const error = validar(datos)
    if (error !== null) {
      setSalida({ error, resultado: null })
      return
    }
    const seleccion = opciones.find(opcion => opcion.id === modo)
    const division = calcular(datos, seleccion.estrategia)
    setSalida({ error: null, resultado: formatear(division.porPersona) })
  }

  return { entrada, modo, ...salida, cambiar, seleccionar, enviar }
}
