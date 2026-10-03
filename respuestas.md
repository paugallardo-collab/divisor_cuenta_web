# Respuestas — Deber 2

Borrador elaborado con asistencia del agente. Los datos proceden de archivos, pruebas y comandos de esta sesión. El estudiante debe revisar los ejercicios manuales antes de entregar.

## 1. Porcentaje de especificación que viajó

68/68 enunciados del inventario viajaron intactos: **100% intacto, 0% adaptado, 0% no reutilizable**. CÓMO 0%, MIXTO 0%. La clasificación y sus exclusiones están en [analisis_spec.md](analisis_spec.md). La fórmula, mensajes, límites, interacción y criterios no nombran Flutter. El metadato de rama sdd se conserva como procedencia y no es una regla del producto.

La copia inicial quedó en cb4c5e0 antes del plan c1b06c1. El diff es vacío y los hashes coinciden, tanto inicialmente como al cerrar:

```text
Copia inicial conservada en commit cb4c5e0, antes de planificar React.
Origen: Participacion1oct rama sdd, commit 32d62a1.
Comando: git diff --no-index -- evidencias/original/spec.md specs/001-divisor-cuenta/spec.md
Salida: vacía
Código: 0
SHA-256 original: 670b8bd39a4e47c96de3b783c66ec0722e78ff3d129f6be6c36de8a39c889dd1
SHA-256 React:    670b8bd39a4e47c96de3b783c66ec0722e78ff3d129f6be6c36de8a39c889dd1
Recomprobado al cerrar la entrega: contenido byte por byte idéntico.

```

React compiló a los 15.06 minutos y los seis casos pasaron a los 15.10 minutos desde el flujo plan. Flutter: tiempo no registrado. Estos tiempos describen la sesión; no son por sí solos una medida de calidad. El 30% es el umbral pedagógico de este deber, no una regla universal.

## 2. Reglas de la Constitution

Se inventariaron 30 reglas: 17 idénticas, 13 adaptadas en redacción y 0 reemplazadas. La tabla completa identifica cada regla en [analisis_spec.md](analisis_spec.md).

Ejemplos: «Nunca guardar secretos ni claves de API en Git» permanece igual. «lib/domain no importa package:flutter; puede ejecutarse con Dart sin Flutter» pasa a «src/domain no importa react ni el DOM; puede ejecutarse con JavaScript sin React». «El controlador recibe sus dependencias por constructor» pasa a «El hook recibe sus dependencias por argumento». El contrato aplicar(double valor) pasa a aplicar(number valor). Cambia el lenguaje y mecanismo, se conserva DIP/ISP.

Fuentes íntegras: [Flutter original](evidencias/original/constitution.md) y [React](.specify/memory/constitution.md). La versión 1.0.1 es un parche de redacción tecnológica; los cinco principios SOLID y seguridad, pruebas, aprendizaje y gobernanza permanecen.

## 3. Cambios necesarios en la spec

Ninguno. No se mezclaron librerías, widgets, rutas de producción ni estado Flutter dentro de reglas del producto. Las decisiones dependientes de tecnología estaban en el plan y en redacción adaptable de la constitución. Se intentó planificar con la copia original; [análisis previo](evidencias/analisis-previo.md) no encontró contradicciones bloqueantes. No hubo modificación de spec ni commit de corrección: todos los diffs son vacíos.

## 4. Los seis casos Flutter y React

| Caso | Entrada: monto / personas / propina / modo | Esperado en ambos |
|---|---|---|
| 1 | 100 / 4 / 10 / exacto | 27.50 |
| 2 | 90 / 3 / 0 / exacto | 30.00 |
| 3 | 50 / 0 / 0 / exacto | Debe haber al menos una persona |
| 4 | NaN (abc en UI) / 4 / 0 / exacto | Monto inválido |
| 5 | 10 / 3 / 0 / exacto | 3.33 |
| 6 | 10 / 3 / 0 / arriba | 4.00 |

Cambió la sintaxis Dart/JavaScript y el runner flutter_test/Vitest; no entradas, valores, mensajes ni escenarios. [compararCasos.mjs](tool/compararCasos.mjs) extrae fixtures Dart del snapshot y hace deepEqual contra JavaScript, incluyendo NaN. Pruebas de pantalla también verifican que un error no invoque el cálculo.

