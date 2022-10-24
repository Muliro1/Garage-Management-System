import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Invoices from './Components/Invoices';
import Comment from './Components/Comment';
import Repair from './Components/Repair';
import Servicing from './Components/Servicing';
import Sidebar from './Components/Sidebar';
import Vehicles from './Components/Vehicles';
import Technician from './Components/Technician';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Technician />} />
          <Route path="/dashboard" element={<Technician />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/servicing" element={<Servicing />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
