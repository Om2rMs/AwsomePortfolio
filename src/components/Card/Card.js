import React from 'react';
import './Card.css';

const Card = ({ id, cardName, cardText, icons }) => {
    return (
        <article key={id}
            className='about_card'>
            {icons}
            <h5>{cardName}</h5>
            <small>{cardText}</small>


        </article>
    );
};

export default Card;