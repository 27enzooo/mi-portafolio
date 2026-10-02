import React, { useState, useEffect } from 'react';

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    fetch('/data/proyectos.json')
      .then((res) => res.json())
      .then((data) => setProyectos(data))
      .catch((err) => console.error('Error al cargar proyectos:', err));
  }, []);

  return (
    <section id="proyectos" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Mis Proyectos</h2>
        <div className="row g-4">
          {proyectos.map((p) => (
            <div className="col-md-4" key={p.id}>
              <div className="card h-100 shadow-sm">
                <img src={p.imagen} className="card-img-top" alt={p.titulo} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{p.titulo}</h5>
                  <p className="card-text text-muted">{p.descripcion}</p>
                </div>
                <div className="card-footer bg-white border-0 pb-3">
                  <a href={p.link} className="btn btn-outline-primary w-100" target="_blank" rel="noreferrer">
                    Ver Proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;