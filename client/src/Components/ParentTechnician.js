import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TechnicianLogin from './TechnicianLogin';
import TechnicianSignup from './TechnicianSignup';
import TechnicianDashboard from './TechnicianDashboard';
import Repair from './Repair';
import Servicing from './Servicing';
import Vehicles from './Vehicles';
import { API_ENDPOINTS } from '../config';

function ParentTechnician() {
  const [logged, setLogged] = useState(false)
  const [loading, setLoading]= useState(false)
  const [technician, setTechnician] = useState([])
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState([])
  const [signed, setSigned] = useState(false)

  // localStorage.clear()

  React.useEffect(() => {
    const data = localStorage.getItem('TECHNICIAN')
    const login = localStorage.getItem('LOGGED')
    //const signup = localStorage.getItem('SIGNED')
    if (data && login) {
      setLogged(JSON.parse(login))
      setTechnician(JSON.parse(data))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('LOGGED', JSON.stringify(logged))
    localStorage.setItem('TECHNICIAN', JSON.stringify(technician))
    localStorage.setItem('SIGNED', JSON.stringify(signed))

  }, [logged,technician,signed])
  
  function handleLogin(e, setFullName, setPassword, props) {
    setLoading(true)
    e.preventDefault()
    fetch(API_ENDPOINTS.TECHNICIAN_LOGIN, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        name:fullName,
        password:password
      })
    }
    )
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setTechnician(data)
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
    fetch(API_ENDPOINTS.TECHNICIAN_SIGNUP, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        name:fullName,
        password:password
      })
    }
    )
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setTechnician(data)
            setLoading(false)
            setSigned(true)
            //props.history.push('/technician-login')
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
        <div>
          <TechnicianDashboard technician={technician} />
          <Routes>
            <Route path='/'
              exact
              element={<TechnicianDashboard technician={technician} />} />
            <Route path="/repair" element={<Repair technician={technician} />} />
            <Route path="/servicing" element={<Servicing technician={technician} />} />
            <Route path="/vehicles" element={<Vehicles />} />
          </Routes>
        </div>
        :
        <TechnicianLogin setFullName={setFullName} setPassword={setPassword} handleLogin={handleLogin} error={error} loading={loading} />}
    </div>
  );
}

export default ParentTechnician;
