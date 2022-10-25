import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import User from './components/User';
import Admin from './components/Admin';
import Technician from './components/Technician';
import Guard from './components/Guard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          
          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />

          <Route path="/user" element={<User />} />

          <Route path="/services" element={<Services />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="/technician" element={<Technician />} />

          <Route path="/guard" element={<Guard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;