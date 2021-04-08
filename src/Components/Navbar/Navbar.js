import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({user}) => {
    return(
        <nav className='navbar navbar-fixed-top'>
            <div className='nav-container'>
                <div className='header'>
                    <a className='brand navbar-brand' href='/'>Medium Clone</a>
                </div>
                {!user ? 
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
                    :
                    <div className='options'>
                        <ul>
                            <li className='nav-options'>
                                {/* <a href=''>
                                    My Profile
                                </a> */}
                                <Link to={`/api/profile/${user.username}`}>My Profile</Link>
                            </li>
                            <li className='nav-options'>
                                {/* <a href=''>
                                    Sign Out
                                </a> */}
                                <Link to='/'>Sign Out</Link>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    );
}

export default Navbar; 