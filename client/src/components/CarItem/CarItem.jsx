import React,{useState} from 'react'
import {AiFillCar, AiFillSetting} from "react-icons/ai"
import {RiTimerFlashFill} from "react-icons/ri"
import Overlay from '../Overlay/Overlay';
import "./caritem.css"

const CarItem = ({car}) => {
    const {name, image, speed, price,model,automatic}= car;
    const [show, setShow] = useState(false);
    const [item, setItem] = useState();
  return (
    <>
    <div className="car__item">
    <div className="car__img">
    <img src={image ? image : "https://via.placeholder.com/400"} alt={name}/>
    </div>

    <div className="car__item-content">
      <h4 className="section__title">{name}</h4>
      <h6 className="rent__price">
        ${price}.00 <span>/ VAT</span>
      </h6>

      <div className="car__item-info">
        <span>
          <AiFillCar/> {model}
        </span>
        <span>
          <AiFillSetting/> {automatic}
        </span>
        <span>
          <RiTimerFlashFill/> {speed}
        </span>
      </div>
        <div className='car__btn-action'>
        <button className="car__btn-rent">
        Buy Now
      </button>
      <button className="car__btn-details"
        onClick={() => {
            setShow(true);
             setItem(car);
         }}
      >
        Details
      </button>
        </div>
    </div>
  </div>
  <Overlay show={show} car={item} onClose={() => setShow(false)} />
</>
  )
}
export default CarItem