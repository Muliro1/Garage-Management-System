import React from 'react'
import "./overview.css"
import Footer from "../Footer/Footer"
import Payment from "../UI/Payments/Payment"
import{AiFillCloseCircle,AiFillStar,AiFillCar,AiFillSetting} from "react-icons/ai"
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
                    {part.serial_number}
                  </span>

                  <span className="section__description">
                  <RiTimerFlashFill/> 
                    {part.condition}
                  </span>
                </div>

                </div>
              </div>
              <div className='pay__booking'>
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

export default Overview