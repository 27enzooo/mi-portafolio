import React from 'react';

const Contacto = () => {
  return (
    <section id="contacto" className="py-5">
      <div className="container" style={{ maxWidth: '700px' }}>
        <h2 className="text-center fw-bold mb-4">Contacto</h2>
        <div className="card shadow p-4">
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              <i className="bi bi-envelope-fill me-2 text-primary"></i>
              <strong>Email:</strong> enz.rojas@duocuc.cl
            </li>
            <li className="list-group-item">
              <i className="bi bi-telephone-fill me-2 text-primary"></i>
              <strong>Teléfono:</strong> +56 9 38791825
            </li>
            <li className="list-group-item">
              <i className="bi bi-linkedin me-2 text-primary"></i>
              <strong>LinkedIn:</strong> www.linkedin.com/in/enzo-rojas
            </li>
          </ul>

          <form onSubmit={(e) => { e.preventDefault(); alert('Mensaje enviado (simulado)'); }}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" placeholder="Tu nombre" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" placeholder="nombre@correo.com" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea className="form-control" rows="3" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;