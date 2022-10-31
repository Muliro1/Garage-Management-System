import React from 'react';
import { json } from 'react-router-dom';

const ImageCard = ({ vehicle }) => {
  const Serviceprice=3500
  const ServiceCar=()=>{
    fetch(`/vehicle/${vehicle.id}`,{
      method:"PATCH",
      headers:{"content-type":"application/json"},
    body:JSON.stringify({
      billing:Serviceprice
    })
    })
      

  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={vehicle.image} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {vehicle.name}
        </div>
        <ul>
          <li>
            <strong>Owner: </strong>
            {vehicle.name}
          </li>
          <li>
            <strong>Model: </strong>
            {vehicle.owner}
          </li>
          <li>
            <strong>No.plate: </strong>
            {vehicle.rating}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {vehicle.billing===0 && <button onClick={()=>ServiceCar}>ServiceCar</button>}
      </div>
    </div>
  )
}

export default ImageCard;