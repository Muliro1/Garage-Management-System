import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    
    <div className='NavBar'>
        <h1>PBMW</h1>
        <NavLink to="/">
            <button className="button">Home</button>
        </NavLink>

        <NavLink to="/user">
            <button className="button">User</button>
        </NavLink>

        <NavLink to="/guard">
            <button className="button">Guard</button>
        </NavLink>

        <NavLink to="/admin">
            <button className="button">Admin</button>
        </NavLink>

        <NavLink to="/technician">
            <button className="button">Technician</button>
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