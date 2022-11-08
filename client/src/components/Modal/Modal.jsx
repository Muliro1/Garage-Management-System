import React from "react";
import Footer from "../Footer/Footer"
import{AiFillCloseCircle,AiFillStar,AiOutlineMail} from "react-icons/ai"
import {FiPhoneCall} from "react-icons/fi"
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
            <img src={thumbnail? thumbnail : "https://via.placeholder.com/400"} alt={tech.name} />
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
                  <AiOutlineMail/>
                    {tech.email}
                  </span>

                  <span className="section__description">
                  <FiPhoneCall/> 
                    {tech.telephone}
                  </span>
                </div>

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

export default Modal;
