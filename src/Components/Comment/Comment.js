import React from 'react';
import './Comment.css';
import { Link } from 'react-router-dom';
 
import Seperator from '../Seperator/Seperator';
import Doggo from './doggo.jpg'

const Comment = ({comment}) => {

    const getDate = (createdAt) => {
        const newDate = createdAt.split('-');
        var day = newDate[2].substr(0,2), month = newDate[1], year = newDate[0];
        return {day,month,year};
    }
    

    // console.log('In Comment ',comment);
    const {author,body,createdAt} = comment;
    const date = getDate(createdAt);
    return(
        <div className='comment'>
            <div className='comment-container'>
                <div className='comment-user'>
                    <div className='comment-user-pic-container'>
                        <img className='comment-user-pic' src={author.image} alt='comment-pic'/>
                    </div>
                    <div className='comment-user-info-container'>
                        <Link className='comment-user-info-name' to={{
                                pathname : `/api/profile/${comment.author.username}`,
                                state : {
                                    username : author.username,
                                    bio : author.bio,
                                    image : author.image,
                                    following : author.following
                                }
                            }}>
                            {author.username}
                        </Link>
                        {/* <div className='comment-user-info-name'>
                            <a className='test' href='/api/profile/'>{author.username}</a>
                        </div> */}
                        <div className='comment-user-info-time'>
                            <p>Written on {date.day}-{date.month}-{date.year}</p>
                        </div>
                    </div>
                </div>
                <div className='comment-body'>
                    <p className='comment-body-container'>
                    {body}
                    </p>
                </div>
            </div>
            <div>

            </div>
            {/* <Seperator/> */}
        </div>
    );
}

export default Comment;