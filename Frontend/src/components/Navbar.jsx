// src/components/Navbar.jsx
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#inicio" className="logo">
          React<span>Academy</span>
        </a>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#cursos">Cursos</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
        </ul>
      </div>
    </nav>
  );
}