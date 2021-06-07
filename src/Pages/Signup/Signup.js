import React,{Component} from 'react';
import './Signup.css';

class Signup extends Component {
    constructor(){
        super();
        this.state = {
            username : '',
            password : '',
            email : ''
        }
    }

    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name] : value
        })
    } 

    handleSubmit = () => {
        console.log('Signed Up');
    }

    render(){
        return(
            <div className='signup-container ba'>
                <p id='signup-header'>Sign Up</p>
                <div className='signup-content'>
                    <input className='signup-input' onChange={this.handleChange} type='text' name='username' placeholder='Username'/>
                    <input className='signup-input' onChange={this.handleChange} type='email' name='email' placeholder='Email'/>
                    <input className='signup-input' onChange={this.handleChange} type='password' name='password' placeholder='Password'/>
                </div>
                <div className='signup-btn'>
                    <a id='signup-btn' href='/'>Sign In</a>
                    <button className='sign-button' onChange={this.handleSubmit} type='submit'>Sign Up</button>
                </div>
            </div>
        );
    }
}

export default Signup;