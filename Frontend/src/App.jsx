import { Routes, Route } from 'react-router-dom';
import Navegacion from './componentes/navegacion';
import Inicio from './vistas/inicio';
import Cursos from './vistas/curso';
import Nosotros from './vistas/nosotros';
import Login from './vistas/login';
import NoEncontrada from './vistas/noencontrado';

export default function App() {
  return (
    <div className="aplicacion">
      <Navegacion />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>
    </div>
  );
}