import React, { useState } from "react";
import './Nav.css'
import { BiHome } from 'react-icons/bi';



const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#"
                onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? 'active' : ''}>
                <BiHome className="nav_icon" />
            </a>
            <a href="#About"
                onClick={() => setActiveNav('#About')}
                className={activeNav === '#About' ? 'active' : ''}>
                <BiHome className="nav_icon" />
            </a>
            <a href="#Experiance"
                onClick={() => setActiveNav('#Experiance')}
                className={activeNav === '#Experiance' ? 'active' : ''}>
                <BiHome className="nav_icon" />
            </a>
            <a href="#Portfolio"
                onClick={() => setActiveNav('#Portfolio')}
                className={activeNav === '#Portfolio' ? 'active' : ''}>
                <BiHome className="nav_icon" />
            </a>
            <a href="#Services"
                onClick={() => setActiveNav('#Services')}
                className={activeNav === '#Services' ? 'active' : ''}>
                <BiHome className="nav_icon" />
            </a>
        </nav>
    )
}


export default Nav;