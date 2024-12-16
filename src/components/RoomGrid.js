import React, { useState } from 'react';
import RoomButton from './RoomButton';
import '../styles/RoomGrid.css';
import RoomDetailsModal from '../modules/RoomDetailsModal';

const RoomGrid = () => {
  const rooms = [
    { id: 1, name: 'Juan Pérez', status: 'verde', admissionDate: '2024-10-10', lastDisinfection: '2024-10-12' },
    { id: 2, name: 'Libre', status: 'amarillo', admissionDate: '', lastDisinfection: '2024-10-11' },
    { id: 3, name: 'María López', status: 'rojo', admissionDate: '2024-09-30', lastDisinfection: '2024-10-01' },
    { id: 4, name: 'Carlos Gómez', status: 'verde', admissionDate: '2024-10-08', lastDisinfection: '2024-10-10' },
    { id: 5, name: 'Libre', status: 'amarillo', admissionDate: '', lastDisinfection: '2024-10-09' },
    { id: 6, name: 'Ana Torres', status: 'rojo', admissionDate: '2024-09-25', lastDisinfection: '2024-10-01' },
    { id: 7, name: 'Libre', status: 'verde', admissionDate: '', lastDisinfection: '2024-10-10' },
    { id: 8, name: 'Pedro Sánchez', status: 'amarillo', admissionDate: '2024-10-06', lastDisinfection: '2024-10-10' },
    { id: 9, name: 'Libre', status: 'rojo', admissionDate: '', lastDisinfection: '2024-09-30' },
    { id: 10, name: 'Raquel Fernández', status: 'verde', admissionDate: '2024-10-02', lastDisinfection: '2024-10-10' },
  ];

  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="room-grid">
      {rooms.map((room) => (
        <RoomButton key={room.id} room={room} onClick={() => handleRoomClick(room)} />
      ))}

      {selectedRoom && <RoomDetailsModal room={selectedRoom} onClose={handleCloseModal} />}
    </div>
  );
};

export default RoomGrid;
