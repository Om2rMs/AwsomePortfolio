import React from "react";
import './Experiance.css';
import { ExFrontData } from '../../assests/ExperienceFrontData';
import { ExBackData } from "../../assests/ExperienceBackData";
import Exfrontlist from "../Exfrontlist/Exfrontlist";
import Exbacklist from '../Exbacklist/Exbacklist'

const Experiance = () => {
    return (
        <section id="Experiance">
            <h5>What Skills I Have</h5>
            <h2>My Experiance</h2>

            <div className="container ex_container">
                <div className="ex_front">
                    <h3>Front-End Development</h3>
                    <div className="ex_content">
                        {ExFrontData.map(({ id, exName, exLevel, icons }) => (
                            <Exfrontlist key={id}
                                exName={exName}
                                exLevel={exLevel}
                                icons={icons} />
                        ))}
                    </div>
                </div>

                <div className="ex_back">
                    <h3>Back-End Development</h3>
                    <div className="ex_content">
                        {ExBackData.map(({ id, exName, exLevel, icons }) => (
                            <Exbacklist key={id}
                                exName={exName}
                                exLevel={exLevel}
                                icons={icons} />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}


export default Experiance;