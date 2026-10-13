import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TechnicianLogin from './TechnicianLogin';
import TechnicianDashboard from './TechnicianDashboard';
import Repair from './Repair';
import Servicing from './Servicing';
import Vehicles from './Vehicles';
import { API_ENDPOINTS } from '../config';
import { loadAuthSession, saveAuthSession } from '../utils/authStorage';
import { formatErrors } from '../utils/formatErrors';

function ParentTechnician() {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [technician, setTechnician] = useState(null);
  const [hydrated, setHydrated] = useState(false);
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);

  useEffect(() => {
    const session = loadAuthSession('technician');
    if (session.logged && session.data) {
      setLogged(true);
      setTechnician(session.data);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveAuthSession('technician', { logged, data: technician });
  }, [logged, technician, hydrated]);

  function handleLogin(e) {
    setLoading(true);
    setError([]);
    e.preventDefault();
    fetch(API_ENDPOINTS.TECHNICIAN_LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fullName,
        password,
      }),
    })
      .then((r) => {
        if (r.ok) {
          return r.json().then((data) => {
            setTechnician(data);
            setLogged(true);
            setLoading(false);
          });
        }
        return r.json().then((body) => {
          setError(formatErrors(body.errors ?? body.error ?? 'Login failed'));
          setLoading(false);
        });
      })
      .catch(() => {
        setError(['Unable to reach server. Is the API running?']);
        setLoading(false);
      });

    e.target.reset();
    setFullName('');
    setPassword('');
  }

  if (!hydrated) {
    return null;
  }

  if (!logged) {
    return (
      <TechnicianLogin
        setFullName={setFullName}
        setPassword={setPassword}
        handleLogin={handleLogin}
        error={error}
        loading={loading}
      />
    );
  }

  return (
    <Routes>
      <Route path="/technician" element={<TechnicianDashboard technician={technician} />} />
      <Route path="/technician/repair" element={<Repair technician={technician} />} />
      <Route path="/technician/servicing" element={<Servicing technician={technician} />} />
      <Route path="/technician/vehicles" element={<Vehicles />} />
      <Route path="*" element={<Navigate to="/technician" replace />} />
    </Routes>
  );
}

export default ParentTechnician;
