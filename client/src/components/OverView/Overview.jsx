import React from 'react'
import "./overview.css"
import Footer from "../Footer/Footer"
import BookingForm from '../UI/BookForm/BookingForm'
import{AiFillCloseCircle,AiFillStar,AiFillCar,AiFillSetting} from "react-icons/ai"
import {GiCarSeat} from "react-icons/gi"
import {IoLogoModelS} from "react-icons/io"
import {MdLocalGasStation} from "react-icons/md"
import {RiTimerFlashFill} from "react-icons/ri"


const Overview = ({ show, part, onClose,}) => {
    if (!show) {
        return null;
      }
      let thumbnail = part.image;
      return (
        <>
          <div className="overview">
            <div className="overview-inner">
            <button className="close" onClick={onClose}><AiFillCloseCircle/></button>
              <div className="inner-box">
                <img src={thumbnail} alt={part.name} />
                <div className="info">
                  <h2 className='title__car'>{part.name}</h2>
                  <div className="price__tag">
                  <h6 className="rent__price">
                    ${part.price}.00 / VAT
                  </h6>

                  <span className="rating">
                    <span  className="rating" style={{ color: "#f9a826" }}>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                    </span>
                    ({part.rating} ratings)
                  </span>
                </div>
                <p className="section__description">
                  {part.description}
                </p>
                <div
                  className="icon-description"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="section__description">
                  <AiFillCar/>
                    {part.model}
                  </span>

                  <span className="section__description">
                  <AiFillSetting/>
                    {part.automatic}
                  </span>

                  <span className="section__description">
                  <RiTimerFlashFill/> 
                    {part.speed}
                  </span>
                </div>

                <div
                  className="icon-description"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="section__description">
                  <GiCarSeat/>
                    {part.model}
                  </span>

                  <span className="section__description">
                  <IoLogoModelS/>
                    {part.automatic}
                  </span>

                  <span className="section__description">
                  <MdLocalGasStation/> 
                    {part.speed}
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

export default Overview