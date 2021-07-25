import React from 'react';
import { Link } from 'react-router-dom';
import './AuthorList.css';

const AuthorList = ({authorList}) => {
    return(
        <div className='author-list'>
            {
                authorList ? 
                    authorList.map((author) => {
                        return <Link key={author} to={`profile/${author}`}>{author}</Link>
                    })  
                        :
                null
            }

            {/* {authorList.map((author) => {
                console.log(author)
                return <Link to={`api/profile/${author}`}>{author}</Link>
            })} */}
        </div>
    );
}

export default AuthorList;