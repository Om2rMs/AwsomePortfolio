import React from "react";
import './Header.css';
import Btn from "./Btn";
import HeaderSocials from "./HeaderSocials";
import me from '../../assests/developer.png';
import Typewriter from 'typewriter-effect';



const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello</h5>
                <h1>I'm Omar</h1>
                <h5 className="text-light">DEVELOPER
                    <div className="typewriter">
                        <Typewriter
                            options={{
                                strings: ['Front-End', 'Back-End', 'UI/UX', 'Flutter'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </h5>
                <Btn />
                <HeaderSocials />


                <img className="omar" src={me} alt="omar" ></img>


                <a href="#Contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}


export default Header;
