import React, { useState } from "react";

 function Login  ({fullName,setPass,setFullName,handleSubmit,pass,error})  {
    

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            {error.length > 0 && (
                        <p className='text-red-500 pb-4 font-bold italic' key={error}>{error }</p>
                    ) }
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">fullname</label>
                <input value={fullName} onChange={(e) => setFullName(e.target.value)}type="text" placeholder="yourfullname" id="fullname" name="required" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="required" />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}
export default Login