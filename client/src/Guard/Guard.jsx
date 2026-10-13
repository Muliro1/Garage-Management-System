import React, { useState, useEffect } from 'react';
import GuardLogin from './GuardLogin';
import GuardVehicles from './GuardVehicles';
import { API_ENDPOINTS } from '../config';
import { loadAuthSession, saveAuthSession } from '../utils/authStorage';
import { formatErrors } from '../utils/formatErrors';

function Guard() {
  const [logged, setLogged] = useState(false);
  const [fullname, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [guard, setGuard] = useState(null);
  const [hydrated, setHydrated] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    const session = loadAuthSession('guard');
    if (session.logged && session.data) {
      setLogged(true);
      setGuard(session.data);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveAuthSession('guard', { logged, data: guard });
  }, [logged, guard, hydrated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError([]);
    fetch(API_ENDPOINTS.GUARD_LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: fullname,
        password,
      }),
    })
      .then((r) => {
        if (r.ok) {
          return r.json().then((data) => {
            setGuard(data);
            setLogged(true);
          });
        }
        return r.json().then((body) => {
          setError(formatErrors(body.errors ?? body.error ?? 'Login failed'));
        });
      })
      .catch(() => {
        setError(['Unable to reach server. Is the API running?']);
      });

    e.target.reset();
    setFullName('');
    setPassword('');
  };

  if (!hydrated) {
    return null;
  }

  return logged ? (
    <GuardVehicles guard={guard} />
  ) : (
    <GuardLogin
      fullName={fullname}
      error={error}
      setFullName={setFullName}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      password={password}
    />
  );
}

export default Guard;
