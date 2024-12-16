import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <h2>Menú</h2>
      <button onClick={() => onSelect('rooms')}>Control de Desinfección</button>
      <button onClick={() => onSelect('analysis')}>Análisis de Datos</button>
    </div>
  );
};

export default Sidebar;
