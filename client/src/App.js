import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import User from './components/User/User';
import Admin from './admin/Admin';
import AdminSignup from './admin/AdminSignup';
import Guard from './Guard/Guard';
import ParentTechnician from './Components/ParentTechnician';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />

          <Route path="/user/*" element={<User />} >
            <Route path="technicians" />
            <Route path="inventory" />
            <Route path="services" />
          </Route>

          <Route path="/services" element={<Services />} />
          <Route path="/technician" element={<ParentTechnician/>} >
            <Route path="repair"  />
            <Route path="servicing" />
            <Route path="vehicles" />
          </Route>

          <Route path="/guard/*" element={<Guard />} >
            <Route path="guardvehicles" />
          </Route>

          {/* admin dashboard */}
        <Route path="/admin/*" element={<Admin />} >
          <Route path="clients" />
          <Route path="mechanics"/>
          <Route path="guards"/>
          <Route path="carsingarage" />
          <Route path="partsinstock"/>
          </Route>
          <Route path="/adminsignup" element={<AdminSignup/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;