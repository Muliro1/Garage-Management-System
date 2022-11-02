import React from 'react';
import { json } from 'react-router-dom';

const ImageCard = ({ vehicle }) => {
  

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={vehicle.image} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          make {vehicle.make}
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
      
    </div>
  )
}

export default ImageCard;