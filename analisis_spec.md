# Análisis de reutilización

Borrador elaborado por el agente antes de planificar e implementar React. El deber pide que el estudiante haga esta clasificación a mano: debe revisarla y realizar su propio análisis antes de entregar.

Origen: Participacion1oct, rama sdd, commit 32d62a1. Feature: specs/001-divisor-cuenta. Los originales se conservan en evidencias/original.

## Método

Se cuentan requisitos, reglas y criterios atómicos, incluyendo entidades, supuestos y repeticiones en secciones distintas. Se excluyen títulos, fechas, metadatos de rama, prioridades, explicaciones de prioridad, instrucciones de prueba y notas históricas de Clarifications: no son reglas del producto. Una lista de entradas equivalentes con un mismo mensaje es una regla de validación. Se separan resultados independientes, restricciones de ausencia y valores iniciales. El porcentaje describe este inventario y no una medición universal.

## Especificación

| Enunciado de la spec | Tipo (QUÉ/CÓMO/MIXTO) | ¿Viaja a React? | Justificación |
|---|---|---|---|
| S01: Ingresar monto, personas y porcentaje de propina. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S02: Ver cuánto paga cada persona. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S03: Con 100.00, 4 personas, 10%, exacto, mostrar 27.50. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S04: Con 90.00, 3 personas, 0%, exacto, mostrar 30.00. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S05: Mostrar un mensaje comprensible ante entrada inválida. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S06: No mostrar resultados ante entrada inválida. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S07: Con 50.00 y 0 personas, mostrar «Debe haber al menos una persona». | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S08: Con 50.00 y 0 personas, no mostrar resultado. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S09: Con monto «abc», mostrar «Monto inválido». | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S10: Con monto «abc», no mostrar resultado. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S11: Elegir redondeo exacto o hacia arriba al entero más cercano. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S12: Con 10.00, 3 personas, 0%, exacto, mostrar 3.33. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S13: Con 10.00, 3 personas, 0%, hacia arriba, mostrar 4.00. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S14: Monto vacío, texto, NaN, infinito o negativo produce «Monto inválido». | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S15: Personas vacías, fraccionarias, negativas o cero producen «Debe haber al menos una persona». | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S16: Propina vacía, no numérica, negativa o no finita produce «Propina inválida». | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S17: Cero monto es válido. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S18: Cero propina es válido. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S19: Cambiar entradas elimina el resultado anterior hasta recalcular. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S20: Cambiar modo elimina el resultado anterior hasta recalcular. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S21: Aceptar punto o coma decimal sin separadores de miles. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S22: Mostrar punto y dos decimales. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S23: Evitar desbordamientos usando los límites de Assumptions. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S24: FR-001: ingresar monto total. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S25: FR-001: ingresar número entero de personas. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S26: FR-001: ingresar porcentaje de propina. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S27: FR-001: usar una pantalla. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S28: FR-002: calcular (monto × (1 + propina / 100)) / personas al tocar Calcular. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S29: FR-003: elegir exacto (centavos) o hacia arriba (techo al entero). | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S30: FR-004: mostrar pago por persona con exactamente dos decimales. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S31: FR-005: validar antes de calcular. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S32: FR-005: ante error no mostrar resultados antiguos ni nuevos. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S33: FR-006: funcionar sin conexión. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S34: FR-006: sin cuentas de usuario. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S35: FR-006: sin red. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S36: FR-006: sin historial. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S37: FR-006: sin base de datos. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S38: FR-007: permitir corregir y recalcular. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S39: FR-007: eliminar resultados al modificar entradas o modo. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S40: Cuenta contiene monto total. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S41: Cuenta contiene personas. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S42: Cuenta contiene porcentaje de propina. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S43: Resultado contiene importe numérico por persona. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S44: Modo de redondeo: exacto o hacia arriba. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S45: SC-001: seis escenarios con mensajes e importes exactamente especificados. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S46: SC-002: una entrada inválida nunca deja resultado visible. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S47: SC-003: resolver en una pantalla. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S48: SC-003: resolver con una pulsación de Calcular. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S49: SC-004: el cálculo no necesita Internet. | QUÉ | Intacto | Regla verificable sin dependencia de Flutter. |
| S50: Moneda genérica. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S51: Sin conversión monetaria. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S52: Sin símbolo que presuponga dólares o pesos. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S53: Inicio con monto vacío. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S54: Inicio con 2 personas. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S55: Inicio con 0% de propina. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S56: Inicio en modo exacto. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S57: Montos entre 0 y 1000000000. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S58: Personas entre 1 y 1000000. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S59: Propina entre 0 y 100. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S60: Monto fuera del límite produce «Monto inválido». | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S61: Propina fuera del límite produce «Propina inválida». | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S62: Más de un millón de personas produce «Máximo 1000000 personas». | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S63: Exacto significa dos decimales por persona. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S64: No redistribuir centavos sobrantes. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S65: Redondear mitades hacia arriba con tolerancia pequeña al error binario. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S66: Accesibilidad: etiquetas de campos. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S67: Accesibilidad: desplazamiento vertical. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |
| S68: Accesibilidad: mensajes de error legibles. | QUÉ | Intacto | Comportamiento, dato o restricción independiente del framework. |