## 5. Qué partes del plan dejaron de servir

1. Material 3, widgets y setState → formulario JSX/CSS y useState en un hook.
2. Dart, Flutter SDK y build APK → JavaScript, React/Vite y bundle web dist.
3. flutter_test y runner Dart → Vitest/jsdom y Testing Library.
4. lib/main.dart y constructor de controlador → src/main.jsx y dependencias por argumento del hook.
5. toStringAsFixed/ceilToDouble → toFixed/Math.ceil, conservando el significado.

Inventario reproducible: [comparacion_plan.md](comparacion_plan.md), 34/50 decisiones modificadas. No se cuentan saltos de línea como enunciados. Algoritmo, límites, capas, no persistencia y escenarios se conservan mientras rutas, framework y herramientas cambian. Diff íntegro:

```diff
diff --git a/evidencias/original/plan.md b/specs/001-divisor-cuenta/plan.md
index e343965..78303c9 100644
--- a/evidencias/original/plan.md
+++ b/specs/001-divisor-cuenta/plan.md
@@ -1,75 +1,89 @@
-﻿# Implementation Plan: Divisor de cuenta
+# Implementation Plan: Divisor de cuenta web
 
-**Branch**: `sdd` | **Date**: 2026-09-30 | **Spec**: [spec.md](spec.md)
-**Input**: specs/001-divisor-cuenta/spec.md
+**Branch**: main | **Date**: 2026-10-02 | **Spec**: [spec.md](spec.md)
+**Input**: specs/001-divisor-cuenta/spec.md, copia íntegra de sdd de Participacion1oct.
 
 ## Summary
 
 Dividir una cuenta con propina, validación y dos estrategias intercambiables de redondeo.
-Una pantalla Material 3, estado local setState y dependencias inyectadas desde main.dart.
+Una pantalla React, estado local useState y dependencias inyectadas desde src/main.jsx.
+No se ejecuta speckit-specify; la especificación permanece idéntica.
 
 ## Technical Context
 
-- Language/Version: Dart 3.13.1, Flutter estable 3.47.1 (versiones comprobadas).
-- Primary Dependencies: Flutter SDK; sin paquetes externos en producción. Retirar cupertino_icons del scaffold.
-- Testing: flutter_test del SDK, flutter_lints heredado solo para desarrollo y comprobador Dart puro.
-- Storage: ninguna. Sin API ni red.
-- Target Platform: Android y web; scaffold iOS conservado sin cambios, no verificable desde Windows.
-- Project Type: app móvil/web de una pantalla.
-- Performance Goals: cálculo síncrono O(1), sin tareas de E/S ni espera de red.
-- Constraints: no editar android/ios; validación antes del cálculo; dos decimales; offline.
-- Scale/Scope: una cuenta por vez, sin persistencia ni usuarios.
+- Language/Version: JavaScript ES modules y JSX; Node 22.17.0, npm 10.9.2 comprobados.
+- Primary Dependencies: React/React DOM 19.2.8, Vite 8.3.2 y plugin-react 6.1.1. Sin librería de estado externa.
+- Storage: ninguna. Sin API ni red en ejecución, historial, persistencia ni usuarios.
+- Testing: Vitest 5.0.3, Testing Library React 16.3.3, jest-dom 7.0.1 y jsdom 27.3.0.
+- Target Platform: navegador web; assets locales y ningún recurso CDN. Tras cargar la página, cálculo sin red. No se requiere instalar una PWA ni garantizar la primera carga desconectada.
+- Project Type: aplicación cliente de una pantalla, sin backend. Node solo ejecuta herramientas.
+- Performance Goals: cálculo síncrono O(1), sin E/S.
+- Constraints: validar antes del cálculo; dos decimales; offline durante el cálculo; conservar límites y mensajes.
+- Scale/Scope: una cuenta por vez; viewport estrecho y etiquetas accesibles.
 
 ## Constitution Check
 
-Antes y después del diseño: aprobado. SRP separa cálculo/validación/formato; OCP y LSP usan
-EstrategiaRedondeo; ISP conserva un método; DIP inyecta dependencias desde main.dart.
-Domain y data son Dart puro. Solo tests y main pueden crear las estrategias concretas.
-Los seis escenarios se traducen literalmente a datos de pruebas antes de implementar.
-No hay excepciones a la constitución.
+Antes de investigar y después del diseño: aprobado sin excepciones. SRP separa validar, calcular, formatear y dibujar.
+OCP permite registrar otra estrategia en main sin cambiar cálculo; LSP no inspecciona tipos; ISP solo aplicar(valor).
+DIP: useDivisor recibe validar/calcular/formatear/opciones por argumento; presentation no importa data.
+Domain es JavaScript puro, ejecutable con Node sin React ni DOM. main es el único punto de composición.
+Los seis casos y errores conservan el significado de Dart. Se incluyen pruebas de límites y edición porque la spec los exige.
 
 ## Project Structure
 
-Documentos: spec.md, plan.md, research.md, data-model.md, contracts/interfaz.md,
-quickstart.md, tasks.md y checklists/requirements.md dentro de specs/001-divisor-cuenta/.
+### Documentation (this feature)
+
+specs/001-divisor-cuenta contiene spec.md, plan.md, research.md, data-model.md, contracts/interfaz.md, quickstart.md y tasks.md.
+analisis_spec.md y evidencias/original conservan el inventario y punto de partida.
+
+### Source Code (repository root)
 
 ```text
