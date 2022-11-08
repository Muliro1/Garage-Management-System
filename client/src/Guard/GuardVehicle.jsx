import React from 'react';

function GuardVehicle({ vehicle, setRefresh, refresh }) {

  function clearVehicle() {
    fetch(`http://127.0.0.1:3000/vehicles/${vehicle.id}`, {
      method: 'PATCH',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        cleared: true
      })
    })
      .then(() => setRefresh(!refresh))

  }

  return (
    <>
      <div className="h-[43vh] text-center  font-serif border-solid max-w-sm bg-slate-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className='w-20 h-20 rounded-full m-auto' src={vehicle.image} alt={vehicle.make} />
        <p className='font-black'><span className='font-normal'>Vehicle Plate Number:</span> {vehicle.plate_number}</p>
        <p className='font-black'><span className='font-normal'>Total Bill:</span> {vehicle.billing} Ksh</p>
        <p className='font-black'><span className='font-normal'>Vehicle Make:</span> {vehicle.make}</p>
        <p className='font-black'><span className='font-normal'>Vehicle Owner:</span>{vehicle.user.username}</p>
        <p className={vehicle.approved ? 'font-bold text-green-500' : 'font-bold text-red-500'} >{vehicle.approved ? 'Approved' : "Not Approved"}</p>
        <p className={vehicle.cleared ? 'font-bold text-green-500' : 'font-bold text-red-500'} >{vehicle.cleared ? 'Cleared' : "Not Cleared"}</p>
        {vehicle.approved && !vehicle.cleared && <button onClick={() => clearVehicle()} className='p-1 mb-2 text-white bg-black mt-2 font-bold hover:bg-green-500 hover:text-white'>Clear Vehicle</button>}

      </div>
    </>
  )
}

export default GuardVehicle