Total: 68 enunciados; QUÉ 68 (100%), CÓMO 0 (0%), MIXTO 0 (0%). Viaja intacto 100%; adaptado 0%; no reutilizable 0%. No se cambió ningún byte de spec.md. El 30% es únicamente el umbral pedagógico de este deber.

## Constitución, por separado

Las citas abreviadas identifican reglas; el texto íntegro de ambas constituciones es la evidencia. Los cambios de nombres preservan significado.

| Regla Flutter | Regla React | Clasificación | Justificación |
|---|---|---|---|
| C01: Cada clase tiene una razón de cambio. | Cada función o módulo tiene una razón de cambio. | adaptada en redacción | Mismo principio; nombres, lenguaje, ruta o mecanismo de inyección adaptados. |
| C02: CalcularDivision calcula: no valida entradas ni formatea texto. | calcularDivision calcula: no valida entradas ni formatea texto. | adaptada en redacción | Mismo principio; nombres, lenguaje, ruta o mecanismo de inyección adaptados. |
| C03: ValidarEntrada valida. | validarEntrada valida. | adaptada en redacción | Mismo principio; nombres, lenguaje, ruta o mecanismo de inyección adaptados. |
| C04: FormateadorMoneda formatea. | formateadorMoneda formatea. | adaptada en redacción | Mismo principio; nombres, lenguaje, ruta o mecanismo de inyección adaptados. |
| C05: La pantalla dibuja y delega. | La pantalla dibuja y delega. | idéntica | Principio independiente de tecnología. |
| C06: Nueva regla implementando EstrategiaRedondeo, sin editar cálculo ni estrategias existentes. | Nueva regla implementando estrategiaRedondeo, sin editar cálculo ni estrategias existentes. | adaptada en redacción | Mismo principio; nombres, lenguaje, ruta o mecanismo de inyección adaptados. |
| C07: Su registro se hace en el punto de composición. | Su registro se hace en el punto de composición. | idéntica | Principio independiente de tecnología. |
| C08: Toda estrategia recibe importe finito no negativo. | Toda estrategia recibe importe finito no negativo. | idéntica | Principio independiente de tecnología. |
| C09: Toda estrategia devuelve importe finito no negativo. | Toda estrategia devuelve importe finito no negativo. | idéntica | Principio independiente de tecnología. |
| C10: CalcularDivision usa cualquier estrategia sin tipos, casts ni condiciones por implementación. | calcularDivision usa cualquier estrategia sin tipos, casts ni condiciones por implementación. | adaptada en redacción | Mismo principio; nombres, lenguaje, ruta o mecanismo de inyección adaptados. |
| C11: Una prueba sustituye ambas estrategias en el mismo caso de uso. | Una prueba sustituye ambas estrategias en el mismo caso de uso. | idéntica | Principio independiente de tecnología. |
| C12: EstrategiaRedondeo expone solamente aplicar(double valor). | estrategiaRedondeo expone solamente aplicar(number valor). | adaptada en redacción | Mismo principio; nombres, lenguaje, ruta o mecanismo de inyección adaptados. |
| C13: No contiene validación, formato ni UI. | No contiene validación, formato ni UI. | idéntica | Principio independiente de tecnología. |
| C14: presentation depende de domain, nunca de data. | presentation depende de domain, nunca de data. | idéntica | Principio independiente de tecnología. |
| C15: data implementa abstracciones de domain. | data implementa abstracciones de domain. | idéntica | Principio independiente de tecnología. |
| C16: El controlador recibe dependencias por constructor. | El hook recibe dependencias por argumento. | adaptada en redacción | Mismo principio; nombres, lenguaje, ruta o mecanismo de inyección adaptados. |
| C17: Solo lib/main.dart instancia redondeos concretos en producción; pruebas pueden crear fixtures. | Solo src/main.jsx instancia redondeos concretos en producción; pruebas pueden crear fixtures. | adaptada en redacción | Mismo principio; nombres, lenguaje, ruta o mecanismo de inyección adaptados. |
| C18: Capas: presentation -> domain <- data. | Capas: src/presentation -> src/domain <- src/data. | adaptada en redacción | Mismo principio; nombres, lenguaje, ruta o mecanismo de inyección adaptados. |
| C19: lib/domain no importa package:flutter. | src/domain no importa react ni el DOM. | adaptada en redacción | Mismo principio; nombres, lenguaje, ruta o mecanismo de inyección adaptados. |
| C20: Domain puede ejecutarse con Dart sin Flutter. | Domain puede ejecutarse con JavaScript sin React. | adaptada en redacción | Mismo principio; nombres, lenguaje, ruta o mecanismo de inyección adaptados. |
| C21: main.dart es el punto de composición. | src/main.jsx es el punto de composición. | adaptada en redacción | Mismo principio; nombres, lenguaje, ruta o mecanismo de inyección adaptados. |
| C22: Nunca guardar secretos ni claves de API en Git. | Nunca guardar secretos ni claves de API en Git. | idéntica | Principio independiente de tecnología. |
| C23: Toda funcionalidad crítica tiene pruebas. | Toda funcionalidad crítica tiene pruebas. | idéntica | Principio independiente de tecnología. |
| C24: Cada criterio de aceptación se vuelve ejecutable. | Cada criterio de aceptación se vuelve ejecutable. | idéntica | Principio independiente de tecnología. |
| C25: Toda función generada debe ser explicable por el estudiante: propósito, entradas, salida y errores. | Toda función generada debe ser explicable por el estudiante: propósito, entradas, salida y errores. | idéntica | Principio independiente de tecnología. |
| C26: Evidencia: análisis estático, pruebas, compilación y capas. | Evidencia: análisis estático, pruebas, compilación y capas. | idéntica | Principio independiente de tecnología. |
| C27: Constitución prevalece sobre implementación. | Constitución prevalece sobre implementación. | idéntica | Principio independiente de tecnología. |
| C28: Corregir incumplimiento primero en artefacto de origen y después código. | Corregir incumplimiento primero en artefacto de origen y después código. | idéntica | Principio independiente de tecnología. |
| C29: Documentar modificaciones con motivo y versión semántica. | Documentar modificaciones con motivo y versión semántica. | idéntica | Principio independiente de tecnología. |
| C30: Toda revisión comprueba reglas con evidencia. | Toda revisión comprueba reglas con evidencia. | idéntica | Principio independiente de tecnología. |

Total 30: 17 idénticas, 13 adaptadas y 0 reemplazadas. No hay nuevos principios.