-lib/
-  domain/cuenta.dart
-  domain/resultado.dart
-  domain/estrategia_redondeo.dart
-  domain/calcular_division.dart
-  domain/validar_entrada.dart
-  data/redondeo_exacto.dart
-  data/redondeo_hacia_arriba.dart
-  presentation/divisor_controller.dart
-  presentation/formateador_moneda.dart
-  presentation/pantalla_divisor.dart
-  main.dart
+src/
+  domain/cuenta.js
+  domain/resultado.js
+  domain/estrategiaRedondeo.js
+  domain/calcularDivision.js
+  domain/validarEntrada.js
+  data/redondeoExacto.js
+  data/redondeoHaciaArriba.js
+  presentation/useDivisor.js
+  presentation/formateadorMoneda.js
+  presentation/PantallaDivisor.jsx
+  main.jsx
+  index.css
 test/
-  casos_de_prueba.dart
-  division_test.dart
-  pantalla_test.dart
-  limites_test.dart
+  casosDePrueba.js
+  setup.js
+  division.test.js
+  pantalla.test.jsx
+  limites.test.js
+  interaccion.test.jsx
 tool/
-  verificar_domain.dart
-  verificar_arquitectura.ps1
+  verificarArquitectura.mjs
+  compararCasos.mjs
 ```
 
-**Structure Decision**: respetar las tres capas exigidas; data contiene estrategias, no una base de datos.
-El controlador convierte texto a Cuenta, llama ValidarEntrada y solo calcula si devuelve null.
-Su mapa de estrategias se inyecta; agregar una estrategia no exige tocar CalcularDivision.
-PantallaDivisor recibe el controlador, renderiza campos, elección y resultado; maneja setState.
-FormateadorMoneda recibe double y devuelve toStringAsFixed(2).
-RedondeoExacto aplica (valor * 100 + 0.000001).round() / 100 para compensar el error binario
-muy pequeño en mitades; la tolerancia representa 0.00000001 unidades monetarias.
-RedondeoHaciaArriba usa ceilToDouble(), sin alterar valores enteros.
-La pantalla es desplazable y limita su ancho a 520 para web; no agrega pantallas ni funciones.
+**Structure Decision**: tres capas; data contiene estrategias, ninguna base de datos.
+useDivisor convierte texto a Cuenta, llama validarEntrada y calcula solo cuando devuelve null.
+Parseo decimal completo con punto o coma: vacío, texto parcial e infinito se rechazan; personas solo enteras.
+El hook recibe opciones de redondeo inyectadas; agregar estrategia no exige editar calcularDivision.
+PantallaDivisor recibe dependencias, usa el hook y renderiza formulario, selección, error y resultado.
+formateadorMoneda recibe un número y devuelve toFixed(2), sin símbolo monetario.
+Redondeo exacto usa Math.round(valor * 100 + 0.000001) / 100, igual tolerancia que Flutter.
+Redondeo hacia arriba usa Math.ceil, conservando los enteros.
+La pantalla permite desplazamiento y ancho adaptable; inputs de texto con inputMode permiten probar abc y coma decimal.
+Editar cualquier campo o modo borra resultado y error. Inicio: monto vacío, 2 personas, propina 0, exacto.
 
 ## Phases
 
-0. Decisiones resueltas con enunciado, SDK instalado y constitution; ninguna investigación delegada necesaria.
-1. Modelos, contrato y guía rápida de ejecución.
-2. Tareas y análisis de cobertura antes del código.
-3. Pruebas primero, dominio, estrategias, controlador, pantalla y composición.
-4. Análisis estático, pruebas, Dart puro, reglas SOLID y APK; registro de resultados.
+0. Investigar compatibilidad en fuentes oficiales y resolver decisiones en research.md.
+1. Modelos, contrato UI/estrategia y quickstart.
+2. Tareas por historia y análisis de cobertura antes del código.
+3. Pruebas de contrato primero, dominio, estrategias, hook, pantalla y composición.
+4. Converger frente a artefactos; pruebas de seis casos, suite completa, lint, build y arquitectura.
+5. Diffs, métricas, respuestas, guía de funciones y publicación GitHub.
+
+## Complexity Tracking
+
+Sin violaciones de la constitución ni excepciones.

```

## 6. Artefactos más y menos reusables

El más reusable es spec.md: copia byte por byte y 68 reglas intactas; los seis escenarios conservaron todo su significado. El menos reusable a nivel de implementación es el código Flutter: se reescribió en JS/JSX, sin copiar archivos Dart a src. Entre artefactos de planificación, el plan/tareas dependía del stack y requirió rehacerse; el inventario y diff del plan muestran las decisiones concretas. La constitución conserva principios con adaptación de lenguaje. Los archivos Dart en evidencias/original son evidencia, no código ejecutable del producto React.

No hay una comparación causal de enfoques ni tiempos Flutter inventados. Los cambios sostienen una conclusión limitada: en este repositorio el conocimiento estable sobrevivió y el CÓMO cambió.

## Bitácora

# Bitácora Deber 2

Migración basada en Participacion1oct/sdd, snapshot 32d62a1. El laboratorio no registró tiempos ni intervenciones observadas: se dejan como «no registrado». React corresponde a esta sesión autorizada por el estudiante.

| Métrica | Flutter (laboratorio) | React (este deber) |
|---|---|---|
| Minutos hasta primera compilación correcta | no registrado | 15.06 |
| Minutos hasta que pasan los 6 casos | no registrado | 15.10 |
| Iteraciones de corrección del estudiante | no registrado | 0 |
| Líneas de código escritas directamente por estudiante | no registrado | 0; código generado por agente |
| Enunciados modificados en spec | — | 0 de 68 |
| Enunciados modificados en Constitution | — | 13 de 30, todos adaptados |
| Enunciados del plan modificados | — | 34 de 50 |
| Líneas físicas del plan | — | Ver numstat en comparacion_plan.md; no es la métrica de enunciados |
| Casos de aceptación | 6/6 verificados en rama sdd | 6/6 |

- Inicio speckit-plan: 02/10/2026, 19:53:08 (America/Bogota).
- Primera compilación: 02/10/2026, 20:08:11. El cronómetro siguió corriendo.
- Fin, seis casos verdes: 02/10/2026, 20:08:14. No incluye tiempo posterior de documentación, verificaciones y subida.
- Instantes UTC originales: [tiempos.json](evidencias/tiempos.json) en React.
- Las herramientas y correcciones autónomas del agente no son iteraciones del estudiante. El pedido inicial no cuenta.
- Base Flutter: 28 pruebas, All tests passed! React: 39 pruebas (6 casos + LSP + 3 pantalla + 29 adicionales).
- speckit-constitution, plan, tasks, analyze e implement se ejecutaron como workflows del agente; los scripts de contexto se conservan en evidencias. No se ejecutó speckit-specify.
- Spec Kit 1.0.13 sí ofrece speckit-converge. Revisión final y resultado en evidencias/convergencia.md del repo React.
- Investigación de compatibilidad delegada por instrucción del flujo plan; no altera el conteo de prompts del estudiante.
- Revisión visual real del navegador pendiente: herramienta de navegador sin superficies conectadas (listBrowsers devolvió []). Vite arrancó en 127.0.0.1:5173; UI funcional cubierta por Testing Library.
- Ejercicios requeridos a mano: analisis_spec.md y test/casosDePrueba.js son borradores del agente; el estudiante debe realizar/revisar su propia clasificación y traducción, y poder explicar las funciones.

La diferencia de tiempo no demuestra superioridad del enfoque: no hay medición comparable de Flutter ni experimento controlado.


## Salidas de verificaciones

### Flutter, rama sdd

```text

┌─────────────────────────────────────────────────────────┐
│ A new version of Flutter is available!                  │
│                                                         │
│ To update to the latest version, run "flutter upgrade". │
└─────────────────────────────────────────────────────────┘
00:00 +0: loading C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/division_test.dart
00:00 +0: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/limites_test.dart: Rechaza monto -1.0
00:00 +1: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/limites_test.dart: Rechaza monto NaN
00:00 +2: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +3: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +4: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +5: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +6: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +7: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +8: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +9: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +10: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +11: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +12: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +13: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +14: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +15: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +16: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +17: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +18: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:00 +19: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 1
00:03 +20: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 2
00:04 +21: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 3
00:04 +22: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 4
00:05 +23: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 5
00:05 +24: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla: escenario 6
00:06 +25: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Editar borra el resultado y un error no lo recupera
00:07 +26: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Cambiar modo borra resultado; acepta coma decimal
00:07 +27: C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/Participacion1oct/test/pantalla_test.dart: Pantalla estrecha y texto grande sin desbordamiento
00:08 +28: All tests passed!

```

### Primer build React

```text
vite v8.3.2 building client environment for production...
transforming...
✓ 24 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.64 kB │ gzip:  0.38 kB
dist/assets/index-DITnDv6w.css    6.02 kB │ gzip:  2.05 kB
dist/assets/index-DChCQgkN.js   196.51 kB │ gzip: 61.94 kB

✓ built in 611ms

Código de salida: 0

```

### Seis casos y LSP

```text

 RUN  v5.0.3 C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/deber2/divisor_cuenta_web


 Test Files  1 passed (1)
      Tests  7 passed (7)
   Start at  20:08:12
   Duration  1.92s (environment 70%, setup 17%, transform 9%, import 2%, worker 1%, tests 1%)


Código de salida: 0

```

### Suite completa

```text

 RUN  v5.0.3 C:/FlutterProjects/Prog.-Asistida-de-Aplicaciones/deber2/divisor_cuenta_web


 Test Files  4 passed (4)
      Tests  39 passed (39)
   Start at  20:08:15
   Duration  3.72s (environment 56%, tests 20%, setup 16%, transform 5%, import 2%, worker 1%)


Código de salida: 0

```

### Arquitectura y equivalencia

```text

> divisor_cuenta_web@1.0.0 verificar
> node tool/verificarArquitectura.mjs && node tool/compararCasos.mjs

Domain ejecutado con Node sin React ni DOM: OK
DIP: presentation no importa data; implementaciones concretas solo en main.jsx: OK
SRP, OCP, LSP e ISP: cálculo sin validación/formato/condiciones por estrategia: OK
Assets locales: no hay dependencia CDN en index.html ni src: OK
Comparación semántica Dart → JavaScript: 6/6 casos idénticos
1. reparto normal: monto=100, personas=4, propina=10, modo=exacto → 27.50
2. sin propina: monto=90, personas=3, propina=0, modo=exacto → 30.00
3. cero personas: monto=50, personas=0, propina=0, modo=exacto → Debe haber al menos una persona
4. monto no numerico: monto=NaN, personas=4, propina=0, modo=exacto → Monto inválido
5. redondeo exacto: monto=10, personas=3, propina=0, modo=exacto → 3.33
6. redondeo hacia arriba: monto=10, personas=3, propina=0, modo=arriba → 4.00
Entradas, escenarios, valores esperados y mensajes sin cambios; solo sintaxis y runner distintos.

```

### Lint

```text

> divisor_cuenta_web@1.0.0 lint
> oxlint


```

Constitución diff completa: [constitution-diff.txt](evidencias/constitution-diff.txt). Workflows: [analyze](evidencias/analisis-previo.md), [converge](evidencias/convergencia.md). Revisión visual en navegador pendiente por ausencia de navegador conectado, no se atribuye al estudiante.
