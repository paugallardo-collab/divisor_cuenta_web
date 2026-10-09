# Cuenta Clara · Deber 2

Migración SDD del divisor de cuenta de Flutter a React/Vite/JavaScript. Una pantalla, propina y dos estrategias, sin backend, historial ni persistencia.

Origen confirmado: [Participacion1oct, rama sdd](https://github.com/paugallardo-collab/Participacion1oct/tree/sdd), snapshot 32d62a1; es la participación del 1 de octubre. La misma historia Flutter se publica también con el nombre solicitado: [divisor_cuenta, rama sdd](https://github.com/paugallardo-collab/divisor_cuenta/tree/sdd). React: [divisor_cuenta_web](https://github.com/paugallardo-collab/divisor_cuenta_web). Ambos privados, igual que el laboratorio.

## Ejecutar

```powershell
cd 'C:\FlutterProjects\Prog.-Asistida-de-Aplicaciones\deber2\divisor_cuenta_web'
$env:SPECIFY_FEATURE_DIRECTORY = 'specs/001-divisor-cuenta'
npm ci
npm run dev
```

Node comprobado 22.17.0 y npm 10.9.2; jsdom 27.3.0 fijado para ese runtime. Vite muestra la URL; Ctrl+C detiene. Compilar: npm run build. Ver build: npm run preview. Cálculo sin red después de cargar los assets locales; no requiere instalación PWA.

## Entrega

- [Respuestas a las seis preguntas y salidas](respuestas.md).
- [Análisis de spec y constitución](analisis_spec.md): 68 enunciados spec, 100% intactos.
- [Bitácora](bitacora.md): primera compilación 15.06 min; 6 casos 15.10 min; Flutter histórico no registrado.
- [Comparación de planes](comparacion_plan.md): 34/50 decisiones modificadas.
- [Guía de funciones y uso](GUIA_APP.md).
- [Feature activo](specs/001-divisor-cuenta/) y [.specify/memory/constitution.md](.specify/memory/constitution.md).
- [Evidencias](evidencias/): originales, diff inicial vacío, pruebas, análisis y convergencia.

## Comprobar

```powershell
npx vitest run test/division.test.js
npm test
npm run lint
npm run verificar
npm run build
```

Resultado observado: Flutter 28 pruebas; React 39 pruebas (6 casos + LSP + 3 pantalla + 29 de límites/interacciones). Lint, build y SOLID correctos. Fixtures Dart/JS equivalentes mediante extracción y deepEqual. Sin imports React/DOM en domain; concretos solo en main.jsx fuera de data.

## Entrega preparada el 8 de octubre de 2026

Consultar [ENTREGA.md](ENTREGA.md): relación de requisitos, archivos y enlaces. Se proporciona fuera de este repositorio un ZIP con ambos proyectos y un PDF con la documentación final.

Verificación actual: Flutter 28/28; React 39/39; lint, arquitectura/comparación de fixtures y build correctos. Los logs nuevos están en evidencias/verificacion-2026-10-08-*.txt. Vitest usa un worker de threads y tiempos de espera de 30 segundos para evitar fallos de arranque y tiempos agotados observados en esta computadora; no se cambiaron escenarios ni aserciones.

El estudiante realizó personalmente el análisis de la especificación y la constitución y la traducción de los seis casos de aceptación. La implementación del código se realizó con asistencia de Codex. GUIA_APP.md explica las funciones para repasarlas.

Los repositorios son privados: el profesor necesita acceso a divisor_cuenta y divisor_cuenta_web. La entrega a la plataforma de la materia corresponde al estudiante. No se ha enviado una invitación al profesor porque no se proporcionó su usuario de GitHub. La interfaz fue comprobada mediante Testing Library; no se declara una revisión visual humana en un navegador.
