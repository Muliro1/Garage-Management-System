import React, { useState } from 'react';
import ReactModal from 'react-modal';

function AdminClient({ client }) {
    const [isOpen, setIsOpen] = useState(false);
    // console.log(client)
    return (
        <>

            <div className="h-[50vh] font-serif border-solid max-w-sm bg-slate-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-full m-auto w-32 h-32" src="https://robohash.org/sitsequiquia.png?size=300x300&set=set1" alt="" />
                <div className="p-5 text-center ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{client.username}</h5>
                    <p>Email:{client.email} <span></span></p>
                    <p>Telephone:{client.telephone} <span></span></p>
                    <p>Address:123remstreet <span></span></p>
                    <div>
                        <span onClick={() => setIsOpen(!isOpen)} className=' flex mt-2 pl-2 bg-slate-300 float-left border-solid border border-black font-black hover:cursor-pointer hover:text-orange-500'>View More Info
                        <svg className='pt-1 ml-1'  title="view client" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.18103 9C1.12103 3.88 5.60803 0 11 0C16.392 0 20.878 3.88 21.819 9C20.879 14.12 16.392 18 11 18C5.60803 18 1.12203 14.12 0.18103 9ZM11 14C12.3261 14 13.5979 13.4732 14.5356 12.5355C15.4732 11.5979 16 10.3261 16 9C16 7.67392 15.4732 6.40215 14.5356 5.46447C13.5979 4.52678 12.3261 4 11 4C9.67395 4 8.40218 4.52678 7.4645 5.46447C6.52681 6.40215 6.00003 7.67392 6.00003 9C6.00003 10.3261 6.52681 11.5979 7.4645 12.5355C8.40218 13.4732 9.67395 14 11 14ZM11 12C10.2044 12 9.44132 11.6839 8.87871 11.1213C8.3161 10.5587 8.00003 9.79565 8.00003 9C8.00003 8.20435 8.3161 7.44129 8.87871 6.87868C9.44132 6.31607 10.2044 6 11 6C11.7957 6 12.5587 6.31607 13.1214 6.87868C13.684 7.44129 14 8.20435 14 9C14 9.79565 13.684 10.5587 13.1214 11.1213C12.5587 11.6839 11.7957 12 11 12Z" fill="white" />
                        </svg>
                        
                        </span>
                        

                        <ReactModal
                            onRequestClose={() => setIsOpen(false)}
                            ariaHideApp={false}
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
                                    width: '50em',
                                    top: '10em',
                                    left: '22em',
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
                            <div className='font-serif '>
                                <h1 className='text-center font-black underline text-xl'>Client's Information</h1>
                                <p className='font-lighter italic'>Clients Name:<span className='font-black'> {client.username}</span></p>
                                <p className='font-lighter italic'>Number of vehicles in garage:<span className='font-black'>{client.vehicles.length > 0 ? client.vehicles.length : 'none'}</span></p>
                                <h1 className='font-serif text-center mt-2 underline text-xl mb-4'>Vehicles owned in Garage</h1>
                                <div className='grid grid-cols-2 gap-4 pl-8'>
                                    {client.vehicles.length > 0 && client.vehicles.map((vehicle) => (
                                        <section key={vehicle.id} className='w-10/12 border-solid max-w-sm bg-slate-300 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                                            <div className='text-center'>
                                                <img className='rounded-full m-auto w-20 h-20' src="https://thumbs.dreamstime.com/b/moving-truck-5819445.jpg" alt='' />
                                                <p>Vehicle Make:<span className='pl-2 font-bold'>{vehicle.make}</span></p>
                                                <p>Vehicle Plate Number:<span className='pl-2 italic font-bold'>{vehicle.plate_number}</span></p>
                                                <p>Vehicle total bill:<span className='pl-2 italic font-bold'>{vehicle.billing}Ksh</span></p>
                                                <p className={vehicle.approved ? 'font-bold text-green-500' : 'font-bold text-red-500'} >{vehicle.approved ? 'Approved' : "Not Approved"}</p>
                                                <p className={vehicle.cleared ? 'font-bold text-green-500' : 'font-bold text-red-500'} >{vehicle.cleared ? 'Cleared' : "Not Cleared"}</p>
                                            </div>
                                        </section>
                                    ))}
                                </div>
                                <button className='bg-black m-4 p-1 text-white float-right' onClick={() => setIsOpen(!isOpen)}>Close</button>

                            </div>

                        </ReactModal>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminClient