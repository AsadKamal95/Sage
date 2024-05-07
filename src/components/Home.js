import "./Home.css"
import Navbar from "./Navbar";
//import { Fade, Zoom, Slide} from 'react-slideshow-image'
import React, { useState, useEffect } from 'react';
import bg1 from "../assets/bg1.jpg"
import bg2 from "../assets/bg2.jpg"
import bg3 from "../assets/bg3.jpg"
import Logo from "../assets/Logo-removebg.jpg"
import appetizer from "../assets/appetizer.jpg"
import burger from "../assets/burger.jpg"
import soup2 from "../assets/soup2.jpg"
import sandwich from "../assets/sandwich.jpg"
import chicken from "../assets/chicken2.jpg"
import beef from "../assets/beefSteak2.jpg"
import sideOrders from "../assets/garlicRice.jpg"
import panAsian from "../assets/PanAsian.jpeg"
import seafood from "../assets/seafood.jpg"
import pastas from "../assets/pasta.jpg"
import dessert from "../assets/desserts.jpg"
import cocktails from "../assets/cocktails2.jpg"
import softdrinks from "../assets/softdrinks.jpg"
import hotbeverages from "../assets/hot-beverages.jpg"
import appetizerItem1 from "../assets/appetizers_item1.jpg";

const Slideshow = ({ images }) => {
    const [index, setIndex] = useState(0);
  
    // Function to handle changing images
    const nextSlide = () => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Clean up the interval on component unmount
      }, [nextSlide]); // Empty dependency array ensures the effect runs only once
    
      return (
        <div className="slideshow">
          <img src={images[index]} alt={`Slide ${index}`} />
        </div>
      );
    };
    const images = [
        bg1,
        bg2,
        bg3
      ];

    
    
