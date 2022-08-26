import React from 'react';
import './PortItems.css';

const PortItems = ({ id, pImg, pText, pLink2, pLive }) => {
    return (
        <article key={id} className='portfolio_item'>
            <div className='portfolio_item_img'>
                <img src={pImg} alt="" />
            </div>
            <h3>{pText}</h3>
            <div className='portfolio_item_link'>
                <a href={pLink2} className='btn btn-primary' target="_blank">{pLive}</a>
            </div>
        </article>
    );
};

export default PortItems;