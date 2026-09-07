// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Counter />
      </main>
      <Footer />
    </div>
  );
}

export default App;