import React from "react";
import "./Contact.css"
import cafePic from "../assets/cafe.jpg"
import Navbar from "./Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    return ( <>
    <Navbar />
    <div className="contact-container">
        <div className="contact-body">
            <div className="header">
                <p>Contact Us</p>
            </div>
            <div className="info">
                <div className="cafe-pic">
                    <img src={cafePic} alt="Sage Cafe and Grills picture" />
                </div>
                <div className="cafe-details">
                    <p>Sage Cafe and Grills</p>
                    <p><FontAwesomeIcon icon={faLocationDot} className="icons"/> 6-B, Bhittai Rd, F-7 Markaz, Islamabad, Islamabad Capital Territory</p>
                    <p><FontAwesomeIcon icon={faClock} className="icons"/> 12:00 PM - 12:00 AM</p>
                    <p><FontAwesomeIcon icon={faPhone} className="icons"/> (051) 2656544</p>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export default Contact;