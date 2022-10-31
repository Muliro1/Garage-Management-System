import React from 'react';

const ServicingCard = ({ vehicle }) => {
  // const tags = image.tags.split(',');

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
            {vehicle.email}
          </li>
          <li>
            <strong>Model: </strong>
            {vehicle.speciality}
          </li>
          <li>
            <strong>NO.plate: </strong>
            {vehicle.rating}
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

export default ServicingCard;