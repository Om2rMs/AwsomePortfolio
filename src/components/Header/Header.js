import React from "react";
import './Header.css';
import Btn from "./Btn";
import HeaderSocials from "./HeaderSocials";
import me from '../../assests/omar.png';
import Typewriter from 'typewriter-effect';



const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Omar</h1>
                <h5 className="text-light">DEVELOPER
                    <div className="typewriter">
                        <Typewriter
                            options={{
                                strings: ['Front-End', 'Back-End', 'UI/UX'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </h5>
                <Btn />
                <HeaderSocials />

                <div className="omar">
                    <img className="omar_img" src={me} alt="omar" ></img>
                </div>

                <a href="#Contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}


export default Header;