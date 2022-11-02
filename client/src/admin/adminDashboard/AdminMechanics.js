import React, { useEffect, useState } from 'react';
import AdminMechanic from './AdminMechanic';


function AdminMechanics() {
    const [mechanics, setMechanics] = useState([])
    const [addMechanic, setAddMechanic] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [rating, setRating] = useState('')
    const [telephone, setTelephone] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [refresh,setRefresh] = useState(false)
    const newMechanic = {
        name: name,
        email: email,
        description:'',
        telephone: telephone,
        rating: rating,
        password: password,
        password_confirmation:passwordConfirmation
        
    }

    // fetching all technicians
    useEffect(() => {
        fetch('http://127.0.0.1:3000/technicians')
            .then((r) => r.json())
            .then((data) => setMechanics(data))


    }, [refresh])

    // search functionality
    const getFilteredMechanics = () => {
        if (!searchValue) return mechanics
        return mechanics.filter(
            mechanic => mechanic.name.toLowerCase().includes(searchValue.toLowerCase())
        )
    }

    const filteredMechanics = getFilteredMechanics()

    // sorting functionality
    function handleAscSort() {
        const strAscending = [...mechanics].sort((a, b) =>
            a.name > b.name ? 1 : -1,
        );
        setMechanics(strAscending)
    }

    function handleDescSort() {
        const strDescending = [...mechanics].sort((a, b) =>
            a.name > b.name ? -1 : 1,
        );
        setMechanics(strDescending)
    }

    // Registering a mechanic
    function handleNewMechanic(e) {
        e.preventDefault()
        fetch('http://127.0.0.1:3000/technicians', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(newMechanic)
        })
            .then(() => setRefresh(!refresh))
        setAddMechanic(false)
        setName('')
        setEmail('')
        setRating('')
        setTelephone('')
        e.target.reset()
    }



    return (
        <main className=''>
            <div className=' adminnavuser text-white h-[8vh]'>
            </div>
            <div className='flex mt-2'>
                <svg className='ml-8' width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM15.363 14.233C16.8926 14.6261 18.2593 15.4918 19.2683 16.7068C20.2774 17.9218 20.8774 19.4242 20.983 21H18C18 18.39 17 16.014 15.363 14.233ZM13.34 11.957C14.178 11.2075 14.8482 10.2893 15.3066 9.26275C15.765 8.23616 16.0013 7.12429 16 6C16.0021 4.63347 15.6526 3.28937 14.985 2.097C16.1176 2.32459 17.1365 2.93737 17.8685 3.8312C18.6004 4.72502 19.0002 5.84473 19 7C19.0003 7.71247 18.8482 8.41676 18.5541 9.06567C18.26 9.71459 17.8305 10.2931 17.2946 10.7625C16.7586 11.2319 16.1285 11.5814 15.4464 11.7874C14.7644 11.9934 14.0462 12.0512 13.34 11.957Z" fill="black" />
                </svg>


                <h1 className='pl-4 font-black tracking-wider'>Mechanics</h1>
            </div>
            <section className='bg-slate-300  pb-6 m-auto ml-8 mr-4 pt-2 '>
                <div className='flex ml-2 '>
                    <svg className='ml-2 mt-2' width="22" height="22" viewBox="0 0 71 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.31999 1.12997C11.8162 0.304398 14.5139 0.152658 17.0994 0.692392C19.685 1.23213 22.0521 2.44116 23.9258 4.17893C25.7994 5.9167 27.1024 8.11182 27.6835 10.5091C28.2645 12.9063 28.0996 15.4072 27.208 17.7211L70.588 57.9379L62.1 65.8033L18.72 25.5901C16.2238 26.4157 13.5261 26.5674 10.9406 26.0277C8.35502 25.488 5.98784 24.2789 4.11422 22.5412C2.24061 20.8034 0.937545 18.6083 0.356517 16.211C-0.224511 13.8138 -0.0596312 11.3129 0.831989 8.99905L9.77599 17.2946C10.3295 17.8259 10.9915 18.2496 11.7236 18.5412C12.4556 18.8327 13.2429 18.9861 14.0396 18.9926C14.8363 18.999 15.6263 18.8582 16.3637 18.5785C17.1011 18.2989 17.771 17.8858 18.3344 17.3635C18.8977 16.8413 19.3432 16.2202 19.6449 15.5366C19.9466 14.853 20.0984 14.1205 20.0915 13.3819C20.0846 12.6433 19.9191 11.9134 19.6046 11.2348C19.2901 10.5561 18.8331 9.94234 18.26 9.42922L9.31599 1.12626L9.31999 1.12997ZM50.788 8.11647L63.516 1.56014L69.172 6.80372L62.1 18.6036L55.028 19.9164L46.548 27.7818L40.888 22.5382L49.372 14.6728L50.788 8.11647V8.11647ZM22.504 36.9599L30.988 44.829L11.188 63.1852C10.0961 64.188 8.63086 64.7641 7.09431 64.7947C5.55777 64.8253 4.06713 64.3082 2.9298 63.3498C1.79247 62.3915 1.09518 61.0651 0.981714 59.6441C0.868251 58.2232 1.34727 56.8161 2.31999 55.7129L2.70799 55.3161L22.508 36.9599H22.504Z" fill="white" />
                    </svg>

                    <p onClick={() => setAddMechanic(!addMechanic)} className='pl-1 mt-2 font-bold text-white hover:text-orange-500 cursor-pointer'>Add a mechanic</p>
                </div>
                <div className={addMechanic ? 'adminmechanictrue' : 'adminmechanicfalse'}>
                    <svg onClick={() => setAddMechanic(!addMechanic)} className='float-right mr-2 mt-2 hover:bg-orange-500' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 4H20V6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6H0V4H5V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4ZM7 9V15H9V9H7ZM11 9V15H13V9H11ZM7 2V4H13V2H7Z" fill="white" />
                    </svg>

                    <form className='text-center' onSubmit={handleNewMechanic}>
                        <p className='text-white pb-2 font-black text-lg pl-6'>Add Mechanic</p>
                        <label className='text-white' htmlFor='first-name' >Full Name</label><br></br>
                        <input onChange={(e) => setName(e.target.value)} type='text' className='mt-2 mb-2 text-center' placeholder='enter name ...' required /><br></br>

                        <label className='text-white' htmlFor='email'>Email</label><br></br>
                        <input onChange={(e) => setEmail(e.target.value)} type='email' className='mt-2 mb-2 text-center' placeholder='enter email ...' required /><br></br>

                        <label className='text-white  ' htmlFor='first-name'>rating(between 1 and 10)</label><br></br>
                        <input onChange={(e) => setRating(e.target.value)} type='number' min='1' max='10' className='mt-2 mb-2 text-center' placeholder='enter rating ...' required /><br></br>

                        <label className='text-white  ' htmlFor='first-name'>Telephone</label><br></br>
                        <input onChange={(e) => setTelephone(e.target.value)} type='number' className='mt-2 mb-2 text-center' placeholder='enter phone number ...' required /><br></br>

                        <label className='text-white  ' htmlFor='first-name'>Password</label><br></br>
                        <input onChange={(e) => setPassword(e.target.value)} type='password' className='mt-2 mb-2 text-center' placeholder='enter password ...' required /><br></br>

                        <label className='text-white  ' htmlFor='first-name'>Confrim Password</label><br></br>
                        <input onChange={(e) => setPasswordConfirmation(e.target.value)} type='password' className='mt-2 mb-2 text-center' placeholder='confirm password...' required /><br></br>


                        <input type='submit' value='Register' className='bg-slate-100 font-black mt-2 p-1 rounded-md' />

                    </form>
                </div>


                <div className='ml-4  flex justify-end  '>
                    <div>
                        <label>Search Mechanic </label>
                        <input onChange={(e) => setSearchValue(e.target.value)} className='rounded-3xl text-center w-7/12' type='search' placeholder='search mechanic....' />
                    </div>
                </div>
                <div className=' flex  '>
                    <span className='ml-4 pl-1 flex bg-white'>Name
                        <svg onClick={() => handleDescSort()} className='mt-2 ml-1 bg-slate-400 m-1 cursor-pointer ' width="10" height="10" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99999 2.828L2.04999 7.778L0.635986 6.364L6.99999 0L13.364 6.364L11.95 7.778L6.99999 2.828Z" fill="black" />
                        </svg>
                        <svg onClick={() => handleAscSort()} className='mt-2 ml-1 bg-slate-400 m-1 cursor-pointer ' width="10" height="10" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99999 5.17198L11.95 0.221985L13.364 1.63598L6.99999 7.99998L0.635986 1.63598L2.04999 0.221985L6.99999 5.17198Z" fill="black" />
                        </svg>

                    </span>
                </div>
                
                <section className='bg-slate-200 m-auto h-[60vh] mt-2 w-11/12  pb-2 overflow-hidden hover:overflow-y-scroll rounded-md '>
                    <div className=' m-2  grid grid-cols-3 gap-4 '>
                    {filteredMechanics.map((mechanic) => {
                        return (
                            <AdminMechanic key={mechanic.id} mechanic={mechanic} refresh={refresh} setRefresh={setRefresh} />
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

export default AdminMechanics