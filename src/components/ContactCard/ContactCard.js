import React from 'react';
import './ContactCard.css';

const ContactCard = ({ id, contactType, contactText, contactLink, contactTextLink, icons }) => {
    return (
        <article key={id} className='contact_option'>
            {icons}
            <h4>{contactType}</h4>
            <small>{contactText}</small>
            <a href={contactLink} target="_blank">{contactTextLink}</a>
        </article>
    );
};

export default ContactCard;