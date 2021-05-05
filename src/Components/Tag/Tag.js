import React from 'react';

import './Tag.css';

const Tag = ({tagList}) => {
    return(
        <div className='tag-list'>
            <ul className='tag-options-container'>
                {tagList.map((tag) => {
                    return <li key={tag} className='tag-options'>{tag}</li>
                })}
            </ul>
        </div>
    );
}

export default Tag; 