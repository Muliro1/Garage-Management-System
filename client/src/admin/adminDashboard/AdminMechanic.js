import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

function AdminMechanic({ mechanic, refresh,setRefresh}) {
    const [isOpen, setIsOpen] = useState(false);
    const [vehicles, setVehicles] = useState([])
    const [vehicleRefresh,setVehicleRefresh] = useState(false)
    // console.log(vehicles);

    useEffect(() => {
        fetch('http://127.0.0.1:3000/vehicles')
            .then((r) => r.json())
            .then((data) => setVehicles(data))
    }, [refresh])

    function assignVehicle(e) {
        // console.log(e.target.value)
        fetch(`http://127.0.0.1:3000/vehicles/${e.target.value}`, {
            method: 'PATCH',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({
                technician_id:mechanic.id
            })
        })
            .then((r)=>r.json())
            .then((r) => {
                console.log(vehicles)
                console.log(r)
                setRefresh(!refresh)
                setVehicleRefresh(!vehicleRefresh)
                setIsOpen(!isOpen)
            })
    }
    
    return (
      
        <>

            <div className="h-[43vh]  font-serif border-solid max-w-sm bg-slate-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-full m-auto w-20 h-20" src="https://robohash.org/sitsequiquia.png?size=300x300&set=set1" alt="" />
                <div className="p-5 text-center ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{mechanic.name}</h5>
                    <p>Email:{mechanic.email} <span></span></p>
                    <p>Telephone:{mechanic.telephone} <span></span></p>
                    <p>Rating: {mechanic.rating}/10 <span></span></p>
                    <div>
                        <span onClick={() => setIsOpen(!isOpen)} className='flex mt-2 text-sm rounded-2xl p-1 float-left bg-slate-500 text-white font-black  hover:cursor-pointer hover:text-orange-500'>View More Info
                            <svg className='pt-1' title="view client" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.18103 9C1.12103 3.88 5.60803 0 11 0C16.392 0 20.878 3.88 21.819 9C20.879 14.12 16.392 18 11 18C5.60803 18 1.12203 14.12 0.18103 9ZM11 14C12.3261 14 13.5979 13.4732 14.5356 12.5355C15.4732 11.5979 16 10.3261 16 9C16 7.67392 15.4732 6.40215 14.5356 5.46447C13.5979 4.52678 12.3261 4 11 4C9.67395 4 8.40218 4.52678 7.4645 5.46447C6.52681 6.40215 6.00003 7.67392 6.00003 9C6.00003 10.3261 6.52681 11.5979 7.4645 12.5355C8.40218 13.4732 9.67395 14 11 14ZM11 12C10.2044 12 9.44132 11.6839 8.87871 11.1213C8.3161 10.5587 8.00003 9.79565 8.00003 9C8.00003 8.20435 8.3161 7.44129 8.87871 6.87868C9.44132 6.31607 10.2044 6 11 6C11.7957 6 12.5587 6.31607 13.1214 6.87868C13.684 7.44129 14 8.20435 14 9C14 9.79565 13.684 10.5587 13.1214 11.1213C12.5587 11.6839 11.7957 12 11 12Z" fill="white" />
                            </svg>

                        </span>

        <ReactModal
                     onRequestClose={() => setIsOpen(false)}
                     isOpen={isOpen}
                     contentLabel="Example Modal"
                     ariaHideApp={false}
                     style={{
                         overlay: {
                             position: 'fixed',
                             top: 0,
                             left: 0,
                             right: 0,
                             bottom: 0,
                             backgroundColor: 'rgba(255, 255, 255, 0.3)'
                         },
                         content: {
                             position: 'absolute',
                             width: '50em',
                             top: '8em',
                             left: '15em',
                             bottom: '3em',
                             border: '1px solid #ccc',
                             background: 'white',
                             overflow: 'auto',
                             WebkitOverflowScrolling: 'touch',
                             borderRadius: '4px',
                             outline: 'none'
                         }
                     }}
                 >
                     <div className='font-serif' >
                         <button className='bg-black p-1 text-white float-right' onClick={() => setIsOpen(!isOpen)}>Close</button>
                         <h1 className='text-center underline font-bold pt-10'>Mechanics Information</h1>
                         <p>Name:<span className='font-black'>{mechanic.name}</span></p>
                         <p>Email:<span className='font-black'>{mechanic.email}</span></p>
                         <p>Phone Number:<span className='font-black'>{mechanic.telephone}</span></p>
                         <p>Number of vehicle assigned:<span className='font-black'>{mechanic.vehicles.length}</span></p>
                         <h1 className='text-center underline italic font-black'>Vehicles assigned info</h1>
                         {mechanic.vehicles && mechanic.vehicles.length > 0 && mechanic.vehicles.map((vehicle) => (
                             <div key={mechanic.id} className='bg-slate-200 rounded-lg m-2 pl-4'>
                                 <p>Vehicle Make:<span className='font-bold'>{vehicle.make}</span> </p>
                                 <p>Vehicle plate number:<span className='font-bold'>{vehicle.plate_number}</span></p>
                                 {/* <p>Vehicle owner:{vehicle.user.username}</p> */}
                             </div>
                         ))}
                         <h1 className='text-center underline font-black mt-4'>Assign vehicle</h1>
                                {vehicles.map((vehicle) => {
                                    if (vehicle.technician_id === null) {
                                        return (
                              
                                            <div key={vehicle.id} className='text-center bg-slate-300 rounded-md mb-4'>
                                                <p>Owner: {vehicle.user.username}</p>
                                                <p>Vehicle Make: {vehicle.make}</p>
                                                <p>Vehicle Number plate: {vehicle.plate_number}</p>
                                                <button onClick={(e) => assignVehicle(e)} value={vehicle.id} className='bg-black text-white rounded-xl p-1 m-2'>Assign vehicle</button>
                                            </div>
                                        )
                                    }
                                    return true
                                })}
                     </div>
                 </ReactModal>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminMechanic