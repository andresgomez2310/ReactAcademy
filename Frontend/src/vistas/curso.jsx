import Curso from '../componentes/curso';
import './curso.css';

const datosCursos = [
  {
    id: 1,
    icono: '⚛️',
    titulo: 'React Básico',
    descripcion: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.',
    nivel: 'Principiante',
  },
  {
    id: 2,
    icono: '🔄',
    titulo: 'React Hooks',
    descripcion: 'Profundiza en useState, useEffect y crea tus propios custom hooks.',
    nivel: 'Intermedio',
  },
  {
    id: 3,
    icono: '🗂️',
    titulo: 'Estado Global',
    descripcion: 'Gestiona el estado con Context API y aprende cuándo usarlo.',
    nivel: 'Intermedio',
  },
  {
    id: 4,
    icono: '🚀',
    titulo: 'React Avanzado',
    descripcion: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.',
    nivel: 'Avanzado',
  },
];

export default function VistaCursos() {
  return (
    <div className="vista-cursos">
      <div className="contenedor-cursos">
        <h1 className="titulo-seccion">Nuestros Cursos</h1>
        <p className="subtitulo-seccion">Elige el camino que mejor se adapte a ti</p>

        <div className="cuadricula-cursos">
          {datosCursos.map((curso) => (
            <Curso
              key={curso.id}
              icono={curso.icono}
              titulo={curso.titulo}
              descripcion={curso.descripcion}
              nivel={curso.nivel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}