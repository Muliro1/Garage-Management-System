import React from "react"
import { useState } from "react"

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    };

    return (
        <>
            <section className='contact'>
                <div className="contact-body">                
                <div className="contact-container">
                    <h1>CONTACT US</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={name} placeholder="Enter your full name" onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={email} placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="form-control">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" value={message} placeholder="Write your message" onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>

                        <button type="submit">Submit</button>
                    </form>

                    <span>

                        <div className="contact-info">
                            <h3>Address: XYZ Place, Waiyaki Way, Nairobi, KE 00100</h3>
                            <h3>Phone: +254 (0) 212 345678</h3>
                            <h3>Email: info@pbmw.com</h3>
                            <h3>Instagram: @pbmw</h3>
                            <h3>Twitter: @pbmw</h3>
                        </div>

                    </span>
                </div>
                </div>
            </section>
        </>
    )
};


export default Contact;





