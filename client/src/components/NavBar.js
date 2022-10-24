import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    
    <div className='NavBar'>
        <NavLink to="/">
        <button className="button">Home</button>
        </NavLink>

        <NavLink to="/guard">
            <button className="button">Guard</button>
        </NavLink>

        <NavLink to="/Services">
            <button className="button">Services</button>
        </NavLink>

        <NavLink to="/contact">
            <button className="button">Contact</button>
        </NavLink>

        <NavLink to="/login">
            <button className="button">Login</button>
        </NavLink>

        <NavLink to="/signup">
            <button className="button">Sign Up</button>
        </NavLink>
    </div>
    
  );
}


export default NavBar;