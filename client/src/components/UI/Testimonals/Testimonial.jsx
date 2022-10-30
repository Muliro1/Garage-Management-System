import React from "react";
import "./testimonial.css";

import ava01 from "../../assets/images/testimonals/ava-1.jpg";
import ava02 from "../../assets/images/testimonals/ava-2.jpg";
import ava03 from "../../assets/images/testimonals/ava-3.jpg";
import ava04 from "../../assets/images/testimonals/ava-4.jpg";

const Testimonial = () => {
  return (
    <div className="test__container">
      <div className="testimonial">
        <p className="section_description">
         Amazing services, with some of the best technicians.
         Got my car up and running in no time.
        </p>

        <div className="image-desc">
          <img src={ava01} alt="" />

          <div>
            <h3>Martin Garry</h3>
            <h4>Customer</h4>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p className="section_description">
        Amazing services, with some of the best technicians.
         Got my car up and running in no time.
        </p>

        <div className="image-desc">
          <img src={ava02} alt="" />

          <div>
            <h3>Monalisa Tessa</h3>
            <h4>Customer</h4>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p className="section_description">
        Amazing services, with some of the best technicians.
         Got my car up and running in no time.
        </p>

        <div className="image-desc">
          <img src={ava03} alt="" />

          <div>
            <h3>Mohammed Ali</h3>
            <h4>Customer</h4>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p className="section_description">
        Amazing services, with some of the best technicians.
         Got my car up and running in no time.
        </p>

        <div className="image-desc">
          <img src={ava04} alt="" />

          <div>
            <h3>Ciara Kara</h3>
            <h4>Customer</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
