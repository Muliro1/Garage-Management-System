import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
// import Home from './components/Home';
// import Login from './components/Login';
// import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <BrowserRouter>
        <Routes>
          {/* render NavBar.js */}

          <Route path="/" element={<NavBar />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="*" element={<NavBar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
