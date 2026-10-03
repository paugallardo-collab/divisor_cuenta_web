/** Estrategia al entero superior; un entero permanece igual. */
export function redondeoHaciaArriba() {
  return Object.freeze({ aplicar: valor => Math.ceil(valor) })
}
