import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import AdminSignup from './AdminSignup';
import { API_ENDPOINTS } from '../config';
import { saveAuthSession } from '../utils/authStorage';
import { formatErrors } from '../utils/formatErrors';

function AdminSignupPage() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [signed, setSigned] = useState(false);

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
            saveAuthSession('admin', { logged: true, data });
            setSigned(true);
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

  if (signed) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <AdminSignup
      setFullName={setFullName}
      setPassword={setPassword}
      handleSignup={handleSignUp}
      error={error}
      loading={loading}
    />
  );
}

export default AdminSignupPage;
