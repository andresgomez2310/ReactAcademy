import './CourseCard.css';

export default function CourseCard({ icon, title, description, level }) {
  return (
    <div className="course-card">
      <div className="course-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="course-badge">{level}</span>
    </div>
  );
}