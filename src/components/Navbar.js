import "./Navbar.css";
import Logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react";

const Navbar = () => {

    const navigation = useNavigate();

    const [menuStatus, setMenuStatus] = useState(false);
    const handle_menu = ()=>{
        setMenuStatus(!menuStatus);

    }

    return(
        <>
        <div id="main_navbar">
            <div id="main_nav_left">
                <img onClick={()=>{navigation("/")}} src={Logo} alt="Sage cage and grills logo"/>
            </div>

            <div id="main_nav_right">
                <p onClick={()=>{navigation("/")}}>Home</p>
                <p onClick={()=>{navigation("/aboutUs")}}>About Us</p>
                <p onClick={()=>{navigation("/contact")}} >Contact Us</p>
                <p onClick={()=> {navigation("/franchise")}}>Franchise</p>
            </div>

            <div onClick={()=>{handle_menu();}} id="main_menu">
                <div id="l1"></div>
                <div id="l2"></div>
                <div id="l3"></div>
            </div>
        </div>

        { menuStatus && (
            <div id="menu_card">
            <p onClick={()=>{navigation("/")}}>Home</p>
            <p onClick={()=>{navigation("/aboutUs")}}>About Us</p>
            <p onClick={()=>{navigation("/contact")}} >Contact Us</p>
            <p onClick={()=> {navigation("/franchise")}}>Franchise</p>
        </div>
        )}
        </>
    );
}

export default Navbar;