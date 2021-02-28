import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className='navbar navbar-fixed-top'>
            <div className='nav-container'>
                <div className='header'>
                    <a className='brand navbar-brand' href='/'>Medium Clone</a>
                </div>
                <div className='options'>
                    <ul>
                        <li className='nav-options'>
                            <a href=''>
                                Sign In
                            </a>
                        </li>
                        <li className='nav-options'>
                            <a href=''>
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;