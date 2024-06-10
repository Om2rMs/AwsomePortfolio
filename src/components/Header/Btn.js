import React from "react";
import Cv from '../../files/CV.pdf'
//import cv file from folder assests



const Btn = () => {
    return (
        <div className="container_btn">
            <a href={Cv} className="btn">Download CV</a>
            <a href="#Contact" className="btn btn-primary">Let's Talk</a>
        </div>
    )
}

export default Btn;