const Home = () => {
    const [itemImage, setItemImage] = useState(0);

    const handleImage = () =>{
      setItemImage(!itemImage);
    }
    return ( <>
    <Navbar/>
    <div className="home-container">
        <div className="home-body">
            <Slideshow images={images} />
            <div className="logo">
              <img src={Logo} alt="" />
            </div>

            <div className="menu">
              <p>Menu</p>

              <div className="appetizers">
                <div className="left">
                  <img src={appetizer} alt="Sage cafe and grills Appetizers" />
                </div>
                <div className="right">
                  <p>Appetizers</p>
                  <div className="item">
                    <div className="item-header" onClick={handleImage}>
                      <p>Stuffed Chicken Strips</p>
                      <p>Rs. 1095</p>
                    </div>
                    <div className="item-description">
                      <p>Fried chicken strips stuffed with cream cheese and herbs served with honey mustard sauce</p>
                    </div>
                    {itemImage && <div className="viewItem">
                      <img src={appetizerItem1} alt="Fried Chicken Strips" />
                    </div>}
                    
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Supreme Nachos</p>
                      <p>Rs. 995</p>
                    </div>
                    <div className="item-description">
                      <p>Crispy tortilla topped with grilled chicken, cheese sayce, jalapeno, salsa and sour cream</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Sage Chilli Fries</p>
                      <p>Rs. 995</p>
                    </div>
                    <div className="item-description">
                      <p>French fries topped with our chef's special blend of chilli and cheese sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Buffalo Mac & Cheese</p>
                      <p>Rs. 1095</p>
                    </div>
                    <div className="item-description">
                      <p>Our twist on the classic Mac & Cheese - cheesy macroni topped with our famous Buffalo Bites</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Buffalo Bites</p>
                      <p>Rs. 1095</p>
                    </div>
                    <div className="item-description">
                      <p>Boneless chicken bites tossed with buffalo sauce served with ranch dressing and french fries</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Honey BBQ Chicken Bites</p>
                      <p>Rs. 1095</p>
                    </div>
                    <div className="item-description">
                      <p>Boneless chicken bites tossed with honey BBQ sauce served with ranch dressing and french fries</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Mozzarella Cheese Sticks</p>
                      <p>Rs. 1095</p>
                    </div>
                    <div className="item-description">
                      <p>Crumb fries cheese fingers served with a tangy sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Fry Basket</p>
                      <p>Rs. 950</p>
                    </div>
                    <div className="item-description">
                      <p>Onion Ring & French fries served with a variety of dipping sauces</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Fried Prawns</p>
                      <p>Rs. 1395</p>
                    </div>
                    <div className="item-description">
                      <p>5 Pcs Golden fried pawns served with chef special sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Dynamite Shrimps</p>
                      <p>Rs. 1495</p>
                    </div>
                    <div className="item-description">
                      <p>Crispy fried prawns tossed in a zesty sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Sage Combo Platter</p>
                      <p>Rs. 1395</p>
                    </div>
                    <div className="item-description">
                      <p>A mix of Chicken Bites, Loaded Chicken Fingers, Onion Rings and Cheese served with a variety of dipping sauces</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Soups-and-Salads">
                
                <div className="left">
                  <p>Soups and Salads</p>
                  <div className="item">
                    <div className="item-header">
                      <p>Chicken Asparagus Soup</p>
                      <p>Rs. 845</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Cream of Mushroom Soup</p>
                      <p>Rs. 845</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Tomato & Basil Soup</p>
                      <p>Rs. 795</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Soup of the day</p>
                      <p>Rs. 795</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Oriental Chopped Salad with Grilled Chicken</p>
                      <p>Rs. 1095</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Ceaser Salad</p>
                      <p>Rs. 1095</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <img src={soup2} alt="Sage cafe and grills Appetizers" />
                </div>
              </div>
              {/* burgers */}
              <div className="appetizers">   
                <div className="left-seafood">
                  <img src={burger} alt="Sage cafe and grills Appetizers" />
                </div>
                <div className="right">
                  <p>Burgers</p>
                  <div className="item">
                    <div className="item-header">
                      <p>Classic Beef Cheese Burger</p>
                      <p>Rs. 1295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled beef patty topped with chedder cheese, lettuce, onions and tomatoes</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Smoked Beef Burger</p>
                      <p>Rs. 1295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled beef patty topped with chedder cheese, crispy fried onions beef bacon and smoked BBQ sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Mushroom Beef Burger</p>
                      <p>Rs. 1295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled beef patty topped with sauteed mushrooms, onions and cheese</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Sage Signature Beef Burger</p>
                      <p>Rs. 1295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled juicy beef patty topped with jalapenos, beef bacon,chedder cheese and chef's special sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Classic Chicken Cheese Burger</p>
                      <p>Rs. 1295</p>
                    </div>
                    <div className="item-description">
                      <p>Fried chicken breast topped with cheese, lettuce, onions and tomatoes</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Explosive Chicken Burger</p>
                      <p>Rs. 1295</p>
                    </div>
                    <div className="item-description">
                      <p>Fried Chicken breast topped witch cheese, lettuce, onions, tomatoes and chitpole sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Smoked Chicken Burger</p>
                      <p>Rs. 1295</p>
                    </div>
                    <div className="item-description">
                      <p>Crumb fried chicken breast topped with crispy onions, smoked BBQ sauce and cheese</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Mozzarella Chicken Cheese Burger</p>
                      <p>Rs. 1295</p>
                    </div>
                    <div className="item-description">
                      <p>Crispy fried chicken breast topped with mozzarella cheese and marinara sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Crunchy Chicken Burger</p>
                      <p>Rs. 1295</p>
                    </div>
                    <div className="item-description">
                      <p>Crispy chicken breast topped with cheese, lettuce, onions, tomatoes and honey mustard sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Sage Signature Chicken Burger</p>
                      <p>Rs. 1295</p>
                    </div>
                    <div className="item-description">
                      <p>Crumb fried chicken breast topped with cheddar cheese, jalapeneos and chef's special sauce</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Sandwich">
                
                <div className="left">
                  <p>Sandwiches</p>
                  <div className="item">
                    <div className="item-header">
                      <p>Philly Cheese Steak Sandwich</p>
                      <p>Rs. 1295</p>
                    </div>
                    <div className="item-description">
                      <p>Finely cut slices of sirloin steak topped with sauteed capsicum, onions and cheese served in a hoagie bread</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Chicken Club Sandwich</p>
                      <p>Rs. 1195</p>
                    </div>
                    <div className="item-description">
                      <p>Our take on the traditional club sandwich</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Classic Meatball Sandwich</p>
                      <p>Rs. 1295</p>
                    </div>
                    <div className="item-description">
                      <p>Freshly made meatballs with Beef and Parmesan cooked in our signature tomato sauce served in hoagie bread</p>
                    </div>
                  </div>
                  
                </div>
                <div className="right">
                  <img src={sandwich} alt="Sage cafe and grills Appetizers" />
                </div>
              </div>

              {/* Chicken */}
              <div className="Chicken">
                <div className="left">
                  <img src={chicken} alt="Sage cafe and grills Appetizers" />
                </div>
                <div className="right">
                  <p>Chicken</p>
                  <div className="item">
                    <div className="item-header">
                      <p>French Onion Chicken</p>
                      <p>Rs. 1795</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled chicken breast topeed with sauteed onions and mushrooms in black pepper sauce and cheese</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Mexican Chicken</p>
                      <p>Rs. 1795</p>
                    </div>
                    <div className="item-description">
                      <p>Flame grilled chicken breast topped with Mexican salsa sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Italian Chicken</p>
                      <p>Rs. 1795</p>
                    </div>
                    <div className="item-description">
                      <p>Crumb fried chicken breast topped with mushrooms, olives, mortadella slice, capsicum, marinara sauce and cheese</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Chicken Kiev</p>
                      <p>Rs. 1895</p>
                    </div>
                    <div className="item-description">
                      <p>Deep fried chicken breast stuffed with cheese, sauteed mushrooms and butter</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Chicken Supreme</p>
                      <p>Rs. 1895</p>
                    </div>
                    <div className="item-description">
                      <p>Deep fried chicken breast topped with mushroom cheese sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Carden Blue Chicken</p>
                      <p>Rs. 1895</p>
                    </div>
                    <div className="item-description">
                      <p>Golden fried stuff chicken, stuffed with cheese, mushrooms, olives and topped with creamy caper sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Pesto Chicken</p>
                      <p>Rs. 1895</p>
                    </div>
                    <div className="item-description">
                      <p>Crumb fried chicken breast topped with spicy pesto cream sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Texas BBQ Chicken</p>
                      <p>Rs. 1895</p>
                    </div>
                    <div className="item-description">
                      <p>Crispy fried chicken breast topped with onion rings and smoked BBQ sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Mushroom Chicken with Mushrooms</p>
                      <p>Rs. 1895</p>
                    </div>
                    <div className="item-description">
                      <p>Deep fried chicken topped with mushroom sauce and cheese served with stuffed mushrooms</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Tarragon Chicken</p>
                      <p>Rs. 1895</p>
                    </div>
                    <div className="item-description">
                      <p>Flame grilled chicken breast topped with creamy tarragon sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Wild Mushroom Chicken</p>
                      <p>Rs. 1895</p>
                    </div>
                    <div className="item-description">
                      <p>Flame grilled chicken breast topped with wild mushroom sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Moroccan Chicken</p>
                      <p>Rs. 1895</p>
                    </div>
                    <div className="item-description">
                      <p>Flame grilled chicken breast topped with Moroccan sambam sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Twin Chicken</p>
                      <p>Rs. 1895</p>
                    </div>
                    <div className="item-description">
                      <p>Flame grilled chicken breast topped with creamy sauce and black pepper sauce</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Beef steaks */}
              <div className="beef-steak">
                
                <div className="left">
                  <p>Beef Steaks</p>
                  <div className="item">
                    <div className="item-header">
                      <p>Sage Fire Steak</p>
                      <p>Rs. 2295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled fillet steak topped with spicy butter sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Spicy BBQ steak</p>
                      <p>Rs. 2295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled fillet steak topped with sauteed onions in BBQ sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Mexican Steak</p>
                      <p>Rs. 2295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled fillet steak topped with Mexican salsa sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Black Pepper Steak</p>
                      <p>Rs. 2295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled fillet steak topped with black pepper sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>American Steak</p>
                      <p>Rs. 2295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled fillet steak topped with sauteed mushrooms and onions with cheese and fried egg</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>French Onion Steak</p>
                      <p>Rs. 2295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled fillet steak topped with sauteed onions and mushrooms in black pepper sauce and cheese</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Moroccan Steak</p>
                      <p>Rs. 2295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled fillet steak topped with Moroccan sambal sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Wild Mushroom Steak</p>
                      <p>Rs. 2295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled fillet steak topped with wild mushroom sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Tarragon Steak</p>
                      <p>Rs. 2295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled fillet steak topped with creamy tarragon sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Twin Steak</p>
                      <p>Rs. 2295</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled fillet steak topped with creamy mushroom sauce and black pepper sauce</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <img src={beef} alt="Sage cafe and grills Appetizers" />
                </div>
              </div>

              {/* Side Orders */}
              <div className="appetizers">
                <div className="left-seafood">
                  <img src={sideOrders} alt="Sage cafe and grills Appetizers" />
                </div>
                <div className="right">
                  <p>Side Orders</p>
                  <div className="item">
                    <div className="item-header">
                      <p>Garlic Rice</p>
                      <p>Rs. 595</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>French Fries</p>
                      <p>Rs. 495</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Baked Potato</p>
                      <p>Rs. 325</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Potato Wedges</p>
                      <p>Rs. 495</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Mashed Potato</p>
                      <p>Rs. 325</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Vegetable Rice</p>
                      <p>Rs. 395</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Extra Sauce</p>
                      <p>Rs. 175</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Chef Vegetable</p>
                      <p>Rs. 175</p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Pan Asian */}
              <div className="beef-steak">
                
                <div className="left">
                  <p>Pan Asian</p>
                  <div className="item">
                    <div className="item-header">
                      <p>Chicken Chow Mein</p>
                      <p>Rs. 1195</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Thai Chicken with Basil</p>
                      <p>Rs. 1495</p>
                    </div>
                    <div className="item-description">
                      <p>Stir fried chicken tossed in oyster sauce with thai red chillies and basil served with steamed rice</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Chicken Chilli Dry</p>
                      <p>Rs. 1495</p>
                    </div>
                    <div className="item-description">
                      <p>Stir fried chicken with green chillies, ginger and onions with served with steamed rice</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Chicken Manchurian</p>
                      <p>Rs. 1495</p>
                    </div>
                    <div className="item-description">
                      <p>Stir fried chicken with spicy tomato sauce served with steamed rice</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Kung Pao Chicken</p>
                      <p>Rs. 1495</p>
                    </div>
                    <div className="item-description">
                      <p>Stir fried chicken with thai chillies, nuts and spicy chilli sauce served with steamed rice</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Thai Beef with Basil</p>
                      <p>Rs. 1595</p>
                    </div>
                    <div className="item-description">
                      <p>Stir fried beef tossed in oyster sauce with thai red chillies and basil served with steamed rice</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Beef Chilli Dry</p>
                      <p>Rs. 1595</p>
                    </div>
                    <div className="item-description">
                      <p>Stir fried beef with green chiliies, ginger and onions served with steamed rice</p>
                    </div>
                  </div>
                  
                </div>
                <div className="right">
                  <img src={panAsian} alt="Sage cafe and grills Appetizers" />
                </div>
              </div>

              {/* Seafood */}

              <div className="appetizers">   
                <div className="left-seafood">
                  <img src={seafood} alt="Sage cafe and grills Appetizers" />
                </div>
                <div className="right">
                  <p>Seafood</p>
                  <div className="item">
                    <div className="item-header">
                      <p>Mexican Fish</p>
                      <p>Rs. 2195</p>
                    </div>
                    <div className="item-description">
                      <p>Pan grilled fish served with spicy tomato and lime sauce on top of a bed of baby spinach leaves</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Chilli Tarragon Fish</p>
                      <p>Rs. 2195</p>
                    </div>
                    <div className="item-description">
                      <p>Golden fried fish fillet topped with chilli tarragon cream sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Fish and Chips</p>
                      <p>Rs. 2195</p>
                    </div>
                    <div className="item-description">
                      <p>Crispy battered fried fish fillets served with tartar sauce and coleslaw</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Moroccan Grilled Fish</p>
                      <p>Rs. 2195</p>
                    </div>
                    <div className="item-description">
                      <p>Pan grilled fish topped with spicy Moroccan sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Fried Seafood Platter</p>
                      <p>Rs. 2495</p>
                    </div>
                    <div className="item-description">
                      <p>Tempura fried prawns, fish fillet and calamari served with lemon wedges and variety of dips</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Grilled Peri-Peri Platter</p>
                      <p>Rs. 2495</p>
                    </div>
                    <div className="item-description">
                      <p>Grilled prawns, fish fillet and calamari topped in peri-peri sauce</p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Pastas */}
              <div className="beef-steak">
                
                <div className="left">
                  <p>Pastas</p>
                  <div className="item">
                    <div className="item-header">
                      <p>Chicken Mushroom Pasta</p>
                      <p>Rs. 1595</p>
                    </div>
                    <div className="item-description">
                      <p>Penne pasta topped with creamy wild mushroom sauce, topped with cajun seasoned chicken breast and parmesan cheese</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Parmesan Chicken Pasta</p>
                      <p>Rs. 1595</p>
                    </div>
                    <div className="item-description">
                      <p>Golden fried chicken breast topped with marinara and mozzarella cheese served with penne pasta tossed in parmesan cheese sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Cajun Shrimp Fettuccini</p>
                      <p>Rs. 1595</p>
                    </div>
                    <div className="item-description">
                      <p>Fettuccini pasta topped with creamy tarragon sauce topped with grilled shrimp and parmesan cheese</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Spicy Basil Chicken Pasta</p>
                      <p>Rs. 1595</p>
                    </div>
                    <div className="item-description">
                      <p>Penne pasta tossed in fresh tomato basil sauce with grilled chicken topped with cheese</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Pesto Chicken Pasta</p>
                      <p>Rs. 1595</p>
                    </div>
                    <div className="item-description">
                      <p>Penne pasta tossed with creamy basil pesto sauce served fried chicken breast</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Chicken Mushroom Lasagna</p>
                      <p>Rs. 1595</p>
                    </div>
                    <div className="item-description">
                      <p>Hearty serving of fresh baked chicken lasagna in marinara sauce topped with cheese</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Spaghetti with Meatballs</p>
                      <p>Rs. 1595</p>
                    </div>
                    <div className="item-description">
                      <p>Freshly made maetballs with beef and parmesan sauce cooked in our signature tomato sauce served over spaghetti and basil</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <img src={pastas} alt="Sage cafe and grills Appetizers" />
                </div>
              </div>


              {/* Desserts */}


              <div className="appetizers">   
                <div className="left-seafood">
                  <img src={dessert} alt="Sage cafe and grills Appetizers" />
                </div>
                <div className="right">
                  <p>Desserts</p>
                  <div className="item">
                    <div className="item-header">
                      <p>Hot Frudge Brownie</p>
                      <p>Rs. 850</p>
                    </div>
                    <div className="item-description">
                      <p>Chocolate brownie topped with vanilla icecream, hot chocolate sauce and sliced almonds</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Caramel Bread Pudding on Sizzler</p>
                      <p>Rs. 850</p>
                    </div>
                    <div className="item-description">
                      <p>Freshly made bread pudding topped with warm caramel sauce served with vanilla icecream</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Chocolata Lava Cake</p>
                      <p>Rs. 895</p>
                    </div>
                    <div className="item-description">
                      <p>Freshly baked chocolate dome oozing with dark chocolate sauce served with vanilla icecream</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Dark Chocolate Cake</p>
                      <p>Rs. 850</p>
                    </div>
                    <div className="item-description">
                      <p>Chocolate cake slice with chocolate frosting topped with dark chocolate sauce served with vanilla icecream</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Cheese Cake</p>
                      <p>Rs. 875</p>
                    </div>
                    <div className="item-description">
                      <p>Cheese cake slice served with choice of your favorite topping: Strawberry or Caramel sauce</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Red Velvet</p>
                      <p>Rs. 775</p>
                    </div>
                    <div className="item-description">
                      <p>Red velvet cake slice served with vanilla icecream</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Tiramisu Cake Slice</p>
                      <p>Rs. 795</p>
                    </div>
                    <div className="item-description">
                      <p>Lady fingers dipped in coffee and layered with whipped mixture of mascarpone cheese, sugar and cream</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Creme Brulee</p>
                      <p>Rs. 775</p>
                    </div>
                    <div className="item-description">
                      <p>Rich custard base topped with layer of caramelized sugar</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Icecream (1 scoop)</p>
                      <p>Rs. 295</p>
                    </div>
                    <div className="item-description">
                      <p>Choice of chocolate, vanilla and stawberry</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Icecream (2 scoops)</p>
                      <p>Rs. 495</p>
                    </div>
                    <div className="item-description">
                      <p>Choice of chocolate, vanilla and stawberry</p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Cocktails */}
              <div className="beef-steak">
                
                <div className="left">
                  <p>Cocktails</p>
                  <div className="item">
                    <div className="item-header">
                      <p>Mojito</p>
                      <p>Rs. 525</p>
                    </div>
                    <div className="item-description">
                      <p>Choice of Peach, Strawberry and Blueberry flavor</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Blue Lagoon</p>
                      <p>Rs. 525</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Margarita</p>
                      <p>Rs. 525</p>
                    </div>
                    <div className="item-description">
                      <p>Choice of Mint, Blue, Strawberry flavor</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Ice Tea</p>
                      <p>Rs. 525</p>
                    </div>
                    <div className="item-description">
                      <p>Choice of Peach, Lime, Mango flavor</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Refreshing Lemonade</p>
                      <p>Rs. 525</p>
                    </div>
                    <div className="item-description">
                      <p>Choice of Peach, Strawberry, Lime flavor</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Bloody Mango</p>
                      <p>Rs. 595</p>
                    </div>
                    <div className="item-description">
                      <p>Combination of Mango puree, Orange juice and Pineapple juice with ice</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Sunset Dream</p>
                      <p>Rs. 595</p>
                    </div>
                    <div className="item-description">
                      <p>Combination of Blood Orange syrup, Triple SEC syrup, Orange juice with ice </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Pina Colada</p>
                      <p>Rs. 595</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Pomni Cherry</p>
                      <p>Rs. 595</p>
                    </div>
                    <div className="item-description">
                      <p>An oxalic Pomni grand, cherry with Pomni grand juice served ice </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Spring Fling</p>
                      <p>Rs. 595</p>
                    </div>
                    <div className="item-description">
                      <p>Combination of Pineapple, Orange and Cranberry juice shake with grenadine syrup served with ice</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Pine Light</p>
                      <p>Rs. 595</p>
                    </div>
                    <div className="item-description">
                      <p>Combination of Blood Orange, Coconut and Pineapple flavor blended with Pineapple juice</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Strawberry Daiquiri</p>
                      <p>Rs. 595</p>
                    </div>
                    <div className="item-description">
                      <p>Combination of Strawberry puree and Pineapple juice blended with ice</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Cold Coffee</p>
                      <p>Rs. 595</p>
                    </div>
                    <div className="item-description">
                      <p>Choice of Caramel, Vanilla, Chocolate flavor</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Ice Latte Cola</p>
                      <p>Rs. 595</p>
                    </div>
                    <div className="item-description">
                      <p>Combination of chilled Espresso, Coke, Milk with ice </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Frappe Alaska</p>
                      <p>Rs. 595</p>
                    </div>
                    <div className="item-description">
                      <p>A blended concoction of Almond, Dark chocolate syrup, Chilled espresso, White chocolate sauce and Milk topped with icecream and Dusted with cocoa</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Milkshakes</p>
                      <p>Rs. 595</p>
                    </div>
                    <div className="item-description">
                      <p>Choice of Chocolate, Strawberry, Orio, Vanilla , Coffee flavor</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <img src={cocktails} alt="Sage cafe and grills Appetizers" />
                </div>
              </div>


              {/* Soft Drinks */}

              <div className="appetizers">   
                <div className="left-seafood">
                  <img src={softdrinks} alt="Sage cafe and grills Appetizers" />
                </div>
                <div className="right">
                  <p>Soft Drinks</p>
                  <div className="item">
                    <div className="item-header">
                      <p>Soft Drinks</p>
                      <p>Rs. 195</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Fresh Lime</p>
                      <p>Rs. 210</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Mineral Water (S)</p>
                      <p>Rs. 125</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Mineral Water (L)</p>
                      <p>Rs. 195</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Red Bull</p>
                      <p>Market Price</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Red Bull Mocktail</p>
                      <p>Rs. 995</p>
                    </div>
                    <div className="item-description">
                      <p>Choice of flavors; Lime, Dark Peach, Dark Blueberry</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Fresh Juice</p>
                      <p>Market Price</p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Hot Beverages */}

              <div className="beef-steak">
                
                <div className="left">
                  <p>Hot Beverages</p>
                  <div className="item">
                    <div className="item-header">
                      <p>Black tea</p>
                      <p>Rs. 195</p>
                    </div>

                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Green Tea</p>
                      <p>Rs. 155</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Black Coffee</p>
                      <p>Rs. 495</p>
                    </div>
                    <div className="item-description">
                      <p>Brewed from freshly crushed coffee beans</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Cappuccino</p>
                      <p>Rs. 695</p>
                    </div>
                    <div className="item-description">
                      <p>One shot of espresso blended with steamed milk</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-header">
                      <p>Cafe Latte</p>
                      <p>Rs. 695</p>
                    </div>
                    <div className="item-description">
                      <p>One shot of espresso with a generous portion of steamed milk and topped with foam</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <img src={hotbeverages} alt="Sage cafe and grills Appetizers" />
                </div>
              </div>

            </div>
        </div>
    </div>
    </> );
}
 
export default Home;