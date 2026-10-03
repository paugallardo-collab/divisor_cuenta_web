# Investigación de React

Investigación delegada conforme al flujo speckit-plan; fuentes primarias y manifests oficiales. Versiones finales comprobadas por npm y package-lock.json.

- Decisión: React/React DOM 19.2.8 del scaffold publicado, no una versión aún no publicada del branch de desarrollo. Motivo: reproducibilidad. Alternativa: main upstream, descartada para instalación.
- Decisión: useState y hook propio con dependencias por argumento. Motivo: una pantalla; evita estado externo. Alternativa: librería global, innecesaria. Fuentes: https://react.dev/learn/sharing-state-between-components y https://react.dev/learn/reusing-logic-with-custom-hooks.
- Decisión: Vite 8.3.2 y plugin-react 6.1.1. Motivo: engines aceptan Node 22.17. Fuentes: https://vite.dev/guide/ y https://raw.githubusercontent.com/vitejs/vite-plugin-react/main/packages/plugin-react/package.json.
- Decisión: Vitest 5.0.3 y entorno jsdom. Motivo: dominio y UI con el mismo runner. Fuentes: https://vitest.dev/guide/ y https://vitest.dev/guide/environment.html.
- Decisión: fijar jsdom 27.3.0. Motivo: admite Node ^22.12.0; latest exige Node más nuevo. Alternativa: actualizar Node, innecesaria. Fuente: https://raw.githubusercontent.com/jsdom/jsdom/v27.3.0/package.json.
- Decisión: objetos inmutables Cuenta/Resultado y estrategia con una función aplicar. Motivo: conservar el contrato SOLID de Flutter; ninguna decisión funcional nueva.

No quedan NEEDS CLARIFICATION. No existe extensions.yml ni hooks.
