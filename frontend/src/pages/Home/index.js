import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import countryBlockedList from '../../config/countryBlockedList';

import Loading from '../../components/Loading';
import Dashboard from '../../components/Dashboard';
import Blocked from '../../components/Blocked';

import './styles.css';

export default function Home() {
  document.body.style.overflowY = "auto";
  
  const [regions, setRegions] = useState([]);
  const [regionsBlocked, setRegionsBlocked] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRegion();
    loadRegionBlocked();

    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  async function loadRegion() {
    try {
      const { data } = await api.get("/country");
      setRegions(data);
    } catch (e) {
      toast.error("Ocorreu um problema ao carregar a lista de regiões disponíveis!");
    }
  }

  async function loadRegionBlocked() {
    try {
      const { data } = await api.get("/blocked");
      if (data) {
        setRegionsBlocked(data.map(product => ({...product.code})))
      }
    } catch (e) {
      toast.error("Ocorreu um problema ao carregar a lista de regiões indisponíveis!");
    }
  }

  function renderPage(region) {
    if (countryBlockedList.includes(region.country_code)) {
      document.title = `${process.env.REACT_APP_NAME}`;
      return <Blocked key={region.country_code} />;
    } else {
      document.title = `${process.env.REACT_APP_NAME} - Inicio`;
      return <Dashboard key={region.country_code} />;
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
          <>{regions.map((region) => renderPage(region))}</>
      )}
    </>
  );
}
