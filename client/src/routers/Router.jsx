import React from 'react'
// import Home from '../components/Home/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Sidebar from '../components/SideBar/Sidebar'
// import Technicians from '../components/Technicians/Technicians'
// import Cars from '../components/Cars/Cars'
// import Parts from '../components/Parts/Parts'

const Router = () => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
    {/* <Route path="/" element ={<Home />}/> 
    <Route path="/technicians" element={<Technicians/>}/> 
    <Route path="/cars" element={<Cars/>}/> 
    <Route path="/parts" element={<Parts/>}/>  */}
    </Routes>
    </Sidebar>
  </BrowserRouter>
  )
}

export default Router;