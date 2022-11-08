import React from "react";
import Footer from '../Footer/Footer'
import mechanic from "../assets/images/mechanic/mechanics.jpg";
import Testimonial from "../UI/Testimonals/Testimonial"
import {BsTools, BsHeadset} from "react-icons/bs"
import {FaMoneyBillAlt} from "react-icons/fa"
import {AiFillSafetyCertificate} from "react-icons/ai"
import {Container} from "@mui/material";
import {HiArrowSmRight} from "react-icons/hi"
import "./home.css";

const Home = () => {
  return (
    <section className="home h-[88vh] overflow-y-scroll ">
      <div className="cars">
        <div className="content">
          <h4 className="text-1">Looking for a car?</h4>
          <h1 className="text-2">Get one Now and Get 50% Off</h1>
          <button className="reserve_btn">Reserve Now</button>
        </div>
      </div>
      <div className="middle">
        <img src={mechanic} alt="mechanic" />
        <div class="sect1">
            <hr/>
            <h2 class="head">Cut the Hustle</h2>
            <p class="sect2">In this current tough economic <br/> situations,living is already a hustle. <br/> Why then should you worry about <br/> how you should move to live better?</p>
            <button id="sect3"> learn more <HiArrowSmRight/>
            </button>
        </div>
      </div>

      <div className="home__info">
        <div className="icon-views"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="about__find">
                  
                  <h1><BsTools/> Get the best services.</h1>
                  </span>

                  <span className="about__find">
                  <h1><FaMoneyBillAlt/> Affordable prices.</h1>
                  </span>
                  <span className="about__find">
                 
                  <h1> <BsHeadset/>  24/7 customer services.</h1>
                  </span>

                  <span className="about__find">
                  <h1><AiFillSafetyCertificate/> Your safety our priority.</h1>
                  </span>
                </div>
        </div>
{/* testimonials */}
      <section>
        <Container>
              <h2 className="section_title">Testimonials</h2>
            <Testimonial />
        </Container>
      </section>
      <Footer/>
    </section>
  );
};

export default Home;
