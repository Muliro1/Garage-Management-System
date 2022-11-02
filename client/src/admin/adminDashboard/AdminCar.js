import React, { useState } from 'react';
import ReactModal from 'react-modal';

function AdminCar({ vehicle, setRefresh, refresh }) {
    const [isOpen, setIsOpen] = useState(false);

    function approve() {
        fetch(`http://127.0.0.1:3000/vehicles/${vehicle.id}`, {
            method: 'PATCH',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({
                approved: true
            })
        })
            .then(() => setRefresh(!refresh))
        
        setIsOpen(!isOpen)
    }

    function handleCarDelete() {
        fetch(`http://127.0.0.1:3000/vehicles/${vehicle.id}`, {
            method: 'DELETE'
        })
            .then(()=>setRefresh(!refresh))

    }
    
    return (

        <>

            <div className="h-[43vh] text-center  font-serif border-solid max-w-sm bg-slate-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className='w-20 h-20 rounded-full m-auto' src={vehicle.image} alt={vehicle.make} />
                <p className='font-black'><span className='font-normal'>Vehicle Plate Number:</span> {vehicle.plate_number}</p>
                <p className='font-black'><span className='font-normal'>Total Bill:</span> {vehicle.billing} Ksh</p>
             <p className='font-black'><span className='font-normal'>Vehicle Make:</span> {vehicle.make}</p>
             <p className='font-black'><span className='font-normal'>Vehicle Owner:</span>{ vehicle.user.username}</p>
             <p className={vehicle.approved ? 'font-bold text-green-500' : 'font-bold text-red-500'} >{vehicle.approved ? 'Approved' : "Not Approved"}</p>
             <p className={vehicle.cleared ? 'font-bold text-green-500' : 'font-bold text-red-500'} >{vehicle.cleared ? 'Cleared' : "Not Cleared"}</p>

                        <div className='grid grid-cols-2'>
                
                    <button onClick={() => setIsOpen(!isOpen)} className='rounded-tr-full text-white bg-black mt-2 font-bold hover:bg-white hover:text-black '>View more Info</button>
                {vehicle.cleared? <svg onClick={()=>handleCarDelete()} className='ml-4 hover:cursor-pointer' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M15 4H20V6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6H0V4H5V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4ZM7 9V15H9V9H7ZM11 9V15H13V9H11ZM7 2V4H13V2H7Z" fill="#FF0404" />
                 </svg>:null}
             </div>

             <ReactModal
                 onRequestClose={() => setIsOpen(false)}
                 isOpen={isOpen}
                 ariaHideApp={false}
                 contentLabel="Example Modal"
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
                         width: '55em',
                         top: '5em',
                         left: '15em',
                         bottom: '4em',
                         border: '1px solid #ccc',
                         background: 'white',
                         overflow: 'auto',
                         WebkitOverflowScrolling: 'touch',
                         borderRadius: '4px',
                         outline: 'none',

                     }
                 }}
             >
                 <div >
                     <button className='bg-black p-1 text-white float-right' onClick={() => setIsOpen(!isOpen)}>Close</button>

                        <img className='  ml-4' src={vehicle.image} alt="https://thumbs.dreamstime.com/b/moving-truck-5819445.jpg" />
                     <div>
                         <h1 className='text-center underline font-black'>Vehicle Information</h1>
                            <p className='p-1'>Total Bill: <span className='font-bold'>{vehicle.billing} Ksh</span></p>
                            <p className='p-1'>Work Done: <span className='font-bold'>{vehicle.option}</span></p>
                            <p className='p-1'>Summary: <span className='font-bold'>{vehicle.summary}</span></p>
                         {vehicle.technician !== null && <>
                             <p className='p-1'>Technician name: <span className='font-bold'>{vehicle.technician.name}</span></p>
                             <p className='p-1'>Technician phone number: <span className='font-bold'>{vehicle.technician.telephone}</span></p>

                         </>}
                         <p className='p-1'>Vehicle make: <span className='font-bold'>{vehicle.make}</span></p>
                            <p className='p-1'> Plate Number: <span className='font-bold'>{vehicle.plate_number}</span></p>
                         <p className='p-1'>Car owner:<span className='font-bold'>{vehicle.user.username}</span></p>
                         <p className='p-1'>Car owner email:<span className='font-bold'>{vehicle.user.email}</span></p>
                         <span className=''>Status: <span className={vehicle.approved ? "bg-green-500" : 'bg-red-500 font-bold'} >{vehicle.approved ? 'Approved' : "Not Approved"}</span></span><br></br>
                         <span className=' '>Clearance: <span className={vehicle.cleared ? "bg-green-500" : 'bg-red-500 font-bold'} >{vehicle.cleared ? 'Cleared' : "Not Cleared"}</span></span>

                    </div>
                    {vehicle.approved ? null : <button onClick={() => approve()} className='float-right bg-black text-white p-1'>Approve vehicle</button>}

                 </div>

             </ReactModal>
            </div>

        </>
    )
}

export default AdminCar