import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home/Home';
import Sidebar from '../components/SideBar/Sidebar';
import Technicians from '../components/Technicians/Technicians';
import Parts from '../components/Parts/Parts';
import Services from '../components/Services/Services';

const UserRoutes = ({ user }) => {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/user" element={<Home />} />
          <Route path="/user/technicians" element={<Technicians />} />
          <Route path="/user/inventory" element={<Parts />} />
          <Route path="/user/services" element={<Services user={user} />} />
          <Route path="*" element={<Navigate to="/user" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default UserRoutes;
