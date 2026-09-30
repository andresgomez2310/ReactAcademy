import { NavLink, Link } from 'react-router-dom';
import './navegacion.css';

export default function BarraNavegacion() {
  return (
    <nav className="barra-navegacion">
      <div className="contenedor-navegacion">
        <Link to="/" className="logotipo">
          React<span>Academy</span>
        </Link>
        <ul className="enlaces-navegacion">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'activo' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/cursos" className={({ isActive }) => (isActive ? 'activo' : '')}>
              Cursos
            </NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'activo' : '')}>
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'activo boton-login' : 'boton-login')}>
              Iniciar Sesión
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}