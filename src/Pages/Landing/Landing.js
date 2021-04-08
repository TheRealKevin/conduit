import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './Landing.css';
import blogpic from './blogpic.jpg';

const Landing = () => {
    return(
        <div className='landing-page'>
            <div className='landing-page-container'>
                <div className='landing-page-header'>
                    <div className='landing-page-header-text'>
                        <p>Welcome to <br/> Medium-Clone</p>
                    </div>
                    <div className='landing-page-header-pic'>
                        <img src={blogpic} alt='blogging-pic'/>
                    </div>
                </div>
                <div className='landing-page-features'>
                    <div className='landing-page-features-header'>
                        <h3>FEATURES</h3>
                    </div>
                    <div className='landing-page-features-item-list'>
                        <div className='landing-page-features-item'>
                            <span className='landing-page-features-item-dot'>.</span>
                            <h4>Read peoples insightful stories</h4>
                        </div>
                        <div className='landing-page-features-item'>
                            <span className='landing-page-features-item-dot'>.</span>
                            <h4>Influence millions by your experiences</h4>
                        </div>
                        <div className='landing-page-features-item'>
                            <span className='landing-page-features-item-dot'>.</span>
                            <h4>Bookmark and share your favorites</h4>
                        </div>
                        <div className='landing-page-features-item'>
                            <span className='landing-page-features-item-dot'>.</span>
                            <h4>Create your account and get started</h4>
                        </div>
                    </div>
                </div>
                <div className='landing-page-sign'>
                    <div className='landing-page-signin'>
                        <p>Sign In to access thousands of authors articles</p>
                        <button className='sign-button'>Sign In</button>
                    </div>
                    <div className='landing-page-signup'>
                        <p>Haven't made a Medium-Clone account yet? Let's get started </p>
                        <a id='signup-button' href=''>Click here</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;