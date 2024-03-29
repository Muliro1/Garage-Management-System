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
    <footer className="bg-black pt-2 text-white ">
      <Container>
        <div className="grid grid-cols-5">
          

          <div className="">
            <h3 className="text-white font-bold pb-4">Talk to us</h3>
            <>
              {quickLinks.map((item, index) => (
                <div key={index} className="text-white ">
                  <span className="flex">{item.display}<span className="pl-2">{item.name}</span> </span>
                </div>
              ))}
            </>
          </div>

          <div className="col-span-2">
            <h3 className="font-bold pb-4 ">Head Office</h3>
            <p className="office__info">Nairobi,CBD Eagle house 3rd floor</p>
            <p className="office__info">Phone: +0995345875365</p>

            <p className="office__info">Email: pbmw@gmail.com</p>

            <p className="office__info">Office Time: 10am - 7pm</p>
          </div>

          <div className="col-span-2">
            <h3 className="font-bold pb-4">Newsletter</h3>
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
