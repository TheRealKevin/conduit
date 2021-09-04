import React,{ Component } from 'react';
import './Signin.css';

import { connect } from 'react-redux';

import { setCurrentUser } from '../../Redux/User/User.actions';
import { Redirect , Link } from 'react-router-dom';
 
//      TODO
// 1. Check with postman whether data from frontend is verifying thru the DB.

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }

    // handleChange = (event) => {
    //     const {value,name} = event.target;
    //     this.setState({
    //         [name] : value
    //     })   
    // }

    // handleSubmit = () => {
    //     const {setCurrentUser,history} = this.props;        
    //     const user = {
    //         email : this.state.email,
    //         password : this.state.password
    //     }        
    //     fetch('https://fast-stream-91986.herokuapp.com/api/users/login',{
    //         method : 'POST',
    //         headers : {'Content-Type' : 'application/json'},
    //         body : JSON.stringify({user})
    //     })
    //     .then( res => res.json())
    //     .then( (data) => {
    //         if(data.user){
    //             setCurrentUser(data.user);
    //             history.push('/');
    //         }else{
    //             alert(data.errors.body[0]);
    //         }
    //     })
    // }

    handleChange = (event) => {
        const {value,name} = event.target;
        this.setState({
            [name] : value
        })   
    }

    handleSubmit = () => {
        const {setCurrentUser,history} = this.props;        
        const user = {
            email : this.state.email,
            password : this.state.password
        }        
        fetch('http://localhost:3000/api/users/login',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({user})
        })
        .then( res => res.json())
        .then( (data) => {
            if(data.user){
                setCurrentUser(data.user);
                history.push('/');
            }else{
                alert(data.errors.body[0]);
            }
        })
    }

    render(){
        return(
            <div className='signin-container ba'>
                <p id='signin-header'>Sign In</p>
                <div className='signin-content'>
                    <input className='signin-input' onChange={this.handleChange} type='email' name='email' placeholder='Email'/>
                    <input className='signin-input' onChange={this.handleChange} type='password' name='password' placeholder='Password'/>
                </div>
                <div className='signin-btn'>
                    <Link id='signup-btn' to='/api/users'>
                        Sign Up
                    </Link>
                    <button className='sign-button' onClick={this.handleSubmit} type='submit'>Sign In</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(Signin);