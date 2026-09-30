import { Link } from 'react-router-dom';
import './noencontrado.css';

export default function VistaNoEncontrada() {
  return (
    <div className="vista-no-encontrada">
      <div className="contenido-no-encontrado">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>La ruta a la que estás intentando acceder no existe o ha sido movida.</p>
        <Link to="/" className="boton-volver-inicio">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}