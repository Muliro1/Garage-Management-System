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
        setRefresh(!refresh)
        setIsOpen(!isOpen)
    }

    function handleCarDelete() {
        fetch(`http://127.0.0.1:3000/vehicles/${vehicle.id}`, {
            method: 'DELETE'
        })
            .then(setRefresh(!refresh))

    }
    
    return (
        <div className='grid grid-cols-7 gap-4 bg-slate-300 rounded-lg pt-2 pb-1 mb-2 mr-2 ml-2 mt-6 font-bold'>
            <img className='w-10 h-8 ml-4' src="https://thumbs.dreamstime.com/b/moving-truck-5819445.jpg" alt='' />
            <p>{vehicle.make}</p>
            <p>{vehicle.billing} Ksh</p>
            <p>{vehicle.plate_number}</p>
            <p>maxwell Hingis</p>
            <p className={vehicle.approved ? 'font-bold text-green-500' : 'font-bold text-red-500'} >{vehicle.approved ? 'Approved' : "Not Approved"}</p>
            <div className='grid grid-cols-2'>
                <svg className='ml-8 hover:cursor-pointer' onClick={() => setIsOpen(!isOpen)} title="view client" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.18103 9C1.12103 3.88 5.60803 0 11 0C16.392 0 20.878 3.88 21.819 9C20.879 14.12 16.392 18 11 18C5.60803 18 1.12203 14.12 0.18103 9ZM11 14C12.3261 14 13.5979 13.4732 14.5356 12.5355C15.4732 11.5979 16 10.3261 16 9C16 7.67392 15.4732 6.40215 14.5356 5.46447C13.5979 4.52678 12.3261 4 11 4C9.67395 4 8.40218 4.52678 7.4645 5.46447C6.52681 6.40215 6.00003 7.67392 6.00003 9C6.00003 10.3261 6.52681 11.5979 7.4645 12.5355C8.40218 13.4732 9.67395 14 11 14ZM11 12C10.2044 12 9.44132 11.6839 8.87871 11.1213C8.3161 10.5587 8.00003 9.79565 8.00003 9C8.00003 8.20435 8.3161 7.44129 8.87871 6.87868C9.44132 6.31607 10.2044 6 11 6C11.7957 6 12.5587 6.31607 13.1214 6.87868C13.684 7.44129 14 8.20435 14 9C14 9.79565 13.684 10.5587 13.1214 11.1213C12.5587 11.6839 11.7957 12 11 12Z" fill="white" />
                </svg>
               {vehicle.approved? <svg onClick={()=>handleCarDelete()} className='ml-4 hover:cursor-pointer' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 4H20V6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6H0V4H5V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4ZM7 9V15H9V9H7ZM11 9V15H13V9H11ZM7 2V4H13V2H7Z" fill="#FF0404" />
                </svg>:null}
            </div>

            <ReactModal
                onRequestClose={() => setIsOpen(false)}
                isOpen={isOpen}
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
                        width: '25em',
                        top: '15em',
                        left: '45em',
                        bottom: '8em',
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

                    <img className='  ml-4' src="https://thumbs.dreamstime.com/b/moving-truck-5819445.jpg" alt='' />
                    <div>
                        <p className='p-1'>Total Bill: <span className='font-bold'>{vehicle.billing} Ksh</span></p>
                        <p className='p-1'>Vehicle make: <span className='font-bold'>{vehicle.make}</span></p>

                        <p className='p-1'> Plate Number: <span className='font-bold'>{vehicle.plate_number}</span></p>
                        <p className='p-1'>Car owner:<span className='font-bold'>maxwell Hingis</span></p>
                        <span className='p-1'>Status: <span className={vehicle.approved ? "bg-green-500" : 'bg-red-500 font-bold'} >{vehicle.approved ? 'Approved' : "Not Approved"}</span></span>
                    </div>
                    {vehicle.approved ? null : <button onClick={() => approve()} className='float-right bg-black text-white p-1'>Approve vehicle</button>}

                </div>

            </ReactModal>
        </div>
    )
}

export default AdminCar