import React from 'react'
import "./header.css"
import {FaCarAlt} from "react-icons/fa"



const Header = ({technician}) => {
  function handleLogout() {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className='header'>
        <div className='top-bar'>
        <div className='title__desc'>
      <h1><FaCarAlt/></h1>
      </div>
      <div className='profilic'>
          <h1>Welcome, {technician.name}</h1>
          
        </div>
        <h1 onClick={()=>handleLogout()} className='text-sm font-bold cursor-pointer hover:text-orange-500'>Logout</h1>
        </div>
    </div>
  )
}

export default Header;