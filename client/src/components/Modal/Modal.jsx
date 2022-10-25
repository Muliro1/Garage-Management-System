import React from "react";
import BookingForm from '../UI/BookForm/BookingForm'
import Footer from "../Footer/Footer"
import{AiFillCloseCircle,AiFillStar,AiFillCar,AiFillSetting} from "react-icons/ai"
import {GiCarSeat} from "react-icons/gi"
import {IoLogoModelS} from "react-icons/io"
import {MdLocalGasStation} from "react-icons/md"
import {RiTimerFlashFill} from "react-icons/ri"
import "./modal.css"

const Modal = ({ show, tech, onClose,}) => {
  if (!show) {
    return null;
  }
  let thumbnail = tech.image;
  return (
    <>
      <div className="modal">
        <div className="modal-inner">
        <button className="close" onClick={onClose}><AiFillCloseCircle/></button>
          <div className="inner-box">
            <img src={thumbnail} alt={tech.name} />
            <div className="informations">
                  <h2 className='title__car'>{tech.name}</h2>
                  <div className="price__tag">
                  <h6 className="rent__price">
                    ${tech.price}.00 / VAT
                  </h6>

                  <span className="rating">
                    <span  className="rating" style={{ color: "#f9a826" }}>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                    </span>
                    ({tech.rating} ratings)
                  </span>
                </div>
                <p className="section__description">
                  {tech.description}
                </p>
                <div
                  className="icon-description"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="section__description">
                  <AiFillCar/>
                    {tech.email}
                  </span>

                  <span className="section__description">
                  <AiFillSetting/>
                    {tech.speciality}
                  </span>

                  <span className="section__description">
                  <RiTimerFlashFill/> 
                    {tech.Telephone}
                  </span>
                </div>

                <div
                  className="icon-description"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="section__description">
                  <GiCarSeat/>
                    {tech.email}
                  </span>

                  <span className="section__description">
                  <IoLogoModelS/>
                    {tech.speciality}
                  </span>

                  <span className="section__description">
                  <MdLocalGasStation/> 
                    {tech.Telephone}
                  </span>
                </div>
                </div>
          </div>
          <div className="booking-info ">
                <h5 >Booking Information</h5>
                <BookingForm />
              </div>

              <div className="booking-info ">
                <Footer />
              </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
