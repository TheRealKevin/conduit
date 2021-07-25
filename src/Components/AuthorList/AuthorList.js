import React from 'react';
import { Link } from 'react-router-dom';
import './AuthorList.css';

const AuthorList = ({authorList}) => {
    return(
        <div className='author-list'>
            {
                authorList ? 
                    authorList.map((author) => {
                        return <Link key={author} to={`profile/${author}`}>
                            <p className='author-list-name'>{author}</p>
                        </Link>
                    })  
                        :
                null
            }
        </div>
    );
}

export default AuthorList;