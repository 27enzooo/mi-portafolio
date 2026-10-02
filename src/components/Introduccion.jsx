import React from 'react';

const Introduccion = () => {
  return (
    <section id="inicio" className="bg-light py-5 text-center">
      <div className="container">
        <img 
          src="/perfil.png" 
          alt="Foto de perfil" 
          className="rounded-circle mb-3 shadow"
          width="150"
          height="150"
          style={{ objectFit: 'cover' }}
        />
        <h1 className="display-4 fw-bold">Hola, soy Enzo Rojas Madariaga</h1>
        <p className="lead text-muted">
          Estudiante de Ingenieria en Informatica - Duoc UC
        </p>
        <hr className="my-4 mx-auto" style={{ maxWidth: '200px' }} />
        <p className="container text-muted" style={{ maxWidth: '600px' }}>
          Bienvenido a mi portafolio web académico. Aquí podrás conocer más sobre mis proyectos y avances en el área de la informatica.
        </p>
      </div>
    </section>
  );
};

export default Introduccion;