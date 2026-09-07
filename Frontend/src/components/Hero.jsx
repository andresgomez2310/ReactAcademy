import './Hero.css';

export default function Hero() {
  return (
    <header id="inicio" className="hero-section">
      <div className="hero-content">
        <h1>
          Aprende <span className="highlight">React</span> desde cero
        </h1>
        <p>
          Domina la librería más popular del frontend con proyectos prácticos y reales.
        </p>
        <a href="#cursos" className="hero-btn">
          Ver Cursos
        </a>
      </div>
    </header>
  );
}