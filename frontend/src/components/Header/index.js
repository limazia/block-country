import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import './styles.css';

function Header() {
  const [regionsBlocked, setRegionsBlocked] = useState([]);

  const href = "/";

  useEffect(() => {
    loadRegionBlocked();
  }, []);

  async function loadRegionBlocked() {
    try {
      const { data } = await api.get("/blocked");
      setRegionsBlocked(data);
    } catch (e) {
      toast.error("Ocorreu um problema ao carregar a lista de regiões indisponíveis!");
    }
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-hero bg-hero">
        <div className="container">
          <Link className="navbar-brand" to={href}>
            &#60;<b>{process.env.REACT_APP_NAME}</b>&#47;&#62;
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse"
          style={{ marginRight: "50px" }}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#countrys" data-toggle="modal">
                Países Disponíveis
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="countrys" className="modal fade">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <div className="icon-box">
                <i className="fas fa-flag" style={{ fontSize: "55px" }}></i>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body text-center">
              <h5>Todos os países são liberados, exceto: </h5>
              {regionsBlocked.map((region) => (
                <p className="unavailable">{region.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;