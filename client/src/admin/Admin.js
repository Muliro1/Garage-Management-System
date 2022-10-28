// import AdminLogin from './AdminLogin';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminClients from './adminDashboard/AdminClients';
import AdminDashboard from './adminDashboard/AdminDashboard';
import AdminMechanics from './adminDashboard/AdminMechanics';
import Aside from './adminDashboard/aside/Aside';

function Admin() {
  return (
    <div>
      {/* <AdminLogin/> */}
      <div className='grid grid-cols-7'>
        <BrowserRouter>
          <Aside />
          <Routes>
            <Route path='/'
              exact
              element={
                <div className='col-span-6'>
                  <AdminDashboard />
                </div>}
            />
            <Route path="/clients" element={
              <div className='col-span-6'>
                  <AdminClients/>
              </div>}
            />
            
            <Route path="/mechanics" element={
              <div className='col-span-6'>
                  <AdminMechanics/>
              </div>
            } />

            <Route path="/partsinstock" element={
              <div className='col-span-6'>
                  <h1>parts in stock</h1>
              </div>
            } />

            <Route path="/carsinstock" element={
              <div className='col-span-6'>
                  <h1>cars in stock</h1>
              </div>
            } />
            
            <Route path="/logout" element={
              <div className='col-span-6'>
                  <h1>logout</h1>
              </div>
            } />
            

          </Routes>
        </BrowserRouter>
      </div>



    </div>
  );
}

export default Admin;
