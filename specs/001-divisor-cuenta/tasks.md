# Tasks: Divisor de cuenta web

**Input**: specs/001-divisor-cuenta/spec.md, plan.md, research.md, data-model.md y contracts/interfaz.md.
Pruebas solicitadas explícitamente por Deber2. No hay checklists pendientes ni extensions.yml.

## Phase 1: Setup

- [x] T001 Crear Vite React y fijar dependencias compatibles en package.json y package-lock.json.
- [x] T002 Importar spec idéntica y adaptar .specify/memory/constitution.md con evidencia en analisis_spec.md.
- [x] T003 Configurar Vitest/jsdom en vite.config.js y test/setup.js, scripts y .gitignore.

## Phase 2: Foundational

- [x] T004 Congelar seis casos equivalentes a Dart en test/casosDePrueba.js.
- [x] T005 [P] Crear modelos inmutables en src/domain/cuenta.js y src/domain/resultado.js.
- [x] T006 [P] Documentar contrato aplicar(valor) en src/domain/estrategiaRedondeo.js.

## Phase 3: User Story 1 — Repartir (P1, MVP)

Objetivo: ingresar los tres datos y obtener el importe en una pantalla.
Prueba independiente: escenarios 1 y 2, 27.50 y 30.00.

- [x] T007 [US1] Crear runner de seis casos y LSP en test/division.test.js y prueba normal en test/pantalla.test.jsx; ejecutar antes de implementar.
- [x] T008 [US1] Calcular fórmula sin validar ni formatear en src/domain/calcularDivision.js (FR-002).
- [x] T009 [P] [US1] Crear formateador de dos decimales sin símbolo en src/presentation/formateadorMoneda.js (FR-004).
- [x] T010 [US1] Implementar estado useState e inyección en src/presentation/useDivisor.js (FR-001, FR-002).
- [x] T011 [US1] Crear formulario accesible en src/presentation/PantallaDivisor.jsx y src/index.css (FR-001, SC-003).

## Phase 4: User Story 2 — Corregir (P1)

Objetivo: validación exacta y ausencia de resultado inválido.
Prueba independiente: escenarios 3 y 4; «Debe haber al menos una persona» y «Monto inválido».

- [x] T012 [P] [US2] Crear pruebas de errores UI en test/pantalla.test.jsx, límites en test/limites.test.js y edición en test/interaccion.test.jsx.
- [x] T013 [US2] Validar monto 0..1000000000, personas enteras 1..1000000 y propina 0..100 en src/domain/validarEntrada.js; conservar mensajes literales (FR-005).
- [x] T014 [US2] Parsear punto/coma y rechazar vacío/texto parcial; limpiar resultado/error al editar campos o modo en src/presentation/useDivisor.js (FR-005, FR-007, SC-002).

## Phase 5: User Story 3 — Elegir redondeo (P2)

Objetivo: mismas estrategias y semántica.
Prueba independiente: escenarios 5 y 6, 3.33 y 4.00; LSP con un único calcularDivision.

- [x] T015 [P] [US3] Implementar Math.round con tolerancia en src/data/redondeoExacto.js.
- [x] T016 [P] [US3] Implementar Math.ceil en src/data/redondeoHaciaArriba.js.
- [x] T017 [US3] Componer estrategias solo en src/main.jsx e inyectar selector a PantallaDivisor (FR-003).

## Phase 6: Polish y comprobaciones

- [x] T018 Implementar y ejecutar capas/domain puro en tool/verificarArquitectura.mjs y comparación semántica de casos en tool/compararCasos.mjs (FR-006, SC-004, SOLID).
- [x] T019 Ejecutar convergencia frente a spec/plan/tasks y conservar resumen en evidencias/convergencia.md.
- [x] T020 Compilar por primera vez, ejecutar seis casos y detener cronómetro; suite completa, lint, verificar y build final; registrar en evidencias/ y bitacora.md (SC-001).
- [x] T021 Comparar spec, constituciones y planes; completar respuestas.md, GUIA_APP.md y README.md; publicar GitHub con historial separado.

## Dependencies & Execution Order

Setup → Foundational → US1 → US2 → US3 → Polish. T007 y T012 se escriben primero y fallan antes del código.
US1 necesita modelos y estrategia exacta; T015 puede adelantarse como soporte de US1. US2 es comprobable con entradas inválidas sin calcular. US3 reutiliza las bases de US1.
Ejemplos de trabajo paralelo por archivos: US1 cálculo/formateador; US2 límites/interacción; US3 ambas estrategias. No se ejecutan ediciones concurrentes del mismo archivo.

## Implementation Strategy

MVP: US1 con cálculo válido y exacto. Luego validación/edición (US2), selección de estrategias (US3), y verificaciones completas. No se entrega mientras falten casos o constitución. El estudiante revisa los ejercicios que el deber exige a mano.
