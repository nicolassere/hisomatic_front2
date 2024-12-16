// src/modules/RoomDetailsModal.js
import React from 'react';
import '../styles/RoomDetailsModal.css';

const RoomDetailsModal = ({ room, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Detalles de {room.name}</h2>
        <p>Estado: {room.status.toUpperCase()}</p>
        <p>Fecha de ingreso: {room.admissionDate}</p>
        <p>Última desinfección: {room.lastDisinfection}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default RoomDetailsModal;
