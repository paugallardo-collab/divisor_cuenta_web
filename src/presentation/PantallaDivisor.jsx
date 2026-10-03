import { useDivisor } from './useDivisor.js'

/** Una pantalla; dibuja datos y delega interacción al hook. */
export function PantallaDivisor(dependencias) {
  const divisor = useDivisor(dependencias)
  const campos = [
    { id: 'monto', etiqueta: 'Monto total', ayuda: 'El valor de la cuenta, antes de la propina.', modo: 'decimal', placeholder: '0.00' },
    { id: 'personas', etiqueta: 'Personas', ayuda: '¿Cuántos comparten la cuenta?', modo: 'numeric', placeholder: '2' },
    { id: 'propina', etiqueta: 'Propina (%)', ayuda: 'Usa 0 si no deseas dejar propina.', modo: 'decimal', placeholder: '0' },
  ]
  return (
    <main className="pagina">
      <header className="cabecera">
        <a className="marca" href="#calculadora" aria-label="Cuenta Clara, ir a la calculadora"><span className="marca-icono" aria-hidden="true">÷</span><span>cuenta<span className="marca-clara">clara</span></span></a>
        <span className="sello"><span aria-hidden="true" /> Cálculo sin conexión</span>
      </header>
      <section className="contenido" aria-labelledby="titulo">
        <div className="introduccion">
          <p className="eyebrow">COMPARTIR LA MESA, COMPARTIR LA CUENTA</p>
          <h1 id="titulo">Buenas cuentas.<br /><span>Mejores momentos.</span></h1>
          <p className="descripcion">Divide la cuenta, suma la propina y descubre cuánto paga cada persona. Así de claro.</p>
          <div className="nota"><span aria-hidden="true">↗</span><p>Una mesa. Una cuenta.<br /><strong>Todo en partes iguales.</strong></p></div>
          <div className="ilustracion" aria-hidden="true">
            <div className="recibo"><span className="recibo-titulo">LA BUENA MESA</span><span className="recibo-linea" /><span className="recibo-linea corta" /><div className="recibo-total"><span>Compartir</span><strong>÷</strong></div><span className="recibo-pie">GRACIAS POR VENIR</span></div>
            <span className="circulo uno">+</span><span className="circulo dos">÷</span><span className="estrella">✳</span>
          </div>
        </div>
        <div id="calculadora" className="tarjeta">
          <div className="tarjeta-titulo"><div><p className="eyebrow">HAGAMOS LAS CUENTAS</p><h2>Divide y disfruta</h2></div><span className="numero-paso" aria-hidden="true">01</span></div>
          <form onSubmit={divisor.enviar} noValidate>
            <div className="campos">
              {campos.map(campo => (
                <div className={`campo campo-${campo.id}`} key={campo.id}>
                  <label htmlFor={campo.id}>{campo.etiqueta}</label>
                  <input id={campo.id} type="text" inputMode={campo.modo} autoComplete="off" value={divisor.entrada[campo.id]} placeholder={campo.placeholder}
                    onChange={evento => divisor.cambiar(campo.id, evento.target.value)} aria-describedby={`${campo.id}-ayuda`} />
                  <small id={`${campo.id}-ayuda`}>{campo.ayuda}</small>
                </div>
              ))}
            </div>
            <div className="campo redondeo">
              <label htmlFor="redondeo">Redondeo</label>
              <select id="redondeo" value={divisor.modo} onChange={evento => divisor.seleccionar(evento.target.value)} aria-describedby="redondeo-ayuda">
                {dependencias.opciones.map(opcion => <option key={opcion.id} value={opcion.id}>{opcion.etiqueta}</option>)}
              </select>
              <small id="redondeo-ayuda">Exacto a centavos, o hacia arriba al siguiente entero.</small>
            </div>
            <button type="submit">Calcular <span aria-hidden="true">↗</span></button>
          </form>
          <div className="zona-salida" aria-live="polite" aria-atomic="true">
            {divisor.error !== null && <p className="error" role="alert">{divisor.error}</p>}
            {divisor.resultado !== null && <div className="resultado" role="status"><span>Por persona</span><strong>{divisor.resultado}</strong><small>Incluye la propina que elegiste.</small></div>}
            {divisor.error === null && divisor.resultado === null && <p className="espera"><span aria-hidden="true">÷</span> Tu parte de la cuenta aparecerá aquí.</p>}
          </div>
          <div className="tarjeta-pie"><span aria-hidden="true">✓</span> Sin registro. Sin guardar tus datos.</div>
        </div>
      </section>
      <footer><span>Hecho para compartir.</span><span>Cuenta Clara · 2026</span></footer>
    </main>
  )
}
