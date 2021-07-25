import React from 'react';
import './SearchBox.css';

const SearchBox = ({handleChange}) => {
    return(
        <div className='searchbox'>
            <input type='search' name='searchField' placeholder='Search an author' onChange={handleChange}/>
        </div>
    );
}

export default SearchBox;