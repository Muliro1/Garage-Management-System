import React,{useState, useEffect} from 'react'
import Inventory from './Inventory'

function RepairInfo({ vehicle, term, setTerm, isOpen, setIsOpen }) {
    const [parts, setParts] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [repairPrice, setRepairPrice] = useState(1000)
    

    useEffect(() => {
        fetch('http://127.0.0.1:3000/parts')
            .then((r) => r.json())
        .then((data)=>setParts(data))
    }, [refresh])

 
    
    const RepairCar = () => {
        fetch(`http://127.0.0.1:3000/vehicles/${vehicle.id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                billing: repairPrice
            })
        })
            .then(() => {
                setTerm(!term)
                setIsOpen(!isOpen)
            })


    }


  return (
      <>
          <div className='font-serif '>
              <button className='bg-black m-4 p-1 text-white float-right' onClick={() => setIsOpen(!isOpen)}>Close</button>

              <h1 className='text-center font-black underline text-xl'>Vehicle Information</h1>
              <p className='font-lighter italic'>Clients Name:<span className='font-black'>{vehicle.user.username}</span></p>
              <p className='font-lighter italic'>Clients Email:<span className='font-black'>{vehicle.user.email}</span></p>
              <p className='font-lighter italic'>Repair Summary:<span className='font-black'>{vehicle.summary}</span></p>
              <p className='font-lighter italic'>Repair Bill:<span className='font-black'>{vehicle.billing} ksh</span></p>
              {vehicle.billing === 0 && <p className='font-lighter italic'>Current Amount reached:<span className='font-black'>{repairPrice} ksh</span></p>}
              {vehicle.billing === 0 &&
                  <>
              <h1 className='text-center font-black underline text-xl'>Inventory</h1>
              <div className='h-60 overflow-y-scroll'>
              {parts.length > 0 && parts.map((part) => (
                  <Inventory key={part.id} part={part} setRepairPrice={setRepairPrice} repairPrice={repairPrice} refresh={refresh} setRefresh={setRefresh} />
              ))}
                  
              </div>
                 </> 
              }
                <div className="px-6 py-4">
          {vehicle.billing === 0 && <button className='text-white font-bold bg-black p-1 rounded-md float-right mb-2 hover:text-orange-500' onClick={()=>RepairCar()}>RepairCar</button>}
      </div>

          </div>
      </>
  )
}

export default RepairInfo