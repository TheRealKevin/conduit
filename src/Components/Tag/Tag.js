import React from 'react';

import './Tag.css';

const Tag = ({tagList}) => {
    console.log('This is ',tagList);
    return(
        <div className='tag-list'>
            <ul className='tag-options-container'>
                {tagList.map((tag) => {
                    console.log('Inside forEach ',{tag});
                    return <li className='tag-options'>{tag}</li>
                })}
            </ul>
        </div>
    );
}

export default Tag;