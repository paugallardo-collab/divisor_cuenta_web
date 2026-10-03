# Divisor de cuenta React

Leer .specify/memory/constitution.md y specs/001-divisor-cuenta antes de cambiar comportamiento.
Capas src/presentation -> src/domain <- src/data. Domain es JavaScript puro. Solo src/main.jsx compone redondeos concretos.
No modificar los seis casos congelados ante fallos: corregir src. Mantener mensajes y límites Flutter.
SPECIFY_FEATURE_DIRECTORY=specs/001-divisor-cuenta. No ejecutar speckit-specify para esta migración.
Comandos: npm test, npm run lint, npm run verificar, npm run build.
