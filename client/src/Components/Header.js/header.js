import React from 'react'
import "./header.css"
import {FaCarAlt} from "react-icons/fa"



const Header = ({technician}) => {
  

  return (
    <div className='header'>
        <div className='top-bar'>
        <div className='title__desc'>
      <h1><FaCarAlt/></h1>
      </div>
      <div className='profilic'>
      <h1>Welcome, {technician.name}</h1>
      </div>
        </div>
    </div>
  )
}

export default Header;