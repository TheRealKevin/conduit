import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeCurrentUser } from '../../Redux/User/User.actions';

import './Navbar.css';

//  Fixes
//  1. [Object object] error in this.props
//  2. Use currentUser from props (Redux)

class Navbar extends Component {
    constructor(props){
        super(props);
    }

    handleSignOut = () => {
        console.log(`props are ${this.props}`);
        this.props.removeCurrentUser();
        return <Redirect to='/'/>
    }
     
    render(){
        const currentUser = this.props;
        console.log(`props are ${this.props}`);
        console.log(`user is ${currentUser}`);
        console.log(`username is ${currentUser.username}`);
        return(
            <nav className='navbar navbar-fixed-top'>
                <div className='nav-container'>
                    <div className='header'>
                        <a className='brand navbar-brand' href='/'>Medium Clone</a>
                    </div>
                    {!currentUser ? 
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
                                    <Link to={`/api/profile/${currentUser.username}`}>My Profile</Link>
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

const mapStateToProps = ({user}) => ({
    currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
    removeCurrentUser : () => dispatch(removeCurrentUser())
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar); 