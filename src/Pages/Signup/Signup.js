import React,{Component} from 'react';
import './Signup.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentUser } from '../../Redux/User/User.actions';

//      FIXES
//  1. Error handling returns a string. So it will contain the value but also the key merged together


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

    // handleSubmit = () => {
    //     const {setCurrentUser,history} = this.props;

    //     const user = {
    //         email : this.state.email,
    //         password : this.state.password,
    //         username : this.state.username
    //     }
    //     fetch('https://fast-stream-91986.herokuapp.com/api/users',{
    //         method : 'POST',
    //         headers : {'Content-Type' : 'application/json'},
    //         body : JSON.stringify({user})
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data){
    //             console.log('In signup page',data);
    //             setCurrentUser(data);
    //             history.push('/')
    //         }
    //     })
    //     .catch(err => {
    //         console.log('Erro : In signup page',err);
    //     })
    // }

    handleSubmit = () => {
        const {setCurrentUser,history} = this.props;

        const user = {
            email : this.state.email,
            password : this.state.password,
            username : this.state.username
        }
        fetch('http://localhost:3000/api/users',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({user})
        })
        .then(res => {
            if(res.ok){
                return res.json();
            }
            return res.text().then(text => {throw new Error(text)});
        })
        .then(data => {
            if(data){
                console.log('In signup page',data);
                setCurrentUser(data);
                history.push('/')
            }
        })
        .catch(err => {
            alert(err.message);
        })
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
                    <Link id='signup-btn' to='/api/users/login'>
                        Sign In
                    </Link>
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