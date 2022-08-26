import React from "react";
import './Footer.css';
import { BiHome } from 'react-icons/bi';



const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer_logo">Omar</a>

            <ul className="links">
                <li><a href="#">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Experiance">Experiance</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Contact">Contact</a></li>

            </ul>

            <div className="footer_media">
                <a href="#"><BiHome /></a>
                <a href="#"><BiHome /></a>
                <a href="#"><BiHome /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; OMAR, Made With Love <BiHome /></small>
            </div>
        </footer>
    )
}


export default Footer;