import React from "react";
import "./About.css"
import Navbar from "./Navbar";

const About = () => {
    return ( <>
        <Navbar />

        <div className="about-container">
            <diiv className="about-body">
                <p>About Us</p>
                <p>At Sage, we believe in the power of good food to bring people together. Our diverse menu is carefully crafted to tantalize your taste buds. 
                    From sizzling steaks to creamy pastas, each 
                    dish is prepared with the finest ingredients and a touch of culinary expertise. Driven by a passion for hospitality, our team is 
                    dedicated to ensuring that every guest leaves with a smile. With impeccable service and attention to detail, we strive to exceed 
                    your expectations, one dish at a time.
                </p>
            </diiv>
        </div>
    </> );
}
 
export default About;