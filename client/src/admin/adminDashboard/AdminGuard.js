import React, { useState } from 'react';
import ReactModal from 'react-modal';

function AdminGuard({ guard, refresh, setRefresh }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleDeleteGuard() {

        fetch(`http://127.0.0.1:3000/guards/${guard.id}`, {
            method: 'DELETE'
        })
            .then(()=>setRefresh(!refresh))

    }

    return (
        <>

            <div className="  font-serif border-solid max-w-sm bg-slate-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-full m-auto w-20 h-20" src="https://robohash.org/sitsequiquia.png?size=300x300&set=set1" alt="" />
                <div className="p-5 text-center ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{guard.full_name}</h5>
                    <p>Email:{guard.email} <span></span></p>

                    <div className='flex justify-between'>
                     
                     <svg  onClick={handleDeleteGuard} className='ml-2 hover:cursor-pointer' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M15 4H20V6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6H0V4H5V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4ZM7 9V15H9V9H7ZM11 9V15H13V9H11ZM7 2V4H13V2H7Z" fill="#FF0404" />
                     </svg>
                 </div>


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
                             width: '20em',
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

                    </div>

                 </ReactModal>
             </div>
                </div>

        </>
    )
}

export default AdminGuard