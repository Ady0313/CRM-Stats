// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LeadPage from './pages/LeadPage';
import SalesPage from './pages/SalesPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar'; // Ensure NavBar is imported

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar /> {/* Add the NavBar component here */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leads" element={<LeadPage />} />
            <Route path="/sales" element={<SalesPage />} />
          </Routes>
        </main>
        <Footer /> {/* Add the Footer component here */}
      </div>
    </Router>
  );
};

export default App;
