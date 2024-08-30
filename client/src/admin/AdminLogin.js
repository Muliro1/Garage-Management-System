import React from 'react'
import { NavLink } from 'react-router-dom';

function AdminLogin({setFullName,setPassword, handleLogin, error ,loading, props}) {
    return (
        <div className='adminlogin h-[100vh]'>
            
           
            {loading ? <h1 className=' text-3xl text-white font-bold text-center pt-60'> Loading...</h1> :
                <>
            <div className='adminlogobg'>
                <h1 className='adminlogo text-white pl-4'>PBMW <span>Admin Login</span></h1>
                    </div>
                    <NavLink to='/' className='float-right mr-4 hover:text-orange-500'>Back to homepage</NavLink>
            <div className=' rounded-lg bg-gradient-to-b from-slate-100 to-transparent via-grey-500 m-auto  w-5/12 mt-10'>
                <svg className='m-auto pt-6' width="121" height="126" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.5 0.083252C93.85 0.083252 120.917 27.1499 120.917 60.4999C120.917 93.8499 93.85 120.917 60.5 120.917C27.15 120.917 0.083374 93.8499 0.083374 60.4999C0.083374 27.1499 27.15 0.083252 60.5 0.083252ZM24.389 81.1383C33.2582 94.3695 46.574 102.792 61.4667 102.792C76.3534 102.792 89.6752 94.3755 98.5384 81.1383C88.4835 71.741 75.2293 66.5223 61.4667 66.5416C47.702 66.5208 34.4454 71.7396 24.389 81.1383ZM60.5 54.4583C65.3071 54.4583 69.9173 52.5487 73.3164 49.1496C76.7155 45.7505 78.625 41.1403 78.625 36.3333C78.625 31.5262 76.7155 26.916 73.3164 23.5169C69.9173 20.1178 65.3071 18.2083 60.5 18.2083C55.693 18.2083 51.0828 20.1178 47.6837 23.5169C44.2846 26.916 42.375 31.5262 42.375 36.3333C42.375 41.1403 44.2846 45.7505 47.6837 49.1496C51.0828 52.5487 55.693 54.4583 60.5 54.4583Z" fill="black" />
                </svg>
                <form className=' text-center mt-6 ' onSubmit={(e) => handleLogin(e, setFullName, setPassword, props)}>
                    {error.length > 0 && (
                        <p className='text-red-500 pb-4 font-bold italic' key={error}>{error }</p>
                    ) }

                    <label className='tracking-wide font-black text-xl  font-serif'>Full Name</label><br></br>
                    <input onChange={(e)=>setFullName(e.target.value)} type='text' className='m-2 mb-6 rounded-full p-1 text-center' placeholder='enter full name...' required/><br></br>

                    <label className='tracking-wide font-black text-xl font-serif' >Password</label><br></br>
                    <input onChange={(e) => setPassword(e.target.value)} type='password' className='p-1 m-2 mb-6 text-center rounded-full bg-slate-50' placeholder='enter password...' required/><br></br>

                    <input type='submit' value="LogIn" className='mt-6 mb-16 bg-black adminloginbtn text-white p-1 rounded-2xl w-3/12 hover:cursor-pointer  hover:ease-in-out duration-300 hover:scale-125 hover:bg-white hover:text-black' />
                </form>
                <NavLink to='/' className='float-right mr-4 hover:text-orange-500'>Back to homepage</NavLink>

                    </div>
                </>}
            
            </div>
    )
}

export default AdminLogin