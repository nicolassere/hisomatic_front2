import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import RoomGrid from './components/RoomGrid';
import DataAnalysisModule from './modules/DataAnalysisModule';

function App() {
  const [selectedView, setSelectedView] = useState('rooms'); // Maneja la vista actual

  const renderView = () => {
    switch (selectedView) {
      case 'rooms':
        return <RoomGrid />;
      case 'analysis':
        return <DataAnalysisModule />;
      default:
        return <RoomGrid />;
    }
  };

  return (
    <div className="App" style={{ display: 'flex' }}>
      {/* Barra lateral */}
      <Sidebar onSelect={setSelectedView} />

      {/* Contenido principal */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1 style={{ color: '#004d40' }}>
          {selectedView === 'rooms'
            ? 'Control de Desinfección del Hospital'
            : 'Análisis de Datos del Hospital'}
        </h1>
        {renderView()}
      </div>
    </div>
  );
}

export default App;
