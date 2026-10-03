/** null indica éxito; el primer error determina el mensaje visible. */
export function validarEntrada(cuenta) {
  if (!Number.isFinite(cuenta.monto) || cuenta.monto < 0 || cuenta.monto > 1e9) {
    return 'Monto inválido'
  }
  if (!Number.isInteger(cuenta.personas) || cuenta.personas < 1) {
    return 'Debe haber al menos una persona'
  }
  if (cuenta.personas > 1000000) return 'Máximo 1000000 personas'
  if (!Number.isFinite(cuenta.propina) || cuenta.propina < 0 || cuenta.propina > 100) {
    return 'Propina inválida'
  }
  return null
}
