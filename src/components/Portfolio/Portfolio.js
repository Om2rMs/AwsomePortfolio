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
                {PortData.map(({ id, pImg, pText, pLink1, pLink2, pName, pLive }) => (
                    <PortItems key={id}
                        pImg={pImg}
                        pText={pText}
                        pLink1={pLink1}
                        pLink2={pLink2}
                        pName={pName}
                        pLive={pLive}
                    />
                ))}
            </div>

        </section>
    )
}


export default Portfolio;