import React from "react";
import { Container } from "@mui/material";
import {BsFacebook,BsLinkedin} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import "./footer.css";

const quickLinks = [
  {
    path: "/about",
    display: <BsFacebook/>,
    name: "facebook",
  },

  {
    path: "/cars",
    display: <AiFillTwitterCircle/>,
    name: "twitter",
  },
  {
    path: "/contact",
    display: <BsLinkedin/>,
    name: "linkedin",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
            <div className="logo footer__logo">
              <h1>
                <div to="/home" className=" d-flex align-items-center gap-2">
                  <span>
                    Get Service?
                  </span>
                </div>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
              Delectus et ad illo recusandae temporibus?
            </p>
          

      
            <div className="mb-4">
              <h5 className="footer__link-title">Talk to us</h5>
              <>
                {quickLinks.map((item, index) => (
                  <div key={index} className="p-0 mt-3 quick__link">
                    <div className="flex">{item.display} </div>
                  </div>
                ))}
              </>
            </div>

            <div className="mb-4">
              <h5 className="footer__link-title">Head Office</h5>
              <p className="office__info">Nairobi,CBD Eagle house 3rd floor</p>
              <p className="office__info">Phone: +0995345875365</p>

              <p className="office__info">Email: pbmw@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
    

          
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}. All rights reserved.
              </p>
            </div>
         
      </Container>
    </footer>
  );
};

export default Footer;
