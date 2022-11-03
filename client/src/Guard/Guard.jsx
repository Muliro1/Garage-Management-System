import React, { useState, useEffect } from 'react';
import GuardLogin from './GuardLogin';
import GuardVehicles from './GuardVehicles';

function Guard() {
    const [logged, setLogged] = useState(false)
    const [fullname, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [guard, setGuard] = useState([]);
    const [error, setError] = useState([]);
    useEffect(() => {
        const data = localStorage.getItem('GUARD')
        const login = localStorage.getItem('LOGGED')
        if (data && login) {
            setLogged(JSON.parse(login))
            setGuard(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('LOGGED', JSON.stringify(logged))
        localStorage.setItem('GUARD', JSON.stringify(guard))

    }, [logged, guard])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://127.0.0.1:3000/guards/login', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({
                full_name: fullname,
                password: password
            })
        }
        )
            .then((r) => {
                if (r.ok) {
                    r.json().then((data) => {
                        setGuard(data)
                        setLogged(true)
                    })
                } else {
                    r.json().then((error) => setError(error.errors))
                }
            }
            )

        e.target.reset()
        setFullName('')
        setPassword('')


    }

  return (
      <>
          {logged ?
              <>
               
                  <GuardVehicles guard={guard} />
              </> : <GuardLogin fullname={fullname} error={error} setFullName={setFullName} setPassword={setPassword} handleSubmit={handleSubmit} password={password} />
          }
      </>
  )
}

export default Guard;




