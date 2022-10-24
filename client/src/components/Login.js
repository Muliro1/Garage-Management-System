import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className='Login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Login</button>
        </form>
        </div>
    );
};


export default Login;