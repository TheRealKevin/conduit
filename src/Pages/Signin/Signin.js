import React from 'react';
import './Signin.css';

const Signin = () => {
    return(
        <div className='signin-container ba'>
            <p id='signin-header'>Sign In</p>
            <div className='signin-content'>
                <input className='signin-input' type='email' placeholder='Email'/>
                <input className='signin-input' type='password' placeholder='Password'/>
            </div>
            <div className='signin-btn'>
                <a id='signup-btn' href='/'>Sign Up</a>
                <button className='sign-button' type='submit'>Sign In</button>
            </div>
        </div>
    );
}

export default Signin;