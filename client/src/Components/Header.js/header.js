import React from 'react'
import "./header.css"
import {FaCarAlt} from "react-icons/fa"



const Header = () => {
  const [User ] = React.useState({
    displayName:"Hesbon Ochieng"
}); 

  return (
    <div className='header'>
        <div className='top-bar'>
        <div className='title__desc'>
      <h1><FaCarAlt/></h1>
      </div>
      <div className='profilic'>
      <h1>Welcome, {User.displayName}</h1>
      </div>
        </div>
    </div>
  )
}

export default Header;