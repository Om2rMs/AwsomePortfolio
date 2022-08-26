import React from "react";
import './Portfolio.css';
import { PortData } from './../../assests/PortItemsData'
import PortItems from '../PortItems/PortItems'

const Portfolio = () => {
    return (
        <section id="Portfolio">
            <h5>My Awsome Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {PortData.map(({ id, pImg, pText, pLink2, pLive }) => (
                    <PortItems key={id}
                        pImg={pImg}
                        pText={pText}
                        pLink2={pLink2}
                        pLive={pLive}
                    />
                ))}
            </div>

        </section>
    )
}


export default Portfolio;