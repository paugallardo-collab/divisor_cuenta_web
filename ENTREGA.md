# Deber 2 — entrega

Programación Asistida de Aplicaciones · USFQ · Prof. Jose David Vega Sánchez.

## Proyectos solicitados

- Flutter: https://github.com/paugallardo-collab/divisor_cuenta/tree/sdd
- React: https://github.com/paugallardo-collab/divisor_cuenta_web
- Procedencia Flutter: https://github.com/paugallardo-collab/Participacion1oct/tree/sdd; snapshot original 32d62a1. Se conserva su historial y se publica también con el nombre divisor_cuenta solicitado por el enunciado.

Ambos proyectos solicitados son privados. El profesor debe tener acceso a ambos repositorios.

## Correspondencia con el enunciado

| Requisito | Archivo o evidencia | Resultado |
|---|---|---|
| Flutter base en rama sdd | Repositorio divisor_cuenta/sdd; log Flutter del 08/10 | 28 pruebas pasan, incluidos seis casos, LSP y pantalla |
| Constitution y feature localizados | .specify/memory/constitution.md; specs/001-divisor-cuenta/ | Rutas explícitas en ambos proyectos |
| Spec copiada antes del plan | evidencias/spec-inicial.txt; commits cb4c5e0 y c1b06c1 | Copia idéntica, diff vacío; sin speckit-specify |
| Clasificar QUÉ/CÓMO/MIXTO | analisis_spec.md | 68 enunciados; QUÉ 100%, CÓMO 0%, MIXTO 0% |
| Constitución analizada por separado | analisis_spec.md; originales y constitution-diff.txt | 30 reglas: 17 idénticas, 13 adaptadas, 0 reemplazadas |
| Umbral pedagógico del 30% | analisis_spec.md y respuestas.md | Se explica que no es universal |
| Plan y tareas React | specs/001-divisor-cuenta/plan.md y tasks.md | Rehechos para React; 34/50 decisiones del plan modificadas |
| Analyze y converge | evidencias/analisis-previo.md y convergencia.md | Ejecutados; sin brechas técnicas identificadas |
| Mismos seis escenarios | test/casosDePrueba.js; tool/compararCasos.mjs | Entradas, valores y errores equivalentes a Dart |
| Todas las pruebas React | evidencias/verificacion-2026-10-08-tests-final.txt | 39/39, incluidos 6 casos + LSP + 3 pantalla |
| Build, lint y capas | Logs del 08/10; tool/verificarArquitectura.mjs | Correctos; dominio puro, concretos compuestos en main |
| Bitácora observada | bitacora.md; evidencias/tiempos.json | Build 15.06 min; seis casos 15.10 min; Flutter histórico no registrado |
| Seis respuestas y salidas pegadas | respuestas.md | Completas, con diffs, bitácora y salidas |
| Explicación de funciones | GUIA_APP.md | Propósito, entradas, salidas y errores documentados |

## Atribución y alcance

El estudiante realizó personalmente el análisis de la especificación y la constitución, la clasificación de los enunciados y la traducción de los seis casos de aceptación. La implementación del código se realizó con asistencia de Codex. La explicación personal del código y el envío académico corresponden al estudiante. Las pruebas de interfaz son automatizadas; no se presenta una revisión visual humana como realizada.

## Archivos para subir

El enunciado solicita los dos proyectos en GitHub, analisis_spec.md y respuestas.md dentro de React, bitácora y salidas de verificación. No exige por sí mismo un PDF ni un ZIP. Se facilitan Deber2_entrega_completa.zip y Deber2_informe_final.pdf como formatos adicionales si la plataforma o el profesor los solicita. Todos los archivos originales exigidos están incluidos en el ZIP y en los repositorios.
