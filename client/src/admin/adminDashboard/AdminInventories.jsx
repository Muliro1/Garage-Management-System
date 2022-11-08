import React, { useState } from 'react'
import { useEffect } from 'react'
import AdminInventory from './AdminInventory';

function AdminInventories() {
  const [parts, setParts] = useState([])
  const [addMechanic, setAddMechanic] = useState(false)
  const [partsRefresh, setPartsRefresh] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [image, setImage] = useState('')
  const [partName, setPartName] = useState('')
  const [model, setmodel] = useState('')
  const [serialNumber, setSerialNumber] = useState('')
  const [price ,setPrice] = useState('')
  const [condition, setCondition] = useState('')
  const [count, setCount] = useState('')
  console.log(parts);

  const newPart = {
    image,
    name: partName,
    model,
    serial_number:serialNumber,
    price,
    condition,
    count

  }

  // fetching all parts
  useEffect(() => {
    fetch('http://127.0.0.1:3000/parts')
      .then((r) => r.json())
      .then((data) => setParts(data))


  }, [partsRefresh])

  // search functionality
  const getFilteredParts = () => {
    if (!searchValue) return parts
    return parts.filter(
      part => part.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  }

  const filteredParts = getFilteredParts()

  // sorting functionality
  function handleAscSort() {
    const strAscending = [...parts].sort((a, b) =>
      a.name > b.name ? 1 : -1,
    );
    setParts(strAscending)
  }

  function handleDescSort() {
    const strDescending = [...parts].sort((a, b) =>
      a.name > b.name ? -1 : 1,
    );
    setParts(strDescending)
  }

  
  // Adding a new part to the inventory
  function handleNewPart(e) {
    e.preventDefault()
    fetch('http://127.0.0.1:3000/parts', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(newPart)
    })
      .then(() => setPartsRefresh(!partsRefresh))
    setAddMechanic(false)
    setPartName('')
    setImage('')
    setmodel('')
    setSerialNumber('')
    setPrice('')
    setCondition('')
    setCount('')
    e.target.reset()
  }

  return (
    <>
      <main className='bg-slate-200 h-[101vh]'>

        <div className=' adminnavuser text-white h-[8vh]'>
        </div>
        <div className='flex justify-end mr-2 '>
          <p className='pl-1  text-2xl font-serif font-bold float-right'>Inventories</p>
        </div>
        <div className='flex ml-2 '>
          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
            <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clip-rule="evenodd" />
            <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
            <path fill-rule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clip-rule="evenodd" />
          </svg>


          <p onClick={() => setAddMechanic(!addMechanic)} className='pl-1  font-bold t hover:text-orange-500 cursor-pointer'>Add new item to inventory</p>
        </div>
        <div className={addMechanic ? 'adminmechanictrue' : 'adminmechanicfalse'}>
          <svg onClick={() => setAddMechanic(!addMechanic)} className='float-right mr-2 mt-2 hover:bg-orange-500' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 4H20V6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6H0V4H5V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4ZM7 9V15H9V9H7ZM11 9V15H13V9H11ZM7 2V4H13V2H7Z" fill="white" />
          </svg>

          <form className='text-center' onSubmit={handleNewPart}>
            <p className='text-white pb-2 font-black text-lg pl-6'>Add new Part</p>
            <label className='text-white' htmlFor='first-name' >Part Image</label><br></br>
            <input onChange={(e) => setImage(e.target.value)} type='text' className='mt-2 mb-2 text-center' placeholder='enter image url ...' required /><br></br>

            <label className='text-white' htmlFor='first-name' >Part Name</label><br></br>
            <input onChange={(e) => setPartName(e.target.value)} type='text' className='mt-2 mb-2 text-center' placeholder='enter part name ...' required /><br></br>

            <label className='text-white' htmlFor='email'>Car Model</label><br></br>
            <input onChange={(e) => setmodel(e.target.value)} type='text' className='mt-2 mb-2 text-center' placeholder='enter model ...' required /><br></br>

            <label className='text-white  ' htmlFor='first-name'>Serial Number</label><br></br>
            <input onChange={(e) => setSerialNumber(e.target.value)} type='number' min='999' className='mt-2 mb-2 text-center' placeholder='enter serial number ...' required /><br></br>

            <label className='text-white  ' htmlFor='first-name'>Price (ksh)</label><br></br>
            <input onChange={(e) => setPrice(e.target.value)} type='number' className='mt-2 mb-2 text-center' placeholder='enter price ...' required /><br></br>

            <label className='text-white  ' htmlFor='first-name'>condition(New,Old or Used)</label><br></br>
            <input onChange={(e) => setCondition(e.target.value)} type='text' className='mt-2 mb-2 text-center' placeholder='enter condition ...' required /><br></br>

            <label className='text-white  ' htmlFor='first-name'>Item count(quantity of part)</label><br></br>
            <input onChange={(e) => setCount(e.target.value)} type='number' className='mt-2 mb-2 text-center' placeholder='enter item count...' required /><br></br>


            <input type='submit' value='Add Part' className='bg-slate-100 font-black mt-2 p-1 rounded-md' />

          </form>
        </div>
        
        <sect>
          
          <div className='pt-4 mb-4  flex justify-end  '>
            <div>
              <label>Search Car Part</label>
              <input onChange={(e) => setSearchValue(e.target.value)} className='rounded-3xl text-center w-7/12' type='search' placeholder='search part....' />
            </div>
          </div>
        </sect>
        <div>
          <div className='flex '>
            <span className=' flex bg-slate-300'>Sort by Name
              <svg onClick={() => handleDescSort()} className='mt-2 ml-1 bg-white m-1 cursor-pointer ' width="10" height="10" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99999 2.828L2.04999 7.778L0.635986 6.364L6.99999 0L13.364 6.364L11.95 7.778L6.99999 2.828Z" fill="black" />
              </svg>
              <svg onClick={() => handleAscSort()} className='mt-2 ml-1 bg-white m-1 cursor-pointer ' width="10" height="10" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99999 5.17198L11.95 0.221985L13.364 1.63598L6.99999 7.99998L0.635986 1.63598L2.04999 0.221985L6.99999 5.17198Z" fill="black" />
              </svg>

            </span>
          </div>
        <div className=' grid grid-cols-2 gap-2 h-[65vh] overflow-hidden  hover:overflow-y-scroll bg-white w-11/12 m-auto p-4'>
          {filteredParts.map((part) => (
            <AdminInventory part={part} partsRefresh={partsRefresh} setPartsRefresh={setPartsRefresh} />

          ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default AdminInventories