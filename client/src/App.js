import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Repair from './Components/Repair';
import Servicing from './Components/Servicing';
import Sidebar from './Components/Sidebar';
import Vehicles from './Components/Vehicles';
import Technician from './Components/Technician';

// import User from './Components/User';

const App = () => {
  return (
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
  );
};

export default App;
