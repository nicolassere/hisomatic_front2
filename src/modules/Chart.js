// src/modules/Chart.js
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale, // Escala de categorías (eje X)
  LinearScale, // Escala lineal (eje Y)
  BarElement, // Elementos de barra
  PointElement, // Elementos de puntos
  LineElement, // Elementos de líneas
  Title, // Títulos
  Tooltip, // Tooltips
  Legend, // Leyendas
} from 'chart.js';

// Registrar módulos
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ title, type }) => {
  const data = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: title,
        data: [60, 70, 75, 80, 85, 78, 90],
        backgroundColor: type === 'bar' ? 'rgba(75, 192, 192, 0.2)' : 'transparent',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: type !== 'line' ? false : true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      {type === 'line' ? <Line data={data} options={options} /> : <Bar data={data} options={options} />}
    </div>
  );
};

export default Chart;
