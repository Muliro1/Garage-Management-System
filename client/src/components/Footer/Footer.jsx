import React from "react";
import { Container } from "@mui/material";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { GrSend } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./footer.css";

const quickLinks = [
  {
    path: "/about",
    display: <BsFacebook />,
    name: "facebook",
  },

  {
    path: "/cars",
    display: <AiFillTwitterCircle />,
    name: "twitter",
  },
  {
    path: "/contact",
    display: <BsLinkedin />,
    name: "linkedin",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <div className="footerDesc">
          <div className="logo footer__logo">
            <h1>
              <div to="/home" className=" get__service">
                <span>Get Service?</span>
              </div>
            </h1>
            <p className="footer__logo-content">
              In this current tough economic <br /> situations,living is already
              a hustle. <br /> Why then should you worry about <br /> how you
              should move to live better?
            </p>
          </div>

          <div className="div__div">
            <h3 className="footer__link-title">Talk to us</h3>
            <>
              {quickLinks.map((item, index) => (
                <div key={index} className=" quick__link">
                  <div className="flex">{item.display} </div>
                  <div className="flex">{item.name} </div>
                </div>
              ))}
            </>
          </div>

          <div className="div__div">
            <h3 className="footer__link-title">Head Office</h3>
            <p className="office__info">Nairobi,CBD Eagle house 3rd floor</p>
            <p className="office__info">Phone: +0995345875365</p>

            <p className="office__info">Email: pbmw@gmail.com</p>

            <p className="office__info">Office Time: 10am - 7pm</p>
          </div>

          <div className="div__div">
            <h3 className="footer__link-title">Newsletter</h3>
            <p className="footer__link-title">Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Email" />
              <span>
                <GrSend />
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="copyright">Copyright {year}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
