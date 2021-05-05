import React,{ Component } from 'react';
import './Signin.css';

class Signin extends Component {
    constructor(){
        super();
        this.state = {
            email : '',
            password : ''
        }
    }

    handleChange = (event) => {
        const {value,name} = event.target;
        this.setState({
            [name] : value
        })   
    }

    handleSubmit = () => {
        console.log('Account made')
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
                    <a id='signup-btn' href='/'>Sign Up</a>
                    <button className='sign-button' onClick={this.handleSubmit} type='submit'>Sign In</button>
                </div>
            </div>
        );
    }
}

export default Signin;