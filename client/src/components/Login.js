import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };
    
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