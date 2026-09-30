import { useState } from 'react';
import './contador.css';

export default function Contador() {
  const [estudiantes, setEstudiantes] = useState(0);

  const decrementar = () => {
    if (estudiantes > 0) {
      setEstudiantes(estudiantes - 1);
    }
  };

  const incrementar = () => {
    setEstudiantes(estudiantes + 1);
  };

  return (
    <section className="seccion-contador">
      <div className="contenedor-contador">
        <h2>¿Cuántos estudiantes van a inscribirse?</h2>
        <p className="subtitulo-contador">Usa los botones para ajustar el número</p>

        <div className="tarjeta-contador">
          <button type="button" onClick={decrementar} className="boton-contador" aria-label="Restar">
            -
          </button>
          <span className="valor-contador">{estudiantes}</span>
          <button type="button" onClick={incrementar} className="boton-contador" aria-label="Sumar">
            +
          </button>
        </div>

        <span className="texto-estudiantes">estudiantes inscritos</span>
      </div>
    </section>
  );
}