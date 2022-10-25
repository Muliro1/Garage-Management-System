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




// import React from "react"
// import './App.css';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import About from "./components/About"
// import Footer from './components/Footer';
// import Services from "./components/Services";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// //npm install react-router-dom@5

// function App() {
//   return (
//     <>
//       <Router>
//         <NavBar />

//         <Routes>
          // <Route path='/' component={Home} exact>
          //   <Home />
          // </Route>
//           <Route path='/about' component={About} exact>
//             <About />
//           </Route>
//           <Route path='/footer' component={Footer} exact>
//             <Footer />
//           </Route>
//           <Route path='/services' component={Services} exact>
//             <Services />
//           </Route>
//         </Routes>
//       </Router>
//     </>
//   )
// }


// export default App;
