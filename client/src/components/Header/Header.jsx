import React from 'react'
import "./header.css"
import Profile from '../Profile/Profile'


const Header = () => {
  const [User, setUser] = React.useState({
    displayName:"Christopher Chinia"
}); 

  return (
    <div className='header'>
        <div className='top-bar'>
        <h1>Welcome, {User.displayName}</h1>
        <Profile/>
        </div>
    </div>
  )
}

export default Header