import React from 'react';
import './User.css';
// import img from './img.jpg';

const User = () => {
    return(
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
    );
}

export default User;