import React from "react";
import './About.css';
import { contentData } from '../../assests/aboutContentData';
import Card from "../Card/Card";
import identify from '../../assests/me.gif';






const About = () => {
    return (
        <section id="About">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_img">
                        <img src={identify} alt=" about_me" className="img_me"></img>
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        {contentData.map(({ id, cardName, cardText, icons }) => (
                            <Card key={id}
                                cardName={cardName}
                                cardText={cardText}
                                icons={icons} />
                        ))}

                    </div>

                    <p>
                        <small> My Name is Omar</small>, a Graduate of the Arab Open University,
                        majoring in ITC. Interested in programming and web design with modern features.
                        On my way to becoming a <small>Fullstack developer</small>.
                        I have intermediate knowledge of application programming by
                        <small>  Flutter</small>
                    </p>

                    <a href="#Contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>

        </section>
    )
}


export default About;