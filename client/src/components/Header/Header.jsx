import React from 'react'
import "./header.css"
import {FaCarAlt} from "react-icons/fa"
import Profile from '../Profile/Profile'


const Header = () => {
  const [User, setUser] = React.useState({
    displayName:"Christopher Chinia"
}); 

  return (
    <div className='header'>
        <div className='top-bar'>
        <div className='title__desc'>
      <h1><FaCarAlt/>PBMW</h1>
      </div>
      <div className='profilic'>
      <h1>Welcome, {User.displayName}</h1>
        <Profile/>
      </div>
        </div>
    </div>
  )
}

export default Header;