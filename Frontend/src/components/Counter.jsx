import { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <section className="counter-section">
      <div className="counter-container">
        <h2>¿Cuántos estudiantes van a inscribirse?</h2>
        <p className="counter-subtitle">Usa los botones para ajustar el número</p>

        <div className="counter-card">
          <button onClick={handleDecrement} className="counter-btn" aria-label="Restar">
            -
          </button>
          <span className="counter-value">{count}</span>
          <button onClick={handleIncrement} className="counter-btn" aria-label="Sumar">
            +
          </button>
        </div>

        <span className="counter-caption">estudiantes inscritos</span>
      </div>
    </section>
  );
}