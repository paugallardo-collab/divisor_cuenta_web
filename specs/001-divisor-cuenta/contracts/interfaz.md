# Contratos

## Estrategia

Objeto con una sola función aplicar(valor). calcularDivision(cuenta, estrategia) aplica la fórmula y delega el redondeo, sin validar, formatear ni inspeccionar tipo. Precondición: validarEntrada(cuenta) devuelve null.

## Formulario

Etiquetas Monto total, Personas y Propina (%); selector Redondeo con opciones Exacto y Hacia arriba. Botón Calcular. Resultado con etiqueta Por persona y dos decimales. Error en role=alert, resultado en role=status. No mostrar resultado ante error; cualquier cambio lo elimina. Una pantalla desplazable sin símbolo monetario ni conexión durante el cálculo.

## Dependencias

PantallaDivisor recibe validar, calcular, formatear y opciones. useDivisor usa esas dependencias; main.jsx compone implementaciones. Sin backend o endpoints.
