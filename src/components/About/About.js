import React from "react";
import './About.css';
import me from '../../assests/omar.png';
import { contentData } from '../../assests/aboutContentData';
import Card from "../Card/Card";
import content from '../../assests/great.png'





const About = () => {
    return (
        <section id="About">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_img">
                        <img src={content} alt=" about_me" className="img_me"></img>
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
                        In this practical react js project
                        tutorial, I'm going to teach you,
                        step-by-step, how to create and
                        deploy a fully responsive personal
                        portfolio website from scratch! By
                        the end of this video, you will know
                        how to create a react app from scratch,
                        how to use
                    </p>

                    <a href="#Contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>

        </section>
    )
}


export default About;