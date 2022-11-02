import React from 'react'
import './sidebar.css';
import{FcEngineering}from "react-icons/fc"
import{GiAutoRepair}from "react-icons/gi"
import {AiFillHome} from "react-icons/ai"
import {TbEngine} from "react-icons/tb"
import {NavLink, Outlet} from 'react-router-dom';

const Sidebar = ({children}) => {
    

    const menuItem =[
        {
            path:'/user',
            name:"Home",
            icon:<AiFillHome/>
        },
        {
            path:'/user/technicians',
            name:"Technicians",
            icon:<FcEngineering/>
        },
        {
            path:'/user/inventory',
            name:"Inventory",
            icon:<TbEngine/>
        },
        {
            path:'/user/services',
            name:"Sevices",
            icon:<GiAutoRepair/>
        }
    ]
  return (
    <div className='container'>
        <div className="sidebar">
        {
            menuItem.map((item,index) =>(
                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                    <div className='icon'>{item.icon}</div>
                    <div className='link_text'>{item.name}</div>
                </NavLink>
            ))
        }
        </div>
        <main>{children}</main>
   <Outlet/>
    </div>
  )
}

export default Sidebar