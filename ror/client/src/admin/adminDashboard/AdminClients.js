import React, { useEffect, useState } from 'react'
import AdminClient from './AdminClient';


function AdminClients() {
   
    const [clients, setClients] = useState([])
    const [searchValue, setSearchValue] = useState('')
    useEffect(() => {
        fetch('http://127.0.0.1:3000/users')
            .then((r) => r.json())
            .then((data) => setClients(data))


    }, [])

    // search functionality
    const getFilteredClients = () => {
        if (!searchValue) return clients
        return clients.filter(
            client => client.username.toLowerCase().includes(searchValue.toLowerCase())
        )
    }

    const filteredClients = getFilteredClients()

    // sorting functionality
    function handleAscSort() {
        const strAscending = [...clients].sort((a, b) =>
            a.username > b.username ? 1 : -1,
        );
        setClients(strAscending)
    }

    function handleDescSort() {
        const strDescending = [...clients].sort((a, b) =>
            a.username > b.username ? -1 : 1,
        );
        setClients(strDescending)
    }


    return (
        <main className='bg-slate-100 '>
            <div className=' adminnavuser text-white h-[8vh]'>
            </div>
            <div className='flex mt-2'>
                <svg className='ml-4' width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM15.363 14.233C16.8926 14.6261 18.2593 15.4918 19.2683 16.7068C20.2774 17.9218 20.8774 19.4242 20.983 21H18C18 18.39 17 16.014 15.363 14.233ZM13.34 11.957C14.178 11.2075 14.8482 10.2893 15.3066 9.26275C15.765 8.23616 16.0013 7.12429 16 6C16.0021 4.63347 15.6526 3.28937 14.985 2.097C16.1176 2.32459 17.1365 2.93737 17.8685 3.8312C18.6004 4.72502 19.0002 5.84473 19 7C19.0003 7.71247 18.8482 8.41676 18.5541 9.06567C18.26 9.71459 17.8305 10.2931 17.2946 10.7625C16.7586 11.2319 16.1285 11.5814 15.4464 11.7874C14.7644 11.9934 14.0462 12.0512 13.34 11.957Z" fill="black" />
                </svg>


                <h1 className='pl-4'>Clients</h1>
            </div>
            <section className=''>
                
                <div className='ml-4  flex justify-end mt-4 '>
                    <div className=''>
                        <label>Search client </label>
                        <input  onChange={(e) => setSearchValue(e.target.value)} className='rounded-3xl text-center w-7/12 bg-black text-white' type='search' placeholder='search client....' />
                    </div>
                </div>
                <div className='mt-4 flex  '>
                    <span className='ml-4 pl-1 flex bg-black text-white rounded-md'>Sort by Name
                        <svg onClick={() => handleDescSort()} className='mt-2 ml-1 bg-white m-1 cursor-pointer ' width="10" height="10" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99999 2.828L2.04999 7.778L0.635986 6.364L6.99999 0L13.364 6.364L11.95 7.778L6.99999 2.828Z" fill="black" />
                        </svg>
                        <svg onClick={() => handleAscSort()} className='mt-2 ml-1 bg-white m-1 cursor-pointer ' width="10" height="10" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99999 5.17198L11.95 0.221985L13.364 1.63598L6.99999 7.99998L0.635986 1.63598L2.04999 0.221985L6.99999 5.17198Z" fill="black" />
                        </svg>

                    </span>
                </div>
                <section className='bg-slate-200 m-auto h-[65vh] mt-2 w-11/12  pb-2 overflow-hidden hover:overflow-y-scroll rounded-md'>
                   
                    <div className=' m-2  grid grid-cols-3 gap-4 '>
                        {filteredClients.map((client) => {
                            return (
                                <AdminClient key={client.id} client={client} />
                            )
                        })}

                    </div>
                </section>


            </section>
            <section className='adminnavuser  absolute bottom-[-0.72em] w-[85.7%]'>
                <section className='adminnavuser h-[5vh]'>
                    <p className='text-white pl-4'>@copyright PBMW 2022</p>
                </section>
            </section>
        </main>
    )
}

export default AdminClients