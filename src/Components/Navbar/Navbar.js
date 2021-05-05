import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

//  Fixes
//  1. remove user when sign out is hit

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : {}
        }
    }

    componentDidMount(){
        if(this.props.user.length > 0){
            this.setState({
                user : this.state.user
            })
        }
    }
     
    render(){
        const user = this.state;
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
                                    <Link to={`/api/profile/${user.username}`}>My Profile</Link>
                                </li>
                                <li className='nav-options'>
                                    <Link to='/'>Sign Out</Link>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </nav>
        );
    }
}

export default Navbar; 