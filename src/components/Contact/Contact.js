import React from "react";
import { contactData } from "../../assests/ContactData";
import ContactCard from "../ContactCard/ContactCard";
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w6xyj4x', 'template_yrzteoq', form.current, 'TPiEhFlBEroh3uFvk')
        e.target.reset()
    };

    return (
        <section id="Contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>


            <div className="container contact_container">
                <div className="contact_options">
                    {contactData.map(({ id, contactType, contactText, contactLink, contactTextLink, icons }) => (
                        <ContactCard key={id}
                            contactType={contactType}
                            contactText={contactText}
                            contactLink={contactLink}
                            contactTextLink={contactTextLink}
                            icons={icons} />
                    ))}
                </div>


                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>

                </form>
            </div>
        </section>
    )
}


export default Contact;