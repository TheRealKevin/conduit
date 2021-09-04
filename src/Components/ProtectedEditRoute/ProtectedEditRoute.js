import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import UserEdit from '../../Pages/User-Edit/User-Edit';

class ProtectedEditRoute extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const { user } = this.props;

        if(!user) return <Redirect to='/'/>

        return(
            <Route exact path={`/api/profile/:username/edit`} render={(props) => (
                <UserEdit {...props}/>              
            )}/>
        );
    }
}

const mapStateToProps = state => ({
    user : state.user.currentUser
})

export default connect(mapStateToProps,null)(ProtectedEditRoute);