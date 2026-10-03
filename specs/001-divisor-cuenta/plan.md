# Implementation Plan: Divisor de cuenta web

**Branch**: main | **Date**: 2026-10-02 | **Spec**: [spec.md](spec.md)
**Input**: specs/001-divisor-cuenta/spec.md, copia íntegra de sdd de Participacion1oct.

## Summary

Dividir una cuenta con propina, validación y dos estrategias intercambiables de redondeo.
Una pantalla React, estado local useState y dependencias inyectadas desde src/main.jsx.
No se ejecuta speckit-specify; la especificación permanece idéntica.

## Technical Context

- Language/Version: JavaScript ES modules y JSX; Node 22.17.0, npm 10.9.2 comprobados.
- Primary Dependencies: React/React DOM 19.2.8, Vite 8.3.2 y plugin-react 6.1.1. Sin librería de estado externa.
- Storage: ninguna. Sin API ni red en ejecución, historial, persistencia ni usuarios.
- Testing: Vitest 5.0.3, Testing Library React 16.3.3, jest-dom 7.0.1 y jsdom 27.3.0.
- Target Platform: navegador web; assets locales y ningún recurso CDN. Tras cargar la página, cálculo sin red. No se requiere instalar una PWA ni garantizar la primera carga desconectada.
- Project Type: aplicación cliente de una pantalla, sin backend. Node solo ejecuta herramientas.
- Performance Goals: cálculo síncrono O(1), sin E/S.
- Constraints: validar antes del cálculo; dos decimales; offline durante el cálculo; conservar límites y mensajes.
- Scale/Scope: una cuenta por vez; viewport estrecho y etiquetas accesibles.

## Constitution Check

Antes de investigar y después del diseño: aprobado sin excepciones. SRP separa validar, calcular, formatear y dibujar.
OCP permite registrar otra estrategia en main sin cambiar cálculo; LSP no inspecciona tipos; ISP solo aplicar(valor).
DIP: useDivisor recibe validar/calcular/formatear/opciones por argumento; presentation no importa data.
Domain es JavaScript puro, ejecutable con Node sin React ni DOM. main es el único punto de composición.
Los seis casos y errores conservan el significado de Dart. Se incluyen pruebas de límites y edición porque la spec los exige.

## Project Structure

### Documentation (this feature)

specs/001-divisor-cuenta contiene spec.md, plan.md, research.md, data-model.md, contracts/interfaz.md, quickstart.md y tasks.md.
analisis_spec.md y evidencias/original conservan el inventario y punto de partida.

### Source Code (repository root)

```text
src/
  domain/cuenta.js
  domain/resultado.js
  domain/estrategiaRedondeo.js
  domain/calcularDivision.js
  domain/validarEntrada.js
  data/redondeoExacto.js
  data/redondeoHaciaArriba.js
  presentation/useDivisor.js
  presentation/formateadorMoneda.js
  presentation/PantallaDivisor.jsx
  main.jsx
  index.css
test/
  casosDePrueba.js
  setup.js
  division.test.js
  pantalla.test.jsx
  limites.test.js
  interaccion.test.jsx
tool/
  verificarArquitectura.mjs
  compararCasos.mjs
```

**Structure Decision**: tres capas; data contiene estrategias, ninguna base de datos.
useDivisor convierte texto a Cuenta, llama validarEntrada y calcula solo cuando devuelve null.
Parseo decimal completo con punto o coma: vacío, texto parcial e infinito se rechazan; personas solo enteras.
El hook recibe opciones de redondeo inyectadas; agregar estrategia no exige editar calcularDivision.
PantallaDivisor recibe dependencias, usa el hook y renderiza formulario, selección, error y resultado.
formateadorMoneda recibe un número y devuelve toFixed(2), sin símbolo monetario.
Redondeo exacto usa Math.round(valor * 100 + 0.000001) / 100, igual tolerancia que Flutter.
Redondeo hacia arriba usa Math.ceil, conservando los enteros.
La pantalla permite desplazamiento y ancho adaptable; inputs de texto con inputMode permiten probar abc y coma decimal.
Editar cualquier campo o modo borra resultado y error. Inicio: monto vacío, 2 personas, propina 0, exacto.

## Phases

0. Investigar compatibilidad en fuentes oficiales y resolver decisiones en research.md.
1. Modelos, contrato UI/estrategia y quickstart.
2. Tareas por historia y análisis de cobertura antes del código.
3. Pruebas de contrato primero, dominio, estrategias, hook, pantalla y composición.
4. Converger frente a artefactos; pruebas de seis casos, suite completa, lint, build y arquitectura.
5. Diffs, métricas, respuestas, guía de funciones y publicación GitHub.

## Complexity Tracking

Sin violaciones de la constitución ni excepciones.
