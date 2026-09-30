import './nosotros.css';

export default function VistaNosotros() {
  return (
    <div className="vista-nosotros">
      <div className="contenedor-nosotros">
        <h1>Sobre Nosotros</h1>
        <p className="descripcion-nosotros">
          En <span className="resaltado">ReactAcademy</span> formamos a los futuros ingenieros y desarrolladores frontend a través de proyectos prácticos con tecnologías modernas.
        </p>

        <div className="bloques-nosotros">
          <div className="tarjeta-nosotros">
            <h3>Aprendizaje Práctico</h3>
            <p>Construimos interfaces modulares y robustas usando los estándares de la industria desde el primer día.</p>
          </div>
          <div className="tarjeta-nosotros">
            <h3>Mentoría Continua</h3>
            <p>Acompañamiento personalizado para resolver dudas conceptuales y de arquitectura de software.</p>
          </div>
        </div>

        <footer className="pie-nosotros">
          © 2026 ReactAcademy. Taller 04 — Rutas y Navegación.
        </footer>
      </div>
    </div>
  );
}