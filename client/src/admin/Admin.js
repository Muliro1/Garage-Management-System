import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import AdminClients from './adminDashboard/AdminClients';
import AdminDashboard from './adminDashboard/AdminDashboard';
import AdminMechanics from './adminDashboard/AdminMechanics';
import Aside from './adminDashboard/aside/Aside';
import AdminCars from './adminDashboard/AdminCars';
import AdminGuards from './adminDashboard/AdminGuards';
import AdminInventories from './adminDashboard/AdminInventories';
import { API_ENDPOINTS } from '../config';
import { loadAuthSession, saveAuthSession } from '../utils/authStorage';
import { formatErrors } from '../utils/formatErrors';

function AdminShell() {
  return (
    <div className="grid grid-cols-7">
      <Aside />
      <div className="col-span-6">
        <Outlet />
      </div>
    </div>
  );
}

function Admin() {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [hydrated, setHydrated] = useState(false);
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);

  useEffect(() => {
    const session = loadAuthSession('admin');
    if (session.logged && session.data) {
      setLogged(true);
      setAdmin(session.data);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveAuthSession('admin', { logged, data: admin });
  }, [logged, admin, hydrated]);

  function handleLogin(e) {
    setLoading(true);
    setError([]);
    e.preventDefault();
    fetch(API_ENDPOINTS.ADMIN_LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: fullName,
        password,
      }),
    })
      .then((r) => {
        if (r.ok) {
          return r.json().then((data) => {
            setAdmin(data);
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

  function handleSignUp(e) {
    setLoading(true);
    setError([]);
    e.preventDefault();
    fetch(API_ENDPOINTS.ADMIN_SIGNUP, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: fullName,
        password,
      }),
    })
      .then((r) => {
        if (r.ok) {
          return r.json().then((data) => {
            setAdmin(data);
            setLogged(true);
            setLoading(false);
          });
        }
        return r.json().then((body) => {
          setError(formatErrors(body.errors ?? body.error ?? 'Signup failed'));
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
      <AdminLogin
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
      <Route path="/admin" element={<AdminShell />}>
        <Route index element={<AdminDashboard admin={admin} />} />
        <Route path="clients" element={<AdminClients admin={admin} />} />
        <Route path="mechanics" element={<AdminMechanics admin={admin} />} />
        <Route path="partsinstock" element={<AdminInventories />} />
        <Route path="carsingarage" element={<AdminCars admin={admin} />} />
        <Route path="guards" element={<AdminGuards />} />
        <Route
          path="adminsignup"
          element={
            <AdminSignup
              handleSignup={handleSignUp}
              error={error}
              setFullName={setFullName}
              setPassword={setPassword}
              loading={loading}
            />
          }
        />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  );
}

export default Admin;
