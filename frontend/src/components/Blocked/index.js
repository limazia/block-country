import React from 'react';

import Header from '../Header';

import './styles.css';

function Blocked() {
  return (
    <>
      <Header />
      <main>
        <div className="jumbotron hero">
          <div className="container hero-prefix">
            <h1 className="hero-title">
              Recurso ainda não disponível no seu país
            </h1>
            <p className="hero-subtitle">
              Nosso serviço está disponível em alguns países.
            </p>
          </div>
        </div>
        <div className="card-welcome">
          <strong>Quer saber mais?</strong> Digite seu e-mail para receber
          atualizações.
        </div>
      </main>
    </>
  );
}

export default Blocked;
