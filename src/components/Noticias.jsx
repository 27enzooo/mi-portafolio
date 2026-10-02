import React, { useState, useEffect } from 'react';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch('/data/noticias.json')
      .then((res) => res.json())
      .then((data) => setNoticias(data))
      .catch((err) => console.error('Error al cargar noticias:', err));
  }, []);

  return (
    <section id="noticias" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Novedades y Noticias</h2>
        <div className="row g-4 justify-content-center">
          {noticias.map((n) => (
            <div className="col-md-8 col-lg-6" key={n.id}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <span className="badge bg-primary mb-2">{n.fecha}</span>
                  <h5 className="card-title fw-bold text-dark">{n.titulo}</h5>
                  <p className="card-text text-muted mb-0">{n.detalle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Noticias;