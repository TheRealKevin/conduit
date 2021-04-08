import React from 'react';
import './Comment.css';

import Seperator from '../Seperator/Seperator';
import Doggo from './doggo.jpg'

const Comment = () => {
    return(
        <div className='comment'>
            <div className='comment-container'>
                <div className='comment-user'>
                    <div className='comment-user-pic-container'>
                        <img className='comment-user-pic' src={Doggo} alt='comment-pic'/>
                    </div>
                    <div className='comment-user-info-container'>
                        <div className='comment-user-info-name'>
                            <a href='/'>Vibe Doggo</a>
                        </div>
                        <div className='comment-user-info-time'>
                            <p>2 months ago</p>
                        </div>
                    </div>
                </div>
                <div className='comment-body'>
                    <p>
                    All things considered, they are also life-changing in the very long run. The only difficulty with those is how hidden their impact is. It’s easy to drop them because you don’t see how useful they are. Keep at them for long enough and your life will improve.
                    </p>
                </div>
            </div>
            <Seperator/>
        </div>
    );
}

export default Comment;