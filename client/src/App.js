import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />

          <Route path="/home" element={<Home />} />
          
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
      <img
          alt="Truck being serviced"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKxL9QziNIeQQ3ZrG0anoUH89r9R0KVgH9g&usqp=CAU"
        />
    </div>
  );
}


export default App;
