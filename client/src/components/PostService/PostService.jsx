import React from 'react'
import {AiFillCar, AiFillSetting} from "react-icons/ai"
import {RiTimerFlashFill} from "react-icons/ri"
import "./postService.css"

const CarItem = ({repCar}) => {
    const {title, cover_image, price,releaseDate, author,summary}= repCar;
  return (
    <>
    <div className="servicePost">
    <div className="car__img">
    <img src={cover_image} alt={title}/>
    </div>

    <div className="car__item-content">
      <h4 className="section__title">{title}</h4>
      <h6 className="rent__price">
        ${price}.00 <span>/ VAT</span>
      </h6>
      <h6 className="p_summary">
        {summary}
      </h6>

      <div className="car__item-info">
        <span>
          <AiFillCar/> {releaseDate}
        </span>
        <span>
          <AiFillSetting/> {author}
        </span>
        <span>
          <RiTimerFlashFill/> {title}
        </span>
      </div>
        <div className='car__btn-action'>
        <button className="car__btn-rent">
        Update
      </button>
      <button className="car__btn-details">
        Delete
      </button>
        </div>
    </div>
  </div>
</>
  )
}
export default CarItem