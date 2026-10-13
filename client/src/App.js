import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import User from './components/User/User';
import Admin from './admin/Admin';
import AdminSignupPage from './admin/AdminSignupPage';
import Guard from './Guard/Guard';
import ParentTechnician from './Components/ParentTechnician';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/*" element={<User />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technician/*" element={<ParentTechnician />} />
          <Route path="/guard/*" element={<Guard />} />
          <Route path="/adminsignup" element={<AdminSignupPage />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/Admin/*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
