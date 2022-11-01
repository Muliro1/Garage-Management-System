import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import User from './components/User/User';
import Admin from './admin/Admin';
import Technician from './components/Technician';
import Guard from './components/Guard';
import AdminClients from './admin/adminDashboard/AdminClients';
import Aside from './admin/adminDashboard/aside/Aside';
import AdminMechanics from './admin/adminDashboard/AdminMechanics';
import AdminDashboard from './admin/adminDashboard/AdminDashboard';
import AdminGuards from './admin/adminDashboard/AdminGuards';
import AdminCars from './admin/adminDashboard/AdminCars';
import AdminInventories from './admin/adminDashboard/AdminInventories';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />

          <Route path="/user" element={<User />} />

          <Route path="/services" element={<Services />} />

          

          <Route path="/technician" element={<Technician />} />
          {/* <Route path="/admin/clients" element={<Aside />} /> */}

          <Route path="/guard" element={<Guard />} />
          {/* admin dashboard */}
        <Route path="/admin" element={<Admin />} >
          <Route path="clients" />
          <Route path="mechanics"/>
          <Route path="guards"/>
          <Route path="carsingarage" />
          <Route path="partsinstock"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;