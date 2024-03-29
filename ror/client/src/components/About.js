import React from "react";
import NavBar from './NavBar';

const About = () => {
  return (
    <>
      <NavBar/>
      <section className='about'>
        <div className="about-body">
          <div className="container">
            <h2 className="center-align">ABOUT US</h2>
            <div className="about-content">
              <p>
                PBMW is a privately owned and operated startup company that has been servicing the automotive industry for a little over 3 years. We are a team of highly skilled and experienced technicians who are passionate about vehicles and the automotive industry. We are committed to providing the best automotive servicing experience to our customers by providing the best quality parts and services at the most competitive prices.
                <br></br>
                Our headquarter is located in the heart of the trucking industry in Westlands, Nairobi. We have a fleet of mobile service trucks that are equipped with the latest technology and tools to provide the best service to our customers. We also have a fully equipped workshop that is manned by highly skilled and experienced technicians who are able to provide the best service to our customers.
                <br></br>
                We look to expand our services to other parts of the East African Community (EAC) and beyond. We are committed to providing the best service to our customers and we are always looking to improve our services to meet the ever-changing needs of our customers.
              </p>
              <a href="#!" className="button btn--full join">
                Sign Up
              </a>
            </div>
          </div>
          </div>
      </section>
    </>
  )
};


export default About;