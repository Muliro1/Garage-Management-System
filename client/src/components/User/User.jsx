import React, { useState,useEffect } from "react";
import Header from "../Header/Header";
import Router from "../../routers/Router";
import Login from "../Login/Login";


const User = () => {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  
  useEffect(() => {
    const data = localStorage.getItem('USER')
    const login = localStorage.getItem('LOGGED')
    if (data && login) {
      setLogged(JSON.parse(login))
      setUser(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('LOGGED', JSON.stringify(logged))
    localStorage.setItem('USER', JSON.stringify(user))

  }, [logged,user])


  useEffect(() => {
    fetch("http://127.0.0.1:3000/profile").then((r) => {
      if (r.ok) {
        r.json().then((data) => setUser(data));
      }
    });
  }, []);
  console.log(user)

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data);
          setLogged(true);
        });
      } else {
        r.json().then((error) => setError(error.errors));
      }
    });

    e.target.reset();
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {logged ? (
        <>
          <Header user={user}/>
          <Router />
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
      )}
    </>
  );
};

export default User;
