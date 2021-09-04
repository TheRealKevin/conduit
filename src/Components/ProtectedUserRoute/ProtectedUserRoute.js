import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import User from '../../Pages/User/User';

class ProtectedUserRoute extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const { user } = this.props;

        if(!user) return <Redirect to='/'/>

        return(
            <Route exact path={`/api/profile/:username`} render={(props) => (<User {...props}/>)}/>
        );
    }
}

const mapStateToProps = state => ({
    user : state.user.currentUser
})

export default connect(mapStateToProps,null)(ProtectedUserRoute);