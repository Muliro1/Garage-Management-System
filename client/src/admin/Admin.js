import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminClients from './adminDashboard/AdminClients';
import AdminDashboard from './adminDashboard/AdminDashboard';
import AdminMechanics from './adminDashboard/AdminMechanics';
import Aside from './adminDashboard/aside/Aside';
import AdminCars from './adminDashboard/AdminCars'
import AdminGuards from './adminDashboard/AdminGuards';
import AdminInventories from './adminDashboard/AdminInventories';
import { useHistory } from 'react-router-dom';
import { PropaneSharp } from '@mui/icons-material';

function Admin() {
  const [logged, setLogged] = useState(false)
  const [loading, setLoading]= useState(false)
  const [admin, setAdmin] = useState([])
  const [fullName, setFullName] = React.useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState([])
  const [signed, setSigned] = useState(false)

  // localStorage.clear()

  useEffect(() => {
    const data = localStorage.getItem('ADMIN')
    const login = localStorage.getItem('LOGGED')
    //const signup = localStorage.getItem('SIGNED')
    if (data && login) {
      setLogged(JSON.parse(login))
      setAdmin(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('LOGGED', JSON.stringify(logged))
    localStorage.setItem('ADMIN', JSON.stringify(admin))
    localStorage.setItem('SIGNED', JSON.stringify(signed))

  }, [logged,admin,signed])
  
  function handleLogin(e, setFullName, setPassword, props) {
    setLoading(true)
    e.preventDefault()
    fetch('http://127.0.0.1:3000/admins/login', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        full_name:fullName,
        password:password
      })
    }
    )
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setAdmin(data)
            setLoading(false)
            setLogged(true)
          } )
        } else {
          r.json().then((error) =>setError(error.errors))
        }
      }
      )
      
    e.target.reset()
    setFullName('')
    setPassword('')
  }

  function handleSignUp(e, setFullName, setPassword, props) {
    setLoading(true)
    e.preventDefault()
    fetch('http://127.0.0.1:3000/admins/signup', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        full_name:fullName,
        password:password
      })
    }
    )
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setAdmin(data)
            setLoading(false)
            setSigned(true)
            //props.history.push('/admin-login')
          } )
        } else {
          r.json().then((error) =>setError(error.errors))
        }
      }
      )
      
    e.target.reset()
    setFullName('')
    setPassword('')

  }

  return (
    <div>
     
      {logged ?
        <div className='grid grid-cols-7'>
          <Aside />
          <Routes>
            <Route path='/'
              exact
              element={<div className='col-span-6'>
                <AdminDashboard admin={admin} />
              </div>} />
            <Route path="/clients" element={<div className='col-span-6'>
              <AdminClients admin={admin} />
            </div>} />

            <Route path="/mechanics" element={<div className='col-span-6'>
              <AdminMechanics admin={admin} />
            </div>} />

            <Route path="/partsinstock" element={<div className='col-span-6'>
              <AdminInventories />
            </div>} />

            <Route path="/carsingarage" element={<div className='col-span-6'>
              <AdminCars admin={admin} />
            </div>} />

            <Route path="/guards" element={<div className='col-span-6'>
              <AdminGuards />
            </div>} />


          </Routes>
        </div>
        :
        <AdminLogin setFullName={setFullName} setPassword={setPassword} handleLogin={handleLogin} error={error} loading={loading} />}
         <AdminSignup handlesignup={handleSignUp} error={error} setFullName={setFullName} setPassword={setPassword}/>





    </div>
  );
}

export default Admin;
