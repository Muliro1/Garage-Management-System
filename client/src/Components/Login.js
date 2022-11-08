import React, { useState } from "react";
import { NavLink } from "react-router-dom";

 function Login  ({fullName,setPass,setFullName,handleSubmit,pass,error})  {
    

    return (
        <div className="auth-form-container bg-slate-100">
            <h2 className="text-center text-3xl font-black">Login</h2>
            {error.length > 0 && (
                        <p className='text-red-500 pb-4 font-bold italic' key={error}>{error }</p>
            )}
            <div className="m-auto bg-slate-300  rounded-xl">
            <form className=" m-auto bg-slate-300 p-16 rounded-xl " onSubmit={handleSubmit}>
                <label className="text-center"  htmlFor="email">Fullname</label><br></br>
                <input className="m-6" value={fullName} onChange={(e) => setFullName(e.target.value)}type="text" placeholder="yourfullname" id="fullname" name="required" /><br></br>
                <label className="text-center" htmlFor="password">Password</label><br></br>
                <input className="m-6" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="required" /><br></br>
                <button className="bg-black text-white font-bold p-1 mt-4 rounded-xl" type="submit">Log In</button>
                </form>
                <NavLink to='/' className=' float-right mr-4 hover:text-orange-500'>Back to homepage</NavLink>

</div>
        </div>
    )
}
export default Login