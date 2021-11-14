import './Form.css';
import React, { useState, useEffect } from "react";
import { db } from "./firebase.js";
import { Link } from 'react-router-dom'


const Form = () => {
    

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setstate] = useState("");



    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("details")
            .add({
                name: name,
                age: age,
                dob: dob,
                gender: gender,
                email: email,
                phone: phone,
                address: address,
                city: city,
                state: state
            })
            .then(() => {
                setLoader(false);
                alert("Your Registration is successfull 👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setAge("");
        setDob("");
        setGender("");
        setEmail("");
        setPhone("");
        setAddress("");
        setCity("");
        setstate("");
    };

    return (
        
        <div class="containerform">
            <h1 class="brand"><span>Registration</span> Form</h1>
            <div class="wrapper">
                <div class="company-info">
                    
                    <br/>
                    <h3>Follow 3 Simple Steps</h3>
                    <br/>
                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991109.png" className="center"/>
                    <h3>Fill Form</h3>
                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png" className="center"/>
                    <h3>Check Email for Confirmation</h3>
                    <img src="https://cdn3.iconfinder.com/data/icons/glypho-money-and-finance/64/money-dollar-circle-512.png" className="center"/>
                    <h3>Pay Fee at Event and Play!</h3>
                </div>
                <div class="contact">



                    <form id="contactForm" onSubmit={handleSubmit}>
                        <p>
                            <label>Name</label>
                            <input type="text" placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} id="name" required/>
                        </p>
                        <p>
                            <label>Age</label>
                            <input type="number" placeholder="Age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)} id="age" required/>
                        </p>
                        <p>
                            <label>Date</label>
                            <input type="date" placeholder="DOB"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)} id="dob" required/>
                        </p>
                        <p>
                            <label>Gender</label>
                            <input type="text" placeholder="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)} id="gender" required/>
                        </p>
                        <p>
                            <label>Email Address</label>
                            <input type="email" placeholder="Email" value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email" required/>
                        </p>
                        <p>
                            <label>Phone No</label>
                            <input type="tel" placeholder="PhoneNo" value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                id="phone" required/>
                        </p>
                        <p>
                            <label>City</label>
                            <input type="text" placeholder="City" value={city}
                                onChange={(e) => setCity(e.target.value)}
                                id="city" required/>
                        </p>
                        <p>
                        <label>State</label>
                            <input type="text" placeholder="State" value={state}
                                onChange={(e) => setstate(e.target.value)}
                                id="city" required />
                        </p>
                        <p class="full">
                            <label>Address</label>
                            <textarea placeholder="Address" value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                id="message" required></textarea>
                        </p>
                        
                        <p class="full">
                            <button type="submit" className="btn-contact"
                                style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                            ><h1>Submit</h1></button>
                        </p>
                    </form>





                </div>
            </div>
            <br/>
            <div className="back">
            <Link to="/addevent">Back to Events</Link>
            </div>
        </div>
    )

};

export default Form;