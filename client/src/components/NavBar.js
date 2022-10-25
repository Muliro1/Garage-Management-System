// import React from 'react';
// import { NavLink } from 'react-router-dom';


// function NavBar() {
//   return (
    
//     <div className='NavBar'>
//         <h1>PBMW</h1>
//         <NavLink to="/">
//             <button className="button">Home</button>
//         </NavLink>

//         <NavLink to="/about">
//             <button className="button">About</button>
//         </NavLink>

//         <NavLink to="/user">
//             <button className="button">User</button>
//         </NavLink>

//         <NavLink to="/guard">
//             <button className="button">Guard</button>
//         </NavLink>

//         <NavLink to="/admin">
//             <button className="button">Admin</button>
//         </NavLink>

//         <NavLink to="/technician">
//             <button className="button">Technician</button>
//         </NavLink>

//         <NavLink to="/contact">
//             <button className="button">Contact</button>
//         </NavLink>

//         <NavLink to="/login">
//             <button className="button">Login</button>
//         </NavLink>

//         <NavLink to="/signup">
//             <button className="button">Sign Up</button>
//         </NavLink>
//     </div>
    
//   );
// }


// export default NavBar;





import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo'>PBMW</h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>

          <Link to='/about' className='about'>
            <li>About</li>
          </Link>

          <Link to='/user' className='user'>
            <li>User</li>
          </Link>

          <Link to='/Admin' className='Admin'>
            <li>Admin</li>
          </Link>

          <Link to='/technician' className='technician'>
            <li>Technician</li>
          </Link>

          <Link to='/guard' className='guard'>
            <li>Guard</li>
          </Link>

          <Link to='/services' className='services'>
            <li>Services</li>
          </Link>

          <Link to='/contact' className='contact'>
            <li>Contact</li>
          </Link>

        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}


export default Navbar;