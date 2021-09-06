import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './User-Edit.css';

import { setCurrentUser } from '../../Redux/User/User.actions';

//      FIXES
//  1.  Token in PREV_STATE after login is filled with the entire user data instead of just username and email

class UserEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : {
                image : '',
                bio : ''
            }
        }
    }

    componentDidMount() {
        const { token } = this.props.user;
        // console.log('The token is',token);
        fetch(`https://fast-stream-91986.herokuapp.com/api/user`, {
            method : 'GET',
            headers : {
                'Authorization' :  `Token ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                // console.log('In user edit, data is',data);
                this.setState({
                    user : data
                })
            }
        })
    }

    // componentDidMount() {
    //     const { token } = this.props.user;
    //     // console.log('The token is',token);
    //     fetch(`http://localhost:3000/api/user`, {
    //         method : 'GET',
    //         headers : {
    //             'Authorization' :  `Token ${token}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data){
    //             // console.log('In user edit, data is',data);
    //             this.setState({
    //                 user : data
    //             })
    //         }
    //     })
    // }

    // handleChange = (event) => {
    //     const { value, name } = event.target;
    //     this.setState( (prevState) => ({
    //         user : {
    //             ...prevState.user,
    //             [name] : value
    //         }
    //     }))
    // }

    handleSubmit = () => {
        const { token } = this.props.user;
        const { setCurrentUser, history } = this.props;
        const { user } = this.state;
        fetch(`https://fast-stream-91986.herokuapp.com/api/user`, {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token}`
            },
            body : JSON.stringify({user})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                // console.log('In User Edit, fetch is',data);
                setCurrentUser(data);
                history.push(`/api/profile/${data.username}`);
            }else{
                alert(data.errors.body[0]);
            }
        })
    }

    // handleSubmit = () => {
    //     const { token } = this.props.user;
    //     const { setCurrentUser, history } = this.props;
    //     const { user } = this.state;
    //     fetch(`http://localhost:3000/api/user`, {
    //         method : 'PATCH',
    //         headers : {
    //             'Content-Type' : 'application/json',
    //             'Authorization' : `Token ${token}`
    //         },
    //         body : JSON.stringify({user})
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data){
    //             // console.log('In User Edit, fetch is',data);
    //             setCurrentUser(data);
    //             history.push(`/api/profile/${data.username}`);
    //         }else{
    //             alert(data.errors.body[0]);
    //         }
    //     })
    // }

    userEdit = () => {
        const { bio, image } = this.state.user;
        return(
            <div className='user-edit-container'>
                <div className='user-edit-form'>
                    {/* <div className='user-edit-content'>
                        <label className='user-edit-label'>password</label>
                        <input className='user-edit-input' onChange={this.handleChange} type='password' name='password' value={username || ''}/>
                    </div> */}
                    <div className='user-edit-content'>
                        <label className='user-edit-label'>image</label>
                        <input className='user-edit-input' onChange={this.handleChange} type='text' name='image' value={image || ''}/>
                    </div>
                    <div className='user-edit-content'>
                        <label className='user-edit-label'>bio</label>
                        <textarea className='user-edit-input' onChange={this.handleChange} type='text' name='bio' value={bio || ''}/>
                    </div>
                </div>
                <div className='user-edit-publish-container'>
                    <button type='submit' onClick={this.handleSubmit} className='user-edit-publish'>Edit</button>
                </div> 
            </div>
        );
    }

    render(){
        const { user } = this.props;
        return(
            <div>
                <div className='user-edit-title'>
                    <p>{user.username} Profile Edit</p>
                </div>
                <div className='user-edit'>
                    {this.userEdit()}
                </div>
            </div>
        );
        
    }
}

const mapStateToProps = state => ({
    user : state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserEdit));