# Verificación final desde instalación reproducible

El 2 de octubre de 2026, en America/Bogota, se ejecutó `npm ci` con Node 22.17.0 y el package-lock.json versionado.

Primera tentativa: Windows bloqueó rolldown mientras el servidor Vite local lo usaba. Se detuvo el servidor de esta sesión y se repitió npm ci; instalación correcta de 113 paquetes, sin cambios al código ni a los casos.

Secuencia final observada:

```text
npm ci: added 113 packages, audited 114 packages; found 0 vulnerabilities
npm test: Test Files 4 passed (4); Tests 39 passed (39)
npm run lint: oxlint, código 0
npm run verificar: dominio puro, capas, composición y seis fixtures equivalentes, código 0
npm run build: build de producción correcto, código 0
```

Las salidas de las primeras ejecuciones correctas están en react-test.txt, react-build.txt, react-dominio.txt, react-solid.txt y react-lint.txt. El tiempo del primer build y los seis casos no se altera con esta repetición.

Vite arrancó en http://127.0.0.1:5173/ y fue detenido antes de la instalación final. No hubo navegador disponible conectado: intento iab falló con «Browser is not available: iab» y listBrowsers devolvió []. No se presenta una inspección visual como realizada.
