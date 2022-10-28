import React,{useState} from 'react'
import {AiFillCar, AiFillSetting} from "react-icons/ai"
import {IoLogoModelS} from "react-icons/io"
import Update from '../Update/Update'
import "./postService.css"

const CarItem = ({repCar,onDelete,onUpdateService}) => {
    const {id,make,plate,vehicle, image, price,summary}= repCar;
    const [isEditing, setIsEditing] = useState(false);

    function deleteService() {
      fetch(`http://localhost:4000/posts/${repCar.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then(() => onDelete(repCar));
    }

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
    <img src={image} alt={vehicle}/>
    </div>

    <div className="car__item-content">
      <h4 className="section__title">{vehicle}</h4>
      <h6 className="rent__price">
        ${price}.00 <span>/ VAT</span>
      </h6>
      <h6 className="p_summary">
        {summary}
      </h6>

      <div className="car__item-info">
        <span>
          <AiFillCar/> {vehicle}
        </span>
        <span>
          <AiFillSetting/> {plate}
        </span>
        <span>
          <IoLogoModelS/> {make}
        </span>
      </div>
        <div className='car__btn-action'>
        <button className="car__btn-rent" onClick={() => setIsEditing((isEditing) => !isEditing)}>
        Update
      </button>
      <button className="car__btn-details" onClick={deleteService}>
        Delete
      </button>
        </div>
    </div>
  </div>
  )}
</>
  )
}
export default CarItem