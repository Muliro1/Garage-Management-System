import React, { useState } from 'react';
import ReactModal from 'react-modal';

function AdminGuard({ guard, refresh, setRefresh }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleDeleteGuard() {

        fetch(`http://127.0.0.1:3000/technicians/${guard.id}`, {
            method: 'DELETE'
        })
            .then(setRefresh(!refresh))

    }

    return (
        <div className='mt-6'>
            <div className='flex justify-around bg-slate-300 rounded-lg pt-2 pb-1 mb-2 mr-2 ml-2 '>
                <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 0.833344C46.1 0.833344 59.1666 13.9 59.1666 30C59.1666 46.1 46.1 59.1667 30 59.1667C13.9 59.1667 0.833313 46.1 0.833313 30C0.833313 13.9 13.9 0.833344 30 0.833344ZM12.5671 39.9633C16.8487 46.3508 23.2771 50.4167 30.4666 50.4167C37.6533 50.4167 44.0846 46.3538 48.3633 39.9633C43.5092 35.4268 37.1106 32.9074 30.4666 32.9167C23.8216 32.9066 17.4219 35.4261 12.5671 39.9633ZM30 27.0833C32.3206 27.0833 34.5462 26.1615 36.1872 24.5205C37.8281 22.8796 38.75 20.654 38.75 18.3333C38.75 16.0127 37.8281 13.7871 36.1872 12.1462C34.5462 10.5052 32.3206 9.58334 30 9.58334C27.6793 9.58334 25.4537 10.5052 23.8128 12.1462C22.1719 13.7871 21.25 16.0127 21.25 18.3333C21.25 20.654 22.1719 22.8796 23.8128 24.5205C25.4537 26.1615 27.6793 27.0833 30 27.0833Z" fill="black" />
                </svg>
                <p>{guard.full_name}</p>
                <p>{guard.email}</p>
                <div className='flex '>
                    <svg className='hover:bg-black hover:cursor-pointer' onClick={() => setIsOpen(!isOpen)} width="22" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.9 3.85808L14.142 8.10108L4.242 18.0001H0V13.7571L9.9 3.85708V3.85808ZM11.314 2.44408L13.435 0.322083C13.6225 0.134612 13.8768 0.0292969 14.142 0.0292969C14.4072 0.0292969 14.6615 0.134612 14.849 0.322083L17.678 3.15108C17.8655 3.33861 17.9708 3.59292 17.9708 3.85808C17.9708 4.12325 17.8655 4.37756 17.678 4.56508L15.556 6.68608L11.314 2.44408Z" fill="white" />
                    </svg>
                    <svg onClick={handleDeleteGuard} className='ml-2 hover:cursor-pointer' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <p>{guard.full_name}</p>
                        <button className='bg-black p-1 text-white float-right' onClick={() => setIsOpen(!isOpen)}>Close</button>

                    </div>

                </ReactModal>
            </div>



        </div>
    )
}

export default AdminGuard