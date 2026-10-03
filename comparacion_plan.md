# Comparación de decisiones del plan

Inventario de 50 enunciados/decisiones atómicos del plan Flutter. Se excluyen títulos, fechas, metadatos y notas históricas. Las rutas del árbol cuentan como decisiones de módulos independientes; una fórmula cuenta como una decisión aunque ocupe varias líneas. Los cambios de sintaxis cuentan como modificación del CÓMO aunque conserven el algoritmo. Las etapas de proceso equivalentes se agrupan como una regla de secuencia.

| Enunciado Flutter | Decisión React | Estado |
|---|---|---|
| P1: Dividir cuenta con propina y validación | Mismo comportamiento | idéntico |
| P2: Dos estrategias intercambiables | Dos estrategias intercambiables | idéntico |
| P3: Pantalla Material 3 | Formulario React y CSS local | modificado |
| P4: Estado setState | Estado useState en useDivisor | modificado |
| P5: Inyección desde main.dart | Inyección desde main.jsx | modificado |
| P6: Dart 3.13.1 / Flutter 3.47.1 | JavaScript / React 19.2.8 / Node 22.17 | modificado |
| P7: Flutter SDK, retirar cupertino_icons | React/React DOM y Vite; sin scaffold Flutter | modificado |
| P8: flutter_test y flutter_lints | Vitest, Testing Library, jsdom y oxlint | modificado |
| P9: Sin almacenamiento | Sin almacenamiento | idéntico |
| P10: Sin API ni red de cálculo | Sin API ni red de cálculo | idéntico |
| P11: Android y web; conservar iOS | Solo navegador web | modificado |
| P12: App móvil/web de una pantalla | App web cliente de una pantalla | modificado |
| P13: Cálculo síncrono O(1) | Cálculo síncrono O(1) | idéntico |
| P14: Sin E/S ni espera de red | Sin E/S ni espera de red | idéntico |
| P15: No editar android/ios | No hay plataforma nativa que editar | modificado |
| P16: Validar antes del cálculo | Validar antes del cálculo | idéntico |
| P17: Dos decimales | Dos decimales | idéntico |
| P18: Offline | Cálculo offline tras cargar assets | idéntico |
| P19: Una cuenta sin persistencia ni usuarios | Una cuenta sin persistencia ni usuarios | idéntico |
| P20: EstrategiaRedondeo de Dart | Contrato JSDoc aplicar(number) | modificado |
| P21: Domain/data Dart puro | Domain/data JavaScript puro | modificado |
| P22: Solo main y tests componen concretos | Solo main y tests componen concretos | idéntico |
| P23: Seis escenarios traducidos literalmente antes de implementar | Mismos fixtures traducidos a JavaScript antes del código | idéntico |
| P24: Artefactos en specs/001-divisor-cuenta | Misma estructura de documentos | idéntico |
| P25: lib/domain/cuenta.dart | src/domain/cuenta.js | modificado |
| P26: lib/domain/resultado.dart | src/domain/resultado.js | modificado |
| P27: lib/domain/estrategia_redondeo.dart | src/domain/estrategiaRedondeo.js | modificado |
| P28: lib/domain/calcular_division.dart | src/domain/calcularDivision.js | modificado |
| P29: lib/domain/validar_entrada.dart | src/domain/validarEntrada.js | modificado |
| P30: lib/data/redondeo_exacto.dart | src/data/redondeoExacto.js | modificado |
| P31: lib/data/redondeo_hacia_arriba.dart | src/data/redondeoHaciaArriba.js | modificado |
| P32: lib/presentation/divisor_controller.dart | src/presentation/useDivisor.js | modificado |
| P33: lib/presentation/formateador_moneda.dart | src/presentation/formateadorMoneda.js | modificado |
| P34: lib/presentation/pantalla_divisor.dart | src/presentation/PantallaDivisor.jsx | modificado |
| P35: lib/main.dart | src/main.jsx | modificado |
| P36: test/casos_de_prueba.dart | test/casosDePrueba.js | modificado |
| P37: test/division_test.dart | test/division.test.js | modificado |
| P38: test/pantalla_test.dart | test/pantalla.test.jsx y test/interaccion.test.jsx | modificado |
| P39: test/limites_test.dart | test/limites.test.js | modificado |
| P40: tool/verificar_domain.dart y verificar_arquitectura.ps1 | tool/verificarArquitectura.mjs | modificado |
| P41: Tres capas; data contiene estrategias, no BD | Misma separación de responsabilidades | idéntico |
| P42: Controlador convierte texto, valida, calcula si null | Hook convierte texto, valida, calcula si null | modificado |
| P43: Mapa de estrategias inyectado sin tocar cálculo | Lista de opciones inyectada sin tocar cálculo | idéntico |
| P44: Pantalla recibe controlador y maneja setState | Pantalla recibe dependencias y delega al hook | modificado |
| P45: double → toStringAsFixed(2) | number → toFixed(2) | modificado |
| P46: (valor*100+0.000001).round()/100 | Math.round(valor*100+0.000001)/100 | modificado |
| P47: ceilToDouble() | Math.ceil() | modificado |
| P48: Pantalla desplazable, ancho máximo 520 para web | Pantalla desplazable, card adaptable y máximo 520 móvil | modificado |
| P49: Secuencia diseño → tareas → pruebas → implementación | Mismo flujo SDD | idéntico |
| P50: Análisis, tests, Dart puro, SOLID y APK | Lint, tests, Node puro, SOLID y Vite build | modificado |

34/50 modificados (68.00%); 16 conservados. No confundir este conteo de decisiones con líneas físicas del diff.

Numstat (líneas físicas añadidas/eliminadas, solo referencia):

```text
66	52	{evidencias/original => specs/001-divisor-cuenta}/plan.md
```

Diff íntegro: [plan-diff.txt](evidencias/plan-diff.txt).
