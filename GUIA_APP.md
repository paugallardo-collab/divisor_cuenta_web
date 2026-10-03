# Guía para ejecutar y explicar la app

## Ejecutar

Abrir esta carpeta (contiene package.json), terminal: npm ci, npm run dev. La URL local aparece en la terminal; Ctrl+C detiene el servidor. Para verificar: npm test, npm run lint, npm run verificar, npm run build. Para ver producción: npm run preview.

## Uso

Ingresar monto, personas y propina; elegir Exacto o Hacia arriba y Calcular. El pago incluye propina. No usa moneda específica, no redistribuye centavos sobrantes, no guarda cuentas. Cambiar cualquier entrada o modo borra la salida hasta recalcular. Punto/coma decimal válidos sin separadores de miles. Personas debe ser entero.

## Funciones de producción

| Función | Para qué existe / qué hace | Recibe | Devuelve | Errores / precondiciones |
|---|---|---|---|---|
| cuenta | Modelo inmutable de entradas | monto, personas, propina numéricos | objeto congelado | No valida; validarEntrada es responsable |
| resultado | Modelo del pago | porPersona | objeto congelado | No formatea |
| validarEntrada | Separar reglas de validez del cálculo | Cuenta | null o mensaje exacto | Monto inválido, personas insuficientes/fuera de límite, propina inválida |
| calcularDivision | Aplicar fórmula de reparto y delegar redondeo | Cuenta y estrategia | Resultado | Cuenta previamente validada; estrategia con aplicar |
| redondeoExacto | Construir estrategia a centavos | ninguno | objeto con aplicar | aplicar recibe finito no negativo; Math.round con tolerancia |
| redondeoHaciaArriba | Construir estrategia techo entero | ninguno | objeto con aplicar | misma precondición; Math.ceil conserva enteros |
| aplicar (cada estrategia) | Redondear el cociente según contrato | importe | importe redondeado | no valida ni formatea |
| formateadorMoneda | Separar texto del número | importe | cadena con dos decimales | Número validado; sin símbolo |
| numero | Parsear cadena decimal completa con punto/coma | texto | número o NaN | vacío/texto parcial se rechaza |
| entero | Parsear personas sin truncar fracciones | texto | entero o NaN | fracciones y vacío se rechazan |
| useDivisor | Estado y coordinación por dependencias | validar, calcular, formatear, opciones | estado y handlers | opciones no vacías provistas por main |
| cambiar | Actualizar campo y eliminar salida vieja | nombre de campo y texto | actualiza estado | nombres de campos definidos por pantalla |
| seleccionar | Cambiar modo y eliminar salida | id | actualiza estado | id pertenece a opciones |
| enviar | Prevenir navegación, validar, luego calcular | evento submit | actualiza error o resultado | ante error no llama cálculo |
| PantallaDivisor | Dibujar una pantalla accesible | dependencias | JSX | delega lógica al hook |
| callbacks JSX | Delegar change a cambiar/seleccionar | evento del campo | actualización de estado | no implementan negocio |

main.jsx es el punto de composición: importa concretos, crea opciones e inyecta. La UI nunca importa data. estrategiaRedondeo.js contiene el contrato JSDoc, no una clase vacía ni lógica.

Los tools son auxiliares: registrar ejecuta comandos fijos y observa tiempos; verificarArquitectura inspecciona imports y ejecuta domain puro; compararCasos extrae fixtures Dart y compara significado. Sus errores detienen la verificación con código distinto de cero.

## Por qué SOLID

SRP separa validar, calcular, formatear y dibujar. OCP agrega estrategias en composición. LSP usa cualquier aplicar sin identificar tipo. ISP tiene una sola función. DIP inyecta las dependencias del hook y evita imports desde presentation a data.

## Lo que revisa el estudiante

El deber exige clasificación y casos a mano, y explicar cada función. Este repo contiene borradores asistidos para ambas partes; revisarlos y realizar ese ejercicio antes de entregar. Los tiempos no registrados del laboratorio siguen sin registrarse. La UI se probó con Testing Library; falta la revisión visual humana en un navegador real.
