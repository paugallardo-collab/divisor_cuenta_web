/** Estrategia a centavos; conserva la tolerancia binaria de Flutter. */
export function redondeoExacto() {
  return Object.freeze({ aplicar: valor => Math.round(valor * 100 + 0.000001) / 100 })
}
