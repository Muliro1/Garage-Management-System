import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from '../components/Home/Home'
import Sidebar from '../components/SideBar/Sidebar'
import Technicians from '../components/Technicians/Technicians'
import Parts from '../components/Parts/Parts'
import Services from '../components/Services/Services'

const Router = ({user}) => {
  return (
    // <BrowserRouter>
    <Sidebar>
    <Routes>
    <Route path="/" element ={<Home />}/> 
    <Route path="/technicians" element={<Technicians/>}/> 
    <Route path="/inventory" element={<Parts/>}/> 
        <Route path="/services" element={<Services user={user} />}/> 
    </Routes>
    </Sidebar>
  // </BrowserRouter>
  )
}

export default Router;