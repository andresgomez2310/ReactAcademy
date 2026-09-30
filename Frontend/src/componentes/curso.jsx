import './curso.css';

export default function TarjetaCurso({ icono, titulo, descripcion, nivel }) {
  return (
    <div className="tarjeta-curso">
      <div className="icono-curso">{icono}</div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <span className="etiqueta-nivel">{nivel}</span>
    </div>
  );
}