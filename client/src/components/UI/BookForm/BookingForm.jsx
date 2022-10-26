import React from "react";
import "./bookingform.css";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
        <div className="booking__form">
        <input type="text" placeholder="First Name" />
        </div>
        <div className="booking__form ">
        <input type="text" placeholder="Last Name" />
        </div>
        <div className="booking__form ">
        <input type="email" placeholder="Email" />
        </div>
        <div className="booking__form ">
        <input type="number" placeholder="Phone Number" />
        </div>
        <div className="booking__form ">

        <input type="text" placeholder="From Address" />
        </div>
        <div className="booking__form ">
        <input type="text" placeholder="To Address" />
        </div>
        <div className="booking__form ">
        <input type="date" placeholder="Journey Date" />
        </div>
        <div className="booking__form ">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
        </div>
        <div className="booking__form ">
        <input  type="submit" className="submit__btn"/>
        </div>
     
    </form>
  );
};

export default BookingForm;
