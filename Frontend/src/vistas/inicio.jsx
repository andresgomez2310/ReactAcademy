import { Link } from 'react-router-dom';
import Contador from '../componentes/contador';
import './inicio.css';

export default function VistaInicio() {
  return (
    <div className="vista-inicio">
      <header className="seccion-portada">
        <div className="contenido-portada">
          <h1>
            Aprende <span className="resaltado">React</span> desde cero
          </h1>
          <p>
            Domina la librería más popular del frontend con proyectos prácticos y reales.
          </p>
          <Link to="/cursos" className="boton-accion">
            Ver Cursos
          </Link>
        </div>
      </header>

      <Contador />
    </div>
  );
}