import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const HomePage = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [activeLeads, setActiveLeads] = useState(0);
  const [newLeads, setNewLeads] = useState(0);
  const [revenueGrowth, setRevenueGrowth] = useState(0);
  const [customerSatisfaction, setCustomerSatisfaction] = useState(0);

  useEffect(() => {
    // Dummy data to simulate API response
    const mockData = {
      totalSales: 7500,
      activeLeads: 320,
      newLeads: 50,
      revenueGrowth: 10, // percentage
      customerSatisfaction: 85 // percentage
    };

    setTotalSales(mockData.totalSales);
    setActiveLeads(mockData.activeLeads);
    setNewLeads(mockData.newLeads);
    setRevenueGrowth(mockData.revenueGrowth);
    setCustomerSatisfaction(mockData.customerSatisfaction);
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card title="Total Sales" value={`$${totalSales}`} />
      <Card title="Active Leads" value={activeLeads} />
      <Card title="New Leads" value={newLeads} />
      <Card title="Revenue Growth" value={`${revenueGrowth}%`} />
      <Card title="Customer Satisfaction" value={`${customerSatisfaction}%`} />
      {/* Add more cards as needed */}
    </div>
  );
};

export default HomePage;
