/** Datos inmutables; la validación pertenece a validarEntrada. */
export function cuenta(monto, personas, propina) {
  return Object.freeze({ monto, personas, propina })
}
