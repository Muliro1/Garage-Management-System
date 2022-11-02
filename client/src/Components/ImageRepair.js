import React from 'react';

const ImageRepair = ({ vehicle,term,setTerm }) => {
  // const tags = image.tags.split(',');
  const Repairprice=5000
  const RepairCar=()=>{
    fetch(`http://127.0.0.1:3000/vehicles/${vehicle.id}`,{
      method:"PATCH",
      headers:{"content-type":"application/json"},
    body:JSON.stringify({
      billing:Repairprice
    })
    })
    .then(()=>setTerm(!term))
      

  }

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
      <div className="px-6 py-4">
        {vehicle.billing===0 && <button onClick={()=>RepairCar()}>RepairCar</button>}
      </div>
      </div>
    </div>
  )
}

export default ImageRepair;