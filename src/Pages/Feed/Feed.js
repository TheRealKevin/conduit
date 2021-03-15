import React from 'react';
import './Feed.css';
import Preview from '../../Components/Preview/Preview';

const Feed = () => {
    return(
        <div className='feed'>
            <div className='feed-header'>
                <div className='feed-header-container'>
                    <div className='feed-header-pic'>
                        <img id='pic' src='https://pbs.twimg.com/profile_images/1320782895318007811/PrmXyscz.jpg' alt='user-img'/>
                        <h3 id='name'>Vibe Cat</h3>
                    </div>
                    <div className='feed-header-info'>
                        <div className='feed-header-info-container'>
                            <button className='sign-button'>Follow</button>
                            <p id='followers'>6.9K Followers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='feed-articles'>
                <div className='feed-articles-container'>
                    <Preview/>
                    <Preview/>
                    <Preview/>
                </div>
            </div>
        </div>
    );
}

export default Feed;