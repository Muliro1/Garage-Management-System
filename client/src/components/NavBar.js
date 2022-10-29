import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <div className="logo">
          <h1>PBMW</h1>
        </div>
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
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
};


export default Navbar;