import { useState } from 'react';
import './login.css';

export default function VistaLogin() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [estaEnviado, setEstaEnviado] = useState(false);

  // El botón está deshabilitado mientras haya campos vacíos
  const botonDeshabilitado = correo.trim() === '' || clave.trim() === '';

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!botonDeshabilitado) {
      setEstaEnviado(true);
    }
  };

  return (
    <div className="vista-login">
      <div className="tarjeta-login">
        <h2>Iniciar Sesión</h2>
        <p className="subtitulo-login">Ingresa a tu cuenta de estudiante</p>

        <form onSubmit={manejarEnvio} className="formulario-login">
          <div className="grupo-formulario">
            <label htmlFor="correo">Correo Electrónico</label>
            <input
              id="correo"
              type="email"
              placeholder="tu@correo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              disabled={estaEnviado}
              required
            />
          </div>

          <div className="grupo-formulario">
            <label htmlFor="clave">Contraseña</label>
            <input
              id="clave"
              type="password"
              placeholder="••••••••"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              disabled={estaEnviado}
              required
            />
          </div>

          <button
            type="submit"
            className="boton-ingresar"
            disabled={botonDeshabilitado || estaEnviado}
          >
            {estaEnviado ? 'Enviado con éxito' : 'Ingresar'}
          </button>

          {/* Microcopy obligatorio */}
          <small className="texto-aclaratorio">
            * Nota: Este formulario es únicamente demostrativo de interfaz; no valida usuarios reales en un backend.
          </small>

          {estaEnviado && (
            <p className="mensaje-exito">
              ✓ Formulario enviado. Los campos han sido bloqueados.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}