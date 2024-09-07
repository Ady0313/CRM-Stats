import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registering required components for Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Sample data for different time periods
const data = {
  daily: {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    datasets: [
      {
        label: 'Hourly Sales',
        data: [10, 15, 7, 8, 9, 12, 15, 18, 20, 25, 22, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  },
  weekly: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Weekly Sales',
        data: [200, 250, 300, 220, 280],
        backgroundColor: 'rgba(153, 102, 255, 0.7)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  },
  monthly: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [800, 950, 1000, 750],
        backgroundColor: 'rgba(255, 159, 64, 0.7)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  },
};

const Sales = () => {
  const [view, setView] = useState('daily');

  const handleViewChange = (e) => {
    setView(e.target.value);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Sales Data</h1>
        <div>
          <select
            value={view}
            onChange={handleViewChange}
            className="bg-gray-800 text-white border border-gray-700 rounded-md p-2"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="relative w-full h-80">
          <Bar
            data={data[view]}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'top',
                },
                tooltip: {
                  callbacks: {
                    label: (context) => `Sales: $${context.raw}`,
                  },
                },
              },
              scales: {
                x: {
                  grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                  },
                  ticks: {
                    color: '#555',
                    autoSkip: false,  // Ensure all hourly labels are visible
                    maxRotation: 90,  // Rotate labels if needed
                  },
                },
                y: {
                  grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                  },
                  ticks: {
                    color: '#555',
                    callback: (value) => `$${value}`,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sales;
