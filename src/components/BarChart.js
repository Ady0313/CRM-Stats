import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary scales and components for BarChart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  if (!data || !data.datasets) {
    return <p>No data available</p>; // Handle case when data is missing
  }

  return <Bar data={data} />;
};

export default BarChart;
