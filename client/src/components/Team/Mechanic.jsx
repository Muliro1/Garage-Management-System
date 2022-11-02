import React,{useState} from 'react'
import Modal from "../Modal/Modal"
import {AiFillMail} from "react-icons/ai"
import {FiPhoneCall} from "react-icons/fi"
import './mechanic.css'

const Mechanic= ({tech}) => {
    const {name, image,telephone,email,price}= tech;
    const [show, setShow] = useState(false);
    const [item, setItem] = useState();
  return (
    <>
    <div className="car__item w-8/12">
    <div className="pl-[4.5em]">
    <img className='h-40 w-40 rounded-full '  src={image ? image : "https://via.placeholder.com/400"} alt={name}/>
    </div>

    <div className="car__item-content">
      <h4 className="section__title">{name}</h4>
      <h6 className="rent__price">
        ${price}.00 <span>/ day</span>
      </h6>

      <div className="car__item-info ">
        <span className=''>
          <AiFillMail/> {email}
        </span>
        <span>
          <FiPhoneCall/> {telephone}
        </span>
      </div>
      <div className='car__btn-action'>
        <button className="car__btn-rent">
        contact
      </button>
      <button className="car__btn-details"
        onClick={() => {
            setShow(true);
             setItem(tech);
         }}
      >
        Details
      </button>
        </div>
    </div>
  </div>
        <Modal show={show} tech={item} onClose={() => setShow(false)} />
        </>
  )
}

export default Mechanic;
