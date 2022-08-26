import React from "react";
import './Services.css'
import { sData } from './../../assests/servicesData'
import ServicesList from '../ServicesList/ServicesList'

const Services = () => {
    return (
        <section id="Services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services_container">
                {sData.map(({ id, sName, stats, icons }) => (
                    <ServicesList key={id}
                        sName={sName}
                        stats={stats}
                        icons={icons} />
                ))}
            </div>
        </section>
    )
}


export default Services;