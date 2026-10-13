import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import UserRoutes from '../../routers/Router';
import Login from '../Login/Login';
import { API_ENDPOINTS } from '../../config';
import { loadAuthSession, saveAuthSession } from '../../utils/authStorage';
import { formatErrors } from '../../utils/formatErrors';

const User = () => {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);

  useEffect(() => {
    const session = loadAuthSession('user');
    if (session.logged && session.data) {
      setLogged(true);
      setUser(session.data);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveAuthSession('user', { logged, data: user });
  }, [logged, user, hydrated]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError([]);
    fetch(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => {
        if (r.ok) {
          return r.json().then((data) => {
            setUser(data);
            setLogged(true);
            setEmail('');
            setPassword('');
          });
        }
        return r.json().then((body) => {
          setError(formatErrors(body.errors ?? body.error ?? 'Login failed'));
        });
      })
      .catch(() => {
        setError(['Unable to reach server. Is the API running?']);
      });
  };

  if (!hydrated) {
    return null;
  }

  return logged ? (
    <>
      <Header user={user} />
      <UserRoutes user={user} />
    </>
  ) : (
    <Login
      setUser={setUser}
      setLogged={setLogged}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
      handleLogin={handleLogin}
    />
  );
};

export default User;
