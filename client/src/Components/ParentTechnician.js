import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Repair from './Repair';
import Servicing from './Servicing';
import Sidebar from './Sidebar';
import Vehicles from './Vehicles';
import Header from './Header.js/header';
import Login from './Login'

// import User from './Components/User';

const ParentTechnician = () => {
  const [logged,setLogged]=useState(false)
  const [fullname, setFullName] = useState('');
    const [pass, setPass] = useState('');
    const[technician,setTechnician]=useState([]);
    const [error,setError]=useState([]);

    useEffect(() => {
      const data = localStorage.getItem('TECHNICIAN')
      const login = localStorage.getItem('LOGGED')
      if (data && login) {
        setLogged(JSON.parse(login))
        setTechnician(JSON.parse(data))
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem('LOGGED', JSON.stringify(logged))
      localStorage.setItem('TECHNICIAN', JSON.stringify(technician))
  
    }, [logged,technician])

    const handleSubmit = (e) => {
      e.preventDefault()
    fetch('http://127.0.0.1:3000/technicians/login', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        name:fullname,
        password:pass
      })
    }
    )
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setTechnician(data)
            setLogged(true)
          } )
        } else {
          r.json().then((error) =>setError(error.errors))
        }
      }
      )
      
    e.target.reset()
    setFullName('')
    setPass('')
        
        
    }
  return (
    <>
    {logged?
    <>
    <Header technician={technician} />
      <Sidebar>
        <Routes>
          {/* <Route path="/" element={<Technician />} />
          <Route path="/dashboard" element={<Technician />} /> */}
          <Route path="/repair" element={<Repair technician={technician} />} />
          <Route path="/servicing" element={<Servicing technician={technician} />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </Sidebar>
    </>:<Login fullname={fullname} error={error} setFullName={setFullName} setPass={setPass} handleSubmit={handleSubmit} pass={pass}/>
        }
        </>
  );
};

export default ParentTechnician;
