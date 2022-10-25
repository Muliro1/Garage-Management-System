import React from "react";
import Footer from '../Footer/Footer'
import mechanic from "../assets/images/mechanic/mechanics.jpg";
import Testimonial from "../UI/Testimonials/Testimonial"
import {BsTools, BsHeadset} from "react-icons/bs"
import {FaMoneyBillAlt} from "react-icons/fa"
import {AiFillSafetyCertificate} from "react-icons/ai"
import {Container} from "@mui/material";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="cars">
        <div className="content">
          <h4 className="text-1">Looking for a car?</h4>
          <h1 className="text-2">Get one Now and Get 50% Off</h1>
          <button className="reserve_btn">Reserve Now</button>
        </div>
      </div>
      <div className="middle">
        <img src={mechanic} alt="mechanic" />
        <div className="home__info">
        <div className="icon-views"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="about__find">
                  <BsTools/>
                  <h1>Get the best services.</h1>
                  </span>

                  <span className="about__find">
                  <FaMoneyBillAlt/>
                  <h1>Affordable prices.</h1>
                  </span>
                </div>

                <div className="icon-views"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="about__find">
                  <BsHeadset/> 
                  <h1>24/7 customer services.</h1>
                  </span>

                  <span className="about__find">
                  <AiFillSafetyCertificate/> 
                  <h1>Your safety our priority.</h1>
                  </span>
                </div>
        </div>
      </div>
{/* testimonials */}
      <section>
        <Container>
              <h2 className="section_title">Testimonials</h2>
            {/* <Testimonial /> */}
        </Container>
      </section>
      {/* <Footer/> */}
    </section>
  );
};

export default Home;
