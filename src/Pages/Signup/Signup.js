import React from 'react';
import './Signup.css';

const Signup = () => {
    return(
        <div className='signup-container ba'>
            <p id='signup-header'>Sign Up</p>
            <div className='signup-content'>
                <input className='signup-input' type='text' placeholder='Username'/>
                <input className='signup-input' type='email' placeholder='Email'/>
                <input className='signup-input' type='password' placeholder='Password'/>
            </div>
            <div className='signup-btn'>
                <a id='signup-btn' href='/'>Sign In</a>
                <button className='sign-button' type='submit'>Sign Up</button>
            </div>
        </div>
    );
}

export default Signup;