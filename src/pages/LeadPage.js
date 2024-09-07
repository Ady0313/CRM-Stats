import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Ensures all necessary components are registered

const LeadPage = () => {
  const [timePeriod, setTimePeriod] = useState('daily');
  const [dataLeadDistribution, setDataLeadDistribution] = useState({
    labels: [],
    datasets: []
  });
  const [dataSalesByRegion, setDataSalesByRegion] = useState({
    labels: [],
    datasets: []
  });

  // Function to get dummy data based on time period
  const fetchData = (period) => {
    switch (period) {
      case 'daily':
        return {
          leadDistribution: {
            labels: ['Sales', 'Marketing', 'Customer Support', 'Development'],
            datasets: [{
              data: [120, 90, 60, 30],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              borderWidth: 1,
            }],
          },
          salesByRegion: {
            labels: ['North America', 'Europe', 'Asia', 'Australia'],
            datasets: [{
              data: [1000, 500, 300, 200],
              backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#F7F733'],
              borderColor: ['#FF5733', '#33FF57', '#3357FF', '#F7F733'],
              borderWidth: 1,
            }],
          },
        };
      case 'weekly':
        return {
          leadDistribution: {
            labels: ['Sales', 'Marketing', 'Customer Support', 'Development'],
            datasets: [{
              data: [800, 650, 450, 300],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              borderWidth: 1,
            }],
          },
          salesByRegion: {
            labels: ['North America', 'Europe', 'Asia', 'Australia'],
            datasets: [{
              data: [7000, 3500, 2500, 1500],
              backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#F7F733'],
              borderColor: ['#FF5733', '#33FF57', '#3357FF', '#F7F733'],
              borderWidth: 1,
            }],
          },
        };
      case 'monthly':
        return {
          leadDistribution: {
            labels: ['Sales', 'Marketing', 'Customer Support', 'Development'],
            datasets: [{
              data: [3000, 2500, 1800, 1200],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              borderWidth: 1,
            }],
          },
          salesByRegion: {
            labels: ['North America', 'Europe', 'Asia', 'Australia'],
            datasets: [{
              data: [25000, 15000, 12000, 8000],
              backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#F7F733'],
              borderColor: ['#FF5733', '#33FF57', '#3357FF', '#F7F733'],
              borderWidth: 1,
            }],
          },
        };
      default:
        return { leadDistribution: { labels: [], datasets: [] }, salesByRegion: { labels: [], datasets: [] } };
    }
  };

  useEffect(() => {
    // Fetch data based on the current time period
    const { leadDistribution, salesByRegion } = fetchData(timePeriod);
    setDataLeadDistribution(leadDistribution);
    setDataSalesByRegion(salesByRegion);
  }, [timePeriod]);

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Lead Page</h1>
        <select
          className="p-2 border rounded-md"
          value={timePeriod}
          onChange={handleTimePeriodChange}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Lead Distribution</h2>
          <Pie data={dataLeadDistribution} />
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Sales by Region</h2>
          <Pie data={dataSalesByRegion} />
        </div>
      </div>
    </div>
  );
};

export default LeadPage;
