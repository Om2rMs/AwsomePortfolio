import React from 'react';
import './Exfrontlist.css';
import { GiLevelEndFlag } from 'react-icons/gi'


const Exfrontlist = ({ id, exName, exLevel, icons }) => {
    return (
        <article key={id} className='ex_details'>
            {icons}
            <div>
                <h4>{exName}</h4>
                <small className='text-light'><GiLevelEndFlag />{exLevel}</small>
            </div>
        </article>
    );
};

export default Exfrontlist;