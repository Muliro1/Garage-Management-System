import React from 'react';

const ServicingCard = ({ vehicle,term,setTerm }) => {
  // const tags = image.tags.split(',');
  const Serviceprice=3500
  const ServiceCar=()=>{
    fetch(`http://127.0.0.1:3000/vehicles/${vehicle.id}`,{
      method:"PATCH",
      headers:{"content-type":"application/json"},
    body:JSON.stringify({
      billing:Serviceprice
    })
    })
    .then(()=>setTerm(!term))
      

  }

  return (
    <div className="max-w-sm round overflow-hidden shadow-lg">
      <img src={vehicle.image} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
         {vehicle.make}
        </div>
        <ul>
          <li>
            <strong>plate_number: </strong>
            {vehicle.plate_number}
          </li>
          <li>
            <strong>option: </strong>
            {vehicle.option}
          </li>
          <li>
            <strong>vehicle_type: </strong>
            {vehicle.vehicle_type}
          </li>
          <li>
            <strong>billing: </strong>
            {vehicle.billing}
          </li>

        </ul>
      </div>
      <div className="px-6 py-4">
        {vehicle.billing===0 && <button className='text-white font-bold bg-black p-1 rounded-md float-right mb-2 hover:text-orange-500' onClick={()=>ServiceCar()}>Service Car</button>}
      </div>
    </div>
  )
}

export default ServicingCard;