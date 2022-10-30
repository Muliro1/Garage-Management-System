import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Repair from './Repair';
import Servicing from './Servicing';
import Sidebar from './Sidebar';
import Vehicles from './Vehicles';
import Technician from './Technician';
import Header from './Header.js/header';

// import User from './Components/User';

const ParentTechnician = () => {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Technician />} />
          <Route path="/dashboard" element={<Technician />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/servicing" element={<Servicing />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </>
  );
};

export default ParentTechnician;
