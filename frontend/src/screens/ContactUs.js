import './ContactUs.css';
import React, { useState, useEffect } from "react";
import { db } from "./firebase.js";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                message: message,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
    };

    return(
        <div class="container">
    <h1 class="brand"><span>Contact</span> Us</h1>
    <div class="wrapper">
      <div class="company-info">
        <h3>Sports Management</h3>
        <br/>
        <ul>
          <li><i class="fa fa-road"></i> 44 Something st</li>
          <li><i class="fa fa-phone"></i> (555) 555-5555</li>
          <li><i class="fa fa-envelope"></i> xxx@abc.com</li>
        </ul>
      </div>
      <div class="contact">
        <form id="contactForm" onSubmit={handleSubmit}>
          <p>
            <label>Name</label>
            <input type="text" placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} id="name"/>
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" placeholder="Email" value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"/>
          </p>
          <p class="full">
            <label>Message</label>
            <textarea placeholder="Message" value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                id="message"></textarea>
          </p>
          <p class="full">
          <button type="submit" className="btn-contact"
                                style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                            ><h1>Submit</h1></button>
          </p>
        </form>
      </div>
    </div>
  </div>
    )
    
};

export default Contact;