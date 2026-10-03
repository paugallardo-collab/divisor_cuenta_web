# Ejecutar y validar

Requiere Node >=22.12, npm y Git. En este equipo Node 22.17.0.

```powershell
cd 'C:\FlutterProjects\Prog.-Asistida-de-Aplicaciones\deber2\divisor_cuenta_web'
$env:SPECIFY_FEATURE_DIRECTORY = 'specs/001-divisor-cuenta'
npm ci
npm run dev
# Abrir URL local indicada por Vite. Detener con Ctrl+C.
npx vitest run test/division.test.js
npm test
npm run lint
npm run verificar
npm run build
npm run preview
```

100 / 4 / 10 / Exacto → 27.50; 90 / 3 / 0 → 30.00; 50 / 0 → mensaje de personas; abc → Monto inválido; 10 / 3 / 0 → 3.33 exacto o 4.00 hacia arriba.
Editar después del resultado lo borra. Probar coma decimal, propina inválida y viewport estrecho. El cálculo tras cargar assets funciona sin red. Ver contracts/interfaz.md y data-model.md.
