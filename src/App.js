import React from 'react';
import Navbar from './components/Navbar';
import Introduccion from './components/Introduccion';
import Proyectos from './components/Proyectos';
import Noticias from './components/Noticias';
import Contacto from './components/Contacto';

function App() {
  return (
    <div>
      <Navbar />
      <Introduccion />
      <Proyectos />
      <Noticias />
      <Contacto />
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; 2026 - Portafolio Desarrollo Fullstack II - Duoc UC</p>
      </footer>
    </div>
  );
}

export default App; 