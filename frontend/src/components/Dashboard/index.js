import React from 'react';

import Header from '../Header';

import './styles.css';

function Dashboard() {
  return (
    <>
      <Header />
      <main>
        <div className="jumbotron hero">
          <div className="container hero-prefix">
            <h1 className="hero-title">Bem-vindo</h1>
            <p className="hero-subtitle">
              Crie uma conta para continuar ou inicie uma sessão.
            </p>
          </div>
        </div>
        <div className="card-welcome">
          <div>
            <button type="button" className="btn btn-secondary mr-3" disabled>
              Iniciar Sessão
            </button>
            <button type="button" className="btn btn-primary" disabled>
              Criar Conta
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;