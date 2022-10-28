import React, { useEffect, useState } from 'react';
import AdminCar from './AdminCar';


function AdminCars() {
    const [vehicles, setVehicles] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [refresh,setRefresh] = useState(false)
   

    // console.log(vehicles)
  

    // fetching all vehicles
    useEffect(() => {
        fetch('http://127.0.0.1:3000/vehicles')
            .then((r) => r.json())
            .then((data) => setVehicles(data))


    }, [refresh])

    // search functionality
    const getFilteredVehicles = () => {
        if (!searchValue) return vehicles
        return vehicles.filter(
            vehicle => vehicle.plate_number.toLowerCase().includes(searchValue.toLowerCase())
        )
    }

    const filteredVehicles = getFilteredVehicles()

    // sorting functionality
    function handleAscSort() {
        const strAscending = [...vehicles].sort((a, b) =>
            a.plate_number > b.plate_number ? 1 : -1,
        );
        setVehicles(strAscending)
    }

    function handleDescSort() {
        const strDescending = [...vehicles].sort((a, b) =>
            a.plate_number > b.plate_number ? -1 : 1,
        );
        setVehicles(strDescending)
    }

    return (
        <main className=''>
            <div className=' adminnavuser text-white h-[8vh]'>
            </div>
            <div className='flex mt-10'>
                <svg className='ml-8 mr-[-11px]' width="30" height="30" viewBox="0 0 49 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5 -11.2295H13.4584L6.83337 -5.70866H4.62504C2.17379 -5.70866 0.208374 -3.74324 0.208374 -1.29199V5.33301H5.00046C5.95004 7.98301 8.44546 9.74968 11.25 9.74968C14.0546 9.74968 16.55 7.98301 17.4775 5.33301H31.5005C32.45 7.98301 34.9455 9.74968 37.75 9.74968C40.5546 9.74968 43.05 7.98301 43.9775 5.33301H48.7917V3.12468C48.7917 0.673426 46.5171 -0.121574 44.375 -1.29199L24.5 -11.2295ZM9.59379 -3.50033L14.5625 -7.91699H23.3959L32.2292 -3.50033H9.59379ZM11.25 -0.187824C12.1286 -0.187824 12.9711 0.161169 13.5923 0.782384C14.2135 1.4036 14.5625 2.24615 14.5625 3.12468C14.5625 4.00321 14.2135 4.84575 13.5923 5.46696C12.9711 6.08818 12.1286 6.43718 11.25 6.43718C10.3715 6.43718 9.52896 6.08818 8.90775 5.46696C8.28654 4.84575 7.93754 4.00321 7.93754 3.12468C7.93754 2.24615 8.28654 1.4036 8.90775 0.782384C9.52896 0.161169 10.3715 -0.187824 11.25 -0.187824ZM37.75 -0.187824C38.6286 -0.187824 39.4711 0.161169 40.0923 0.782384C40.7135 1.4036 41.0625 2.24615 41.0625 3.12468C41.0625 4.00321 40.7135 4.84575 40.0923 5.46696C39.4711 6.08818 38.6286 6.43718 37.75 6.43718C36.8715 6.43718 36.029 6.08818 35.4078 5.46696C34.7865 4.84575 34.4375 4.00321 34.4375 3.12468C34.4375 2.24615 34.7865 1.4036 35.4078 0.782384C36.029 0.161169 36.8715 -0.187824 37.75 -0.187824Z" fill="#434343" />
                </svg>



                <h1 className='pl-4 font-black tracking-wider'>Vehicles</h1>
            </div>
            <section className='adminclient  pb-6 m-auto ml-8 mr-4 pt-2 '>
                <div className='ml-4  flex justify-end mt-4 '>
                    <div>
                        <label>Search Car  </label>
                        <input onChange={(e) => setSearchValue(e.target.value)} className='rounded-3xl text-center w-7/12' type='search' placeholder='search car....' />
                    </div>
                </div>
                <div className='mt-4 flex  '>
                    <span className='ml-4 pl-1 flex bg-white'>Name
                        <svg onClick={() => handleDescSort()} className='mt-2 ml-1 bg-slate-400 m-1 cursor-pointer ' width="10" height="10" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99999 2.828L2.04999 7.778L0.635986 6.364L6.99999 0L13.364 6.364L11.95 7.778L6.99999 2.828Z" fill="black" />
                        </svg>
                        <svg onClick={() => handleAscSort()} className='mt-2 ml-1 bg-slate-400 m-1 cursor-pointer ' width="10" height="10" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99999 5.17198L11.95 0.221985L13.364 1.63598L6.99999 7.99998L0.635986 1.63598L2.04999 0.221985L6.99999 5.17198Z" fill="black" />
                        </svg>

                    </span>
                </div>
                <section className='bg-slate-50 m-auto h-60 mt-2 w-11/12  pb-2 overflow-hidden hover:overflow-y-scroll'>
                    <div className='grid grid-cols-7 gap-4 bg-slate-400   '>
                        <p className='pl-6'>Image</p>
                        <p className=''>Make</p>
                        <p className=''>billing</p>
                        <p className=''>Plate Number</p>
                        <p className='pl-1'>owner</p>
                        <p className='pl-2'>Approval Status</p>
                        <p className='pl-6  '>Action</p>
                    </div>
                    {vehicles.errors? null: filteredVehicles.map((vehicle) => {
                        return (
                            <AdminCar key={vehicle.id} vehicle={vehicle} setRefresh={setRefresh} refresh={refresh}  />
                        )
                    })}
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

export default AdminCars