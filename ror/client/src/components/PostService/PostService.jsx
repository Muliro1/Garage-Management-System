import React,{useState} from 'react'
import {AiFillCar} from "react-icons/ai"
import {FaCoins,FaFileAlt} from "react-icons/fa"
import Update from '../Update/Update'
import "./postService.css"

const CarItem = ({repCar,onDelete,onUpdateService}) => {
    const {id,make,plate_number,vehicle_type,billing,approved,cleared, image, option,summary}= repCar;
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
    <div className="servicePost ">
    <div className="car__img">
              <img className='w-[300px]' src={image } alt={make}/>
    </div>

    <div className="car__item-content">
      <h4 className="section__title">{make}</h4>
              <h6 className="p_summary">
               <span className='font-light'>Work to be done:</span> {option}
              </h6>
      <h6 className="p_summary">
                <span className='font-light'>Work summary:</span><br></br>{summary}
      </h6>

      <div className="car__item-info pt-4">
        <span>
          <AiFillCar/> {vehicle_type}
        </span>
        <span>
          <FaFileAlt/> {plate_number}
        </span>
        <span>
          <FaCoins/> Ksh {billing}.00
        </span>
              </div>
              <div className='grid grid-cols-2'>
                <h1 className={approved ?'font-bold text-white bg-green-500  mb-2 w-10/12':'font-bold text-black bg-red-500 mb-2 w-10/12'}>{approved ? 'Approved' : "Not Approved"}</h1>
                <h1 className={cleared ? 'font-bold text-white bg-green-500  mb-2 w-10/12' : 'font-bold text-black bg-red-500 mb-2 w-10/12'}>{cleared ? 'Cleared' : "Not Cleared"}</h1>
              </div>
    </div>
  </div>
  )}
</>
  )
}
export default CarItem