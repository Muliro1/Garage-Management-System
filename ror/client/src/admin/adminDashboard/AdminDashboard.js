import React, { useEffect, useState } from 'react'
import { NavLink,Outlet } from 'react-router-dom'

function AdminDashboard({ admin }) {
    const [technicians, setTechnicians] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [clients, setClients] = useState([])
    const [parts, setParts] = useState([])
    const [guards, setGuards] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/technicians')
            .then((r) => r.json())
            .then((data) => setTechnicians(data))


    }, [])
    useEffect(() => {
        fetch('http://127.0.0.1:3000/vehicles')
            .then((r) => r.json())
            .then((data) => setVehicles(data))


    }, [])
    useEffect(() => {
        fetch('http://127.0.0.1:3000/users')
            .then((r) => r.json())
            .then((data) => setClients(data))


    }, [])
    useEffect(() => {
        fetch('http://127.0.0.1:3000/parts')
            .then((r) => r.json())
            .then((data) => setParts(data))


    }, [])
    useEffect(() => {
        fetch('http://127.0.0.1:3000/guards')
            .then((r) => r.json())
            .then((data) => setGuards(data))


    }, [])

    function handleLogout() {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <main className='admindashboard m-0   '>

            <div className='adminmain  h-[100vh] '>
                <div className=' adminnavuser text-white h-[8vh] flex justify-between'>
                    <p className=' text-xl font-bold pl-2 mt-4' >Welcome {admin.full_name}</p>
                    <button onClick={() => handleLogout()} className=' text-lg font-bold pr-2 hover:text-orange-500 '>Logout</button>

                </div>
                <div className='flex mt-10'>
                    <svg className='ml-8' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill="black" />
                    </svg>

                    <h1 className='pl-4'>Dashboard</h1>
                </div>
                <section className='pt-[14px] pb-[14px]  flex justify-evenly'>

                    <div className='dashdiv w-[10em] rounded-xl text-white  '>
                        <div className='flex justify-around'>
                            <p className=' text-3xl font-black'>{parts.length}<br></br> <span className=' font-normal text-sm italic'>parts in stock</span> </p>
                            <svg className='ml-[-20em]' width="90" height="70" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.33003 0.271017C2.99706 0.0330009 3.72061 0.00294581 4.40509 0.184822C5.08957 0.366698 5.70277 0.751947 6.16368 1.28967C6.62459 1.8274 6.91152 2.49231 6.98657 3.19655C7.06162 3.90079 6.92126 4.61123 6.58403 5.23402L17.293 15.944L15.879 17.358L5.16903 6.64802C4.5461 6.98392 3.83602 7.12321 3.13236 7.04752C2.4287 6.97183 1.76448 6.68472 1.22724 6.22403C0.689997 5.76333 0.304944 5.15067 0.122823 4.46679C-0.0592985 3.7829 -0.0299406 3.05989 0.207027 2.39302L2.44403 4.63002C2.5824 4.77328 2.74791 4.88756 2.93092 4.96617C3.11393 5.04478 3.31076 5.08616 3.50993 5.08789C3.70909 5.08962 3.90661 5.05167 4.09096 4.97625C4.2753 4.90083 4.44278 4.78945 4.58362 4.64861C4.72446 4.50777 4.83584 4.34029 4.91126 4.15595C4.98668 3.9716 5.02463 3.77408 5.0229 3.57492C5.02117 3.37575 4.97979 3.17892 4.90118 2.99591C4.82257 2.8129 4.70829 2.64739 4.56503 2.50902L2.32903 0.270017L2.33003 0.271017ZM12.697 2.15502L15.879 0.387017L17.293 1.80102L15.525 4.98302L13.757 5.33702L11.637 7.45802L10.222 6.04402L12.343 3.92302L12.697 2.15502ZM5.97903 10.287L7.39303 11.701L2.09003 17.004C1.90973 17.1848 1.66709 17.2898 1.41186 17.2975C1.15663 17.3051 0.908141 17.2148 0.717343 17.0451C0.526545 16.8754 0.407891 16.6392 0.385706 16.3848C0.363521 16.1304 0.439486 15.8772 0.598027 15.677L0.676028 15.59L5.97903 10.287Z" fill="white" />
                            </svg>
                        </div>
                        <NavLink to='/admin/partsinstock' className='dashdivbtn w-[100%] flex pl-10 rounded-br-xl rounded-bl-xl'>More Info
                            <svg className='mt-[7px] ml-1' width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 9V6L14 10L10 14V11H6V9H10ZM10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18Z" fill="white" />
                            </svg>


                        </NavLink>
                    </div>

                    <div className='dashdiv w-[10em] rounded-xl text-white  '>
                        <div className='flex justify-around'>
                            <p className=' text-3xl font-black'>{clients.length}<br></br> <span className=' font-normal text-sm italic'>clients</span> </p>
                            <svg className='' width="90" height="70" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM15.363 14.233C16.8926 14.6261 18.2593 15.4918 19.2683 16.7068C20.2774 17.9218 20.8774 19.4242 20.983 21H18C18 18.39 17 16.014 15.363 14.233ZM13.34 11.957C14.178 11.2075 14.8482 10.2893 15.3066 9.26275C15.765 8.23616 16.0013 7.12429 16 6C16.0021 4.63347 15.6526 3.28937 14.985 2.097C16.1176 2.32459 17.1365 2.93737 17.8685 3.8312C18.6004 4.72502 19.0002 5.84473 19 7C19.0003 7.71247 18.8482 8.41676 18.5541 9.06567C18.26 9.71459 17.8305 10.2931 17.2946 10.7625C16.7586 11.2319 16.1285 11.5814 15.4464 11.7874C14.7644 11.9934 14.0462 12.0512 13.34 11.957Z" fill="white" />
                            </svg>
                        </div>
                        <NavLink to='/admin/clients' className='dashdivbtn w-[100%] flex pl-10 rounded-br-xl rounded-bl-xl'>More Info
                            <svg className='mt-[7px] ml-1' width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 9V6L14 10L10 14V11H6V9H10ZM10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18Z" fill="white" />
                            </svg>


                        </NavLink>
                    </div>

                    <div className='dashdiv w-[10em] rounded-xl text-white  '>
                        <div className='flex justify-around'>
                            <p className=' text-3xl font-black text-center'>{vehicles.length}<br></br> <span className=' font-normal text-sm italic '>cars</span> </p>
                            <svg className='' width="90" height="70" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2 17L16 18.5V19H2V18.5L3.8 17H2C1.46957 17 0.960859 16.7893 0.585786 16.4142C0.210714 16.0391 0 15.5304 0 15V4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H14C15.0609 0 16.0783 0.421427 16.8284 1.17157C17.5786 1.92172 18 2.93913 18 4V15C18 15.5304 17.7893 16.0391 17.4142 16.4142C17.0391 16.7893 16.5304 17 16 17H14.2ZM8 9V2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V9H8ZM10 9H16V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10V9ZM4.5 15C4.89782 15 5.27936 14.842 5.56066 14.5607C5.84196 14.2794 6 13.8978 6 13.5C6 13.1022 5.84196 12.7206 5.56066 12.4393C5.27936 12.158 4.89782 12 4.5 12C4.10218 12 3.72064 12.158 3.43934 12.4393C3.15804 12.7206 3 13.1022 3 13.5C3 13.8978 3.15804 14.2794 3.43934 14.5607C3.72064 14.842 4.10218 15 4.5 15ZM13.5 15C13.8978 15 14.2794 14.842 14.5607 14.5607C14.842 14.2794 15 13.8978 15 13.5C15 13.1022 14.842 12.7206 14.5607 12.4393C14.2794 12.158 13.8978 12 13.5 12C13.1022 12 12.7206 12.158 12.4393 12.4393C12.158 12.7206 12 13.1022 12 13.5C12 13.8978 12.158 14.2794 12.4393 14.5607C12.7206 14.842 13.1022 15 13.5 15Z" fill="white" />
                            </svg>
                        </div>
                        <NavLink to='/admin/carsinstock' className='dashdivbtn w-[100%] flex pl-10 rounded-br-xl rounded-bl-xl'>More Info
                            <svg className='mt-[7px] ml-1' width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 9V6L14 10L10 14V11H6V9H10ZM10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18Z" fill="white" />
                            </svg>


                        </NavLink>
                    </div>

                    <div className='dashdiv w-[10em] rounded-xl text-white  '>
                        <div className='flex justify-around'>
                            <p className=' text-3xl font-black text-center'>{technicians.length}<br></br> <span className=' font-normal text-sm italic pl-1 '>mechanics</span> </p>
                            <svg width="90" height="70" viewBox="0 0 82 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.52799 43.5445C0.810495 39.5423 0.810495 35.4576 1.52799 31.4554C5.93599 31.5518 9.89599 29.5938 11.436 26.1487C12.976 22.7 11.668 18.7172 8.47599 15.9026C11.0216 12.5996 14.1382 9.70895 17.7 7.34749C20.74 10.3067 25.036 11.5194 28.756 10.0917C32.476 8.66395 34.584 4.98899 34.476 0.906116C38.7957 0.240116 43.2043 0.240116 47.524 0.906116C47.416 4.9927 49.528 8.66395 53.244 10.0917C56.964 11.5194 61.26 10.3067 64.296 7.34749C67.8588 9.70752 70.9768 12.5969 73.524 15.8989C70.332 18.7172 69.024 22.7 70.564 26.1487C72.104 29.5975 76.068 31.5518 80.472 31.4517C81.1904 35.4564 81.1904 39.5435 80.472 43.5482C76.064 43.4481 72.104 45.4061 70.564 48.8512C69.024 52.2999 70.332 56.2827 73.524 59.0973C70.9783 62.4003 67.8617 65.2909 64.3 67.6524C61.26 64.6932 56.964 63.4805 53.244 64.9082C49.524 66.336 47.416 70.0109 47.524 74.0938C43.2043 74.7598 38.7957 74.7598 34.476 74.0938C34.584 70.0072 32.472 66.336 28.756 64.9082C25.036 63.4805 20.74 64.6932 17.704 67.6524C14.1411 65.2924 11.0232 62.403 8.47599 59.101C11.668 56.2827 12.976 52.2999 11.436 48.8512C9.89599 45.4024 5.93199 43.4481 1.52799 43.5482V43.5445ZM41 48.6249C44.1826 48.6249 47.2348 47.4529 49.4853 45.3665C51.7357 43.2802 53 40.4505 53 37.4999C53 34.5494 51.7357 31.7197 49.4853 29.6334C47.2348 27.547 44.1826 26.3749 41 26.3749C37.8174 26.3749 34.7651 27.547 32.5147 29.6334C30.2643 31.7197 29 34.5494 29 37.4999C29 40.4505 30.2643 43.2802 32.5147 45.3665C34.7651 47.4529 37.8174 48.6249 41 48.6249Z" fill="white" />
                            </svg>

                        </div>
                        <NavLink to='/admin/mechanics' className='dashdivbtn w-[100%] flex pl-10 rounded-br-xl rounded-bl-xl'>More Info
                            <svg className='mt-[7px] ml-1' width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 9V6L14 10L10 14V11H6V9H10ZM10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18Z" fill="white" />
                            </svg>


                        </NavLink>
                    </div>
                    <div className='dashdiv w-[10em] rounded-xl text-white  '>
                        <div className='flex justify-around'>
                            <p className=' text-3xl font-black text-center'>{guards.length}<br></br> <span className=' font-normal text-sm italic pl-1 '>guards</span> </p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="90" height="70">
                                <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                            </svg>


                        </div>
                        <NavLink to='/admin/guards' className='dashdivbtn w-[100%] flex pl-10 rounded-br-xl rounded-bl-xl'>More Info
                            <svg className='mt-[7px] ml-1' width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 9V6L14 10L10 14V11H6V9H10ZM10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18Z" fill="white" />
                            </svg>


                        </NavLink>
                    </div>


                </section>
                <section className=' h-[55vh] pt-2 grid grid-cols-3 mb-4 gap-2'>
                    <div className='dashdiv h-[52vh] col-span-2   rounded-lg ml-2'>
                        <div className='bg-black h-4 rounded-tr-lg rounded-tl-lg '></div>
                        <div className='flex pt-1  pl-2   '>
                            <svg width="20" height="20" viewBox="0 0 82 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.52799 43.5445C0.810495 39.5423 0.810495 35.4576 1.52799 31.4554C5.93599 31.5518 9.89599 29.5938 11.436 26.1487C12.976 22.7 11.668 18.7172 8.47599 15.9026C11.0216 12.5996 14.1382 9.70895 17.7 7.34749C20.74 10.3067 25.036 11.5194 28.756 10.0917C32.476 8.66395 34.584 4.98899 34.476 0.906116C38.7957 0.240116 43.2043 0.240116 47.524 0.906116C47.416 4.9927 49.528 8.66395 53.244 10.0917C56.964 11.5194 61.26 10.3067 64.296 7.34749C67.8588 9.70752 70.9768 12.5969 73.524 15.8989C70.332 18.7172 69.024 22.7 70.564 26.1487C72.104 29.5975 76.068 31.5518 80.472 31.4517C81.1904 35.4564 81.1904 39.5435 80.472 43.5482C76.064 43.4481 72.104 45.4061 70.564 48.8512C69.024 52.2999 70.332 56.2827 73.524 59.0973C70.9783 62.4003 67.8617 65.2909 64.3 67.6524C61.26 64.6932 56.964 63.4805 53.244 64.9082C49.524 66.336 47.416 70.0109 47.524 74.0938C43.2043 74.7598 38.7957 74.7598 34.476 74.0938C34.584 70.0072 32.472 66.336 28.756 64.9082C25.036 63.4805 20.74 64.6932 17.704 67.6524C14.1411 65.2924 11.0232 62.403 8.47599 59.101C11.668 56.2827 12.976 52.2999 11.436 48.8512C9.89599 45.4024 5.93199 43.4481 1.52799 43.5482V43.5445ZM41 48.6249C44.1826 48.6249 47.2348 47.4529 49.4853 45.3665C51.7357 43.2802 53 40.4505 53 37.4999C53 34.5494 51.7357 31.7197 49.4853 29.6334C47.2348 27.547 44.1826 26.3749 41 26.3749C37.8174 26.3749 34.7651 27.547 32.5147 29.6334C30.2643 31.7197 29 34.5494 29 37.4999C29 40.4505 30.2643 43.2802 32.5147 45.3665C34.7651 47.4529 37.8174 48.6249 41 48.6249Z" fill="white" />
                            </svg>
                            <h1 className='pl-1 font-bold text-white'>Car repair report</h1>
                        </div>
                    </div>
                    <div className=' h-[52vh]'>
                        <div className=' dashdiv  ml-2  mr-2 rounded-lg  text-white h-[24vh]'>
                            <div className='bg-black h-2 rounded-tr-lg rounded-tl-lg mt-2 '></div>
                            <div className='flex pt-1  pl-2   '>
                                <svg className='' width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.33003 0.271017C2.99706 0.0330009 3.72061 0.00294581 4.40509 0.184822C5.08957 0.366698 5.70277 0.751947 6.16368 1.28967C6.62459 1.8274 6.91152 2.49231 6.98657 3.19655C7.06162 3.90079 6.92126 4.61123 6.58403 5.23402L17.293 15.944L15.879 17.358L5.16903 6.64802C4.5461 6.98392 3.83602 7.12321 3.13236 7.04752C2.4287 6.97183 1.76448 6.68472 1.22724 6.22403C0.689997 5.76333 0.304944 5.15067 0.122823 4.46679C-0.0592985 3.7829 -0.0299406 3.05989 0.207027 2.39302L2.44403 4.63002C2.5824 4.77328 2.74791 4.88756 2.93092 4.96617C3.11393 5.04478 3.31076 5.08616 3.50993 5.08789C3.70909 5.08962 3.90661 5.05167 4.09096 4.97625C4.2753 4.90083 4.44278 4.78945 4.58362 4.64861C4.72446 4.50777 4.83584 4.34029 4.91126 4.15595C4.98668 3.9716 5.02463 3.77408 5.0229 3.57492C5.02117 3.37575 4.97979 3.17892 4.90118 2.99591C4.82257 2.8129 4.70829 2.64739 4.56503 2.50902L2.32903 0.270017L2.33003 0.271017ZM12.697 2.15502L15.879 0.387017L17.293 1.80102L15.525 4.98302L13.757 5.33702L11.637 7.45802L10.222 6.04402L12.343 3.92302L12.697 2.15502ZM5.97903 10.287L7.39303 11.701L2.09003 17.004C1.90973 17.1848 1.66709 17.2898 1.41186 17.2975C1.15663 17.3051 0.908141 17.2148 0.717343 17.0451C0.526545 16.8754 0.407891 16.6392 0.385706 16.3848C0.363521 16.1304 0.439486 15.8772 0.598027 15.677L0.676028 15.59L5.97903 10.287Z" fill="white" />
                                </svg>
                                <h1 className='pl-1'>Parts sold report</h1>
                            </div>
                        </div>
                        <div className=' rounded-lg dashdiv text-white h-[24vh] mt-2 mr-2 ml-2'>
                            <div className='bg-black h-2 rounded-tr-lg rounded-tl-lg '></div>
                            <div className='flex pt-1  pl-2   '>
                                <svg className='' width="20" height="20" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2 17L16 18.5V19H2V18.5L3.8 17H2C1.46957 17 0.960859 16.7893 0.585786 16.4142C0.210714 16.0391 0 15.5304 0 15V4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H14C15.0609 0 16.0783 0.421427 16.8284 1.17157C17.5786 1.92172 18 2.93913 18 4V15C18 15.5304 17.7893 16.0391 17.4142 16.4142C17.0391 16.7893 16.5304 17 16 17H14.2ZM8 9V2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V9H8ZM10 9H16V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10V9ZM4.5 15C4.89782 15 5.27936 14.842 5.56066 14.5607C5.84196 14.2794 6 13.8978 6 13.5C6 13.1022 5.84196 12.7206 5.56066 12.4393C5.27936 12.158 4.89782 12 4.5 12C4.10218 12 3.72064 12.158 3.43934 12.4393C3.15804 12.7206 3 13.1022 3 13.5C3 13.8978 3.15804 14.2794 3.43934 14.5607C3.72064 14.842 4.10218 15 4.5 15ZM13.5 15C13.8978 15 14.2794 14.842 14.5607 14.5607C14.842 14.2794 15 13.8978 15 13.5C15 13.1022 14.842 12.7206 14.5607 12.4393C14.2794 12.158 13.8978 12 13.5 12C13.1022 12 12.7206 12.158 12.4393 12.4393C12.158 12.7206 12 13.1022 12 13.5C12 13.8978 12.158 14.2794 12.4393 14.5607C12.7206 14.842 13.1022 15 13.5 15Z" fill="white" />
                                </svg>
                                <h1 className='pl-1'>Clients report</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='adminnavuser h-[5vh]'>
                    <p className='text-white pl-4'>@copyright PBMW 2022</p>
                </section>
            </div>
            <Outlet />
        </main>
    )
}

export default AdminDashboard