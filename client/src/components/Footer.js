import React from 'react';
import { useState } from 'react';


function Footer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    }

    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__left">
                    <h1>Get in touch</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="footer__container__right">
                    <h1>Follow us</h1>
                    <div className="footer__container__right__social">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>

                    <div className="footer__container__right__contact">
                        <h3>Address</h3>
                        <p>1234 Main St, Nairobi, State 00100</p>
                        <h3>Phone</h3>
                        <p>(123) 456-7890</p>
                        <h3>Email</h3>
                        <p>
                            <a href="mailto: pbmw@gmail.com
                            ">
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Footer;