import React from 'react';
import './sidebar.css';
import { FcEngineering } from 'react-icons/fc';
import { GiAutoRepair } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { TbEngine } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItem = [
    {
      path: '/user',
      name: 'Home',
      icon: <AiFillHome />,
      end: true,
    },
    {
      path: '/user/technicians',
      name: 'Technicians',
      icon: <FcEngineering />,
    },
    {
      path: '/user/inventory',
      name: 'Inventory',
      icon: <TbEngine />,
    },
    {
      path: '/user/services',
      name: 'Services',
      icon: <GiAutoRepair />,
    },
  ];

  return (
    <div className="sidebar">
      {menuItem.map((item) => (
        <NavLink
          to={item.path}
          key={item.path}
          end={item.end}
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          <div className="icon">{item.icon}</div>
          <div className="link_text">{item.name}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
