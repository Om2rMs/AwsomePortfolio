import React, { useState } from "react";
import './Nav.css'
import { TbHome } from 'react-icons/tb';
import { RiUser5Fill } from 'react-icons/ri';
import { MdGppGood } from 'react-icons/md';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { AiFillProfile } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri'



const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#"
                onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? 'active' : ''}>
                <TbHome className="nav_icon" />
            </a>
            <a href="#About"
                onClick={() => setActiveNav('#About')}
                className={activeNav === '#About' ? 'active' : ''}>
                <RiUser5Fill className="nav_icon" />
            </a>
            <a href="#Experiance"
                onClick={() => setActiveNav('#Experiance')}
                className={activeNav === '#Experiance' ? 'active' : ''}>
                <MdGppGood className="nav_icon" />
            </a>
            {/* <a href="#Services"
                onClick={() => setActiveNav('#Services')}
                className={activeNav === '#Services' ? 'active' : ''}>
                <MdOutlineMiscellaneousServices className="nav_icon" />
            </a> */}
            <a href="#Portfolio"
                onClick={() => setActiveNav('#Portfolio')}
                className={activeNav === '#Portfolio' ? 'active' : ''}>
                <AiFillProfile className="nav_icon" />
            </a>
            <a href="#Contact"
                onClick={() => setActiveNav('#Contact')}
                className={activeNav === '#Contact' ? 'active' : ''}>
                <RiContactsLine className="nav_icon" />
            </a>
        </nav>
    )
}


export default Nav;