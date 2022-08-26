import React from 'react';
import './ServicesList.css';

const ServicesList = ({ id, sName, stats, icons }) => {
    return (
        <article key={id} className='services'>
            <div className='services_head'>
                <h3>{sName}</h3>
            </div>

            <ul className='services_list'>
                <li>
                    {icons}
                    <p>{stats.list1}</p>
                </li>
                <li>
                    {icons}
                    <p>{stats.list2}</p>
                </li>
                <li>
                    {icons}
                    <p>{stats.list3}</p>
                </li>
                <li>
                    {icons}
                    <p>{stats.list4}</p>
                </li>
                <li>
                    {icons}
                    <p>{stats.list5}</p>
                </li>
                <li>
                    {icons}
                    <p>{stats.list6}</p>
                </li>
                <li>
                    {icons}
                    <p>{stats.list7}</p>
                </li>
                <li>
                    {icons}
                    <p>{stats.list8}</p>
                </li>
            </ul>

        </article>
    );
};

export default ServicesList;