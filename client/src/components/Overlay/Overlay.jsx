import React from 'react'
import BookingForm from '../UI/BookForm/BookingForm'
import Payment from "../UI/Payments/Payment"
import Footer from "../Footer/Footer"
import{AiFillCloseCircle,AiFillStar,AiFillCar,AiFillSetting} from "react-icons/ai"
import {GiCarSeat} from "react-icons/gi"
import {IoLogoModelS} from "react-icons/io"
import {MdLocalGasStation} from "react-icons/md"
import {RiTimerFlashFill} from "react-icons/ri"
import "./overlay.css"

const Overlay = ({ show, car, onClose}) => {
    if (!show) {
        return null;
      }
      let thumbnail = car.image;
      return (
        <>
          <div className="overlay">
            <div className="overlay-inner">
            <button className="close" onClick={onClose}><AiFillCloseCircle/></button>
              <div className="inner-box">
                <img src={thumbnail} alt={car.name} />
                <div className="informations">
                  <h2 className='title__car'>{car.name}</h2>
                  <div className="price__tag">
                  <h6 className="rent__price">
                    ${car.price}.00 / VAT
                  </h6>

                  <span className="rating">
                    <span  className="rating" style={{ color: "#f9a826" }}>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                    </span>
                    ({car.rating} ratings)
                  </span>
                </div>
                <p className="section__description">
                  {car.description}
                </p>
                <div
                  className="icon-description"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="section__description">
                  <AiFillCar/>
                    {car.model}
                  </span>

                  <span className="section__description">
                  <AiFillSetting/>
                    {car.automatic}
                  </span>

                  <span className="section__description">
                  <RiTimerFlashFill/> 
                    {car.speed}
                  </span>
                </div>

                <div
                  className="icon-description"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="section__description">
                  <GiCarSeat/>
                    {car.model}
                  </span>

                  <span className="section__description">
                  <IoLogoModelS/>
                    {car.automatic}
                  </span>

                  <span className="section__description">
                  <MdLocalGasStation/> 
                    {car.speed}
                  </span>
                </div>
                </div>
              </div>
            <div className='pay__booking'>
            {/* <div className="booking-info ">
                <h3 >Booking Information</h3>
                <BookingForm />
              </div> */}
              <div className="booking-info ">
                <h3 >Payment Information</h3>
                <Payment />
              </div>

            </div>
              <div className="booking-info ">
                <Footer />
              </div>
            </div>
          </div>
        </>
      );
    };

export default Overlay