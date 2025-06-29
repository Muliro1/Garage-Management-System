import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { API_ENDPOINTS } from '../config';

function TechnicianDashboard({ technician }) {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        fetch(API_ENDPOINTS.VEHICLES)
            .then((r) => r.json())
            .then((data) => setVehicles(data))
    }, [])

    function handleLogout() {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className='techniciandashboard'>
            <div className='technicianmain'>
                <div className='techniciannavuser text-white h-[8vh] flex justify-between'>
                    <p className='text-xl font-bold pl-2 mt-4'>Welcome {technician.name}</p>
                    <button onClick={() => handleLogout()} className='text-lg font-bold pr-2 hover:text-orange-500'>Logout</button>
                </div>
                
                <div className='flex mt-10'>
                    <h1 className='pl-4'>Technician Dashboard</h1>
                </div>
                
                <section className='pt-[14px] pb-[14px] flex justify-evenly'>
                    <div className='dashdiv w-[10em] rounded-xl text-white'>
                        <div className='flex justify-around'>
                            <p className='text-3xl font-black text-center'>{vehicles.length}<br></br> 
                                <span className='font-normal text-sm italic'>vehicles assigned</span> 
                            </p>
                        </div>
                        <NavLink to='/technician/vehicles' className='dashdivbtn w-[100%] flex pl-10 rounded-br-xl rounded-bl-xl'>
                            View Vehicles
                        </NavLink>
                    </div>

                    <div className='dashdiv w-[10em] rounded-xl text-white'>
                        <div className='flex justify-around'>
                            <p className='text-3xl font-black text-center'>Repair<br></br> 
                                <span className='font-normal text-sm italic'>services</span> 
                            </p>
                        </div>
                        <NavLink to='/technician/repair' className='dashdivbtn w-[100%] flex pl-10 rounded-br-xl rounded-bl-xl'>
                            Start Repair
                        </NavLink>
                    </div>

                    <div className='dashdiv w-[10em] rounded-xl text-white'>
                        <div className='flex justify-around'>
                            <p className='text-3xl font-black text-center'>Servicing<br></br> 
                                <span className='font-normal text-sm italic'>tasks</span> 
                            </p>
                        </div>
                        <NavLink to='/technician/servicing' className='dashdivbtn w-[100%] flex pl-10 rounded-br-xl rounded-bl-xl'>
                            Start Servicing
                        </NavLink>
                    </div>
                </section>
                
                <section className='techniciannavuser h-[5vh]'>
                    <p className='text-white pl-4'>@copyright PBMW 2022</p>
                </section>
            </div>
        </div>
    )
}

export default TechnicianDashboard 