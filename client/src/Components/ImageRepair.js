import React from 'react';

const ImageRepair = ({ vehicle }) => {
  // const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-auto shadow-lg">
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
      <div className="px-6 py-4">
        {/* {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
        ))} */}
      </div>
    </div>
  )
}

export default ImageRepair;