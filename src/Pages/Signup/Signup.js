import React,{Component} from 'react';
import './Signup.css';

import { connect } from 'react-redux';

import { setCurrentUser } from '../../Redux/User/User.actions';

class Signup extends Component {
    constructor(props){
        super(props);
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
        const {setCurrentUser} = this.props;
        fetch('http://localhost:3000/api/users',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                username : this.state.username,
                email : this.state.email,
                password : this.state.password
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
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
                    <button className='sign-button' onClick={this.handleSubmit} type='submit'>Sign Up</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(Signup);