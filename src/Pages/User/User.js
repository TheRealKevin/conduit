import React from 'react';
import { Link } from 'react-router-dom';
import ArticleManagement from '../../Components/Article-Management/Article-Management';

import './User.css';
// import img from './img.jpg';

const User = () => {
    return(
        <div className='user'>
            <div className='user-username-container'>
                <h3 className='user-username'>Your Profile</h3>
            </div>
            <div className='user-container'>
                <div className='username'>
                    <h3 id ='username-header'>Vibing Cat</h3>
                    <p id='status'>following</p>
                </div>
                <img id='user-img'  src='https://pbs.twimg.com/profile_images/1320782895318007811/PrmXyscz.jpg' alt='user-profile-pic'/>
                <div className='user-info-container'>
                    <div className='user-info'>
                        <label for='email'>Email</label>
                        <p>vibecat@mail.com</p>
                    </div>
                    <div className='user-info'>
                        <label for='bio'>Bio</label>
                        <p>I Love Pizza</p>
                    </div>
                </div>
            </div>
            <div className='user-article'>
                <div className='user-article-title-container'>
                    <h3>Your Articles</h3>
                </div>
                <div className='user-articles-container'>
                    <ArticleManagement/>
                </div>
            </div>
        </div>
    );
}

export default User;