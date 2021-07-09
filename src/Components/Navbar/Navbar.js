import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeCurrentUser } from '../../Redux/User/User.actions';

import './Navbar.css';

//  Fixes
//  1. Get the footer to be fixed at the bottom

class Navbar extends Component {
    constructor(props){
        super(props);
    }

    handleSignOut = () => {
        this.props.removeCurrentUser();
        return <Redirect to='/'/>
    }
     
    render(){
        const {user} = this.props;
        return(
            <nav className='navbar navbar-fixed-top'>
                <div className='nav-container'>
                    <div className='header'>
                        {
                            user ? 
                            <Link className='brand navbar-brand' to='/api/home'>
                                Medium Clone
                            </Link>
                                :
                            <Link className='brand navbar-brand' to='/'>
                                Medium Clone
                            </Link>
                        }
                    </div>
                    {!user ? 
                        <div className='options'>
                            <ul>
                                <li className='nav-options'>
                                    <Link to='/api/users/login'>
                                        Sign In
                                    </Link>
                                </li>
                                <li className='nav-options'>
                                    <Link to='/api/users'>
                                        Sign Up
                                    </Link>
                                </li>
                            </ul> 
                        </div>
                        :
                        <div className='options'>
                            <ul>
                                <li className='nav-options'>
                                    <Link to='/api/creator'>New Article</Link>
                                </li>
                                <li className='nav-options'>
                                    <Link to={`/api/profile/${user.username}`}>My Profile</Link>
                                </li>
                                <li className='nav-options'>
                                    <Link to='/' onClick={this.handleSignOut}>Sign Out</Link>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    user : state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    removeCurrentUser : () => dispatch(removeCurrentUser())
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar); 