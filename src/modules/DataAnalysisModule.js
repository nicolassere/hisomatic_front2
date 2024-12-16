// src/modules/DataAnalysisModule.js
import React, { useState, useEffect } from 'react';
import '../styles/DataAnalysisModule.css';
import Chart from './Chart';

const DataAnalysisModule = () => {
  // Datos simulados
  const [data, setData] = useState({
    occupancyRate: 75, // % de ocupación
    cleaningFrequency: 3, // Promedio de limpiezas por día
    infectionRate: 5.2, // Tasa de infecciones hospitalarias (%)
  });

  useEffect(() => {
    // Cargar datos reales despues
  }, []);

  return (
    <div className="data-analysis">
      <h2>Análisis de Datos del Hospital</h2>

      <div className="stats">
        <div className="stat">
          <h3>Ocupación</h3>
          <p>{data.occupancyRate}%</p>
        </div>
        <div className="stat">
          <h3>Frecuencia de Limpieza</h3>
          <p>{data.cleaningFrequency} limpiezas/día</p>
        </div>
        <div className="stat">
          <h3>Tasa de Infecciones</h3>
          <p>{data.infectionRate}%</p>
        </div>
      </div>
      <div className="charts">
        <Chart title="Ocupación por día" type="line" />
        <Chart title="Tasa de infecciones" type="bar" />
      </div>
    </div>
  );
};

export default DataAnalysisModule;
