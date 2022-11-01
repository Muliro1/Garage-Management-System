import React,{useState} from 'react'
import {AiFillCar} from "react-icons/ai"
import {FaCoins,FaFileAlt} from "react-icons/fa"
import Update from '../Update/Update'
import "./postService.css"

const CarItem = ({repCar,onDelete,onUpdateService}) => {
    const {id,make,plate_number,vehicle_type,billing,approved, image, price,summary}= repCar;
    const [isEditing, setIsEditing] = useState(false);

  

    function serviceUpdate(updatedSevice) {
      setIsEditing(false);
      onUpdateService(updatedSevice);
    }


  return (
    <>
    {isEditing?(<Update
    id={id}
    summary={summary}
    onUpdateService={serviceUpdate}
    />):(
    <div className="servicePost">
    <div className="car__img">
    <img src={image} alt={make}/>
    </div>

    <div className="car__item-content">
      <h4 className="section__title">{make}</h4>
      <h6 className="rent__price">
        ${price}.00 <span>/ VAT</span>
      </h6>
      <h6 className="p_summary">
        {summary}
      </h6>

      <div className="car__item-info">
        <span>
          <AiFillCar/> {vehicle_type}
        </span>
        <span>
          <FaFileAlt/> {plate_number}
        </span>
        <span>
          <FaCoins/> ${billing}.00
        </span>
      </div>
        <div className='car__btn-action'>
        <button className="car__btn-rent" onClick={() => setIsEditing((isEditing) => !isEditing)}>
        Update
      </button>
     
        </div>
    </div>
  </div>
  )}
</>
  )
}
export default CarItem