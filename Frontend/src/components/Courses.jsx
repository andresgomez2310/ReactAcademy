import CourseCard from './CourseCard';
import './Courses.css';

const coursesData = [
  {
    id: 1,
    icon: '⚛️',
    title: 'React Básico',
    description: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.',
    level: 'Principiante',
  },
  {
    id: 2,
    icon: '🔄',
    title: 'React Hooks',
    description: 'Profundiza en useState, useEffect y crea tus propios custom hooks.',
    level: 'Intermedio',
  },
  {
    id: 3,
    icon: '🗂️',
    title: 'Estado Global',
    description: 'Gestiona el estado con Context API y aprende cuándo usarlo.',
    level: 'Intermedio',
  },
  {
    id: 4,
    icon: '🚀',
    title: 'React Avanzado',
    description: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.',
    level: 'Avanzado',
  },
];

export default function Courses() {
  return (
    <section id="cursos" className="courses-section">
      <div className="courses-container">
        <h2 className="section-title">Nuestros Cursos</h2>
        <p className="section-subtitle">Elige el camino que mejor se adapte a ti</p>
        
        <div className="courses-grid">
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              icon={course.icon}
              title={course.title}
              description={course.description}
              level={course.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
}