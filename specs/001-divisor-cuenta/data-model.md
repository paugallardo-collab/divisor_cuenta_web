# Modelo de datos

- Cuenta: monto y propina números finitos; personas entero. Monto entre 0 y 1000000000; personas entre 1 y 1000000; propina entre 0 y 100. Modelo sin validación; validarEntrada es la única autoridad.
- Resultado: porPersona numérico; formateadorMoneda produce dos decimales con punto.
- Estrategia: aplicar(valor), importe finito no negativo → importe finito no negativo.
- Opción: id, etiqueta y estrategia inyectada. La UI no conoce implementaciones de data.
- Estado: monto vacío, personas «2», propina «0», primera opción exacto, error null y resultado null. Edición → sin error ni resultado; enviar inválido → error sin resultado; enviar válido → resultado sin error.

Mensajes exactos: «Monto inválido», «Debe haber al menos una persona», «Máximo 1000000 personas», «Propina inválida».
