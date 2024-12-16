import React from 'react';
import '../styles/RoomButton.css';
import hospitalBed from '../assets/hospitalBed.webp'; 

const RoomButton = ({ room, onClick }) => {
  return (
    <button className={`room-button ${room.status}`} onClick={onClick}>
      <div className="room-header">
        <h3>{room.name}</h3>
        <h3>Habitación {room.id}</h3>
      </div>
      <div className="room-image-container">
        <img src={hospitalBed} alt="Cama de hospital" className="room-image" />
      </div>
      <div className="room-info">
        <p>Ingreso: {room.admissionDate || 'N/A'}</p>
        <p>Última desinfección: {room.lastDisinfection || 'N/A'}</p>
      </div>
      <div className={`status-bar ${room.status}`}></div>
    </button>
  );
};

export default RoomButton;