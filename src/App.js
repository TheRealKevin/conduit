import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {connect} from 'react-redux'

import './App.css';


import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import ArticleEditor from './Pages/Article-Editor/Article-Editor';
import Article from './Pages/Article/Article';
import Feed from './Pages/Feed/Feed';
import Landing from './Pages/Landing/Landing';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import User from './Pages/User/User';
import ArticleCreator from './Pages/Article-Creator/Article-Creator';
import Home from './Pages/Home/Home';
import ProtectedEditRoute from './Components/ProtectedEditRoute/ProtectedEditRoute';
import ProtectedUserRoute from './Components/ProtectedUserRoute/ProtectedUserRoute';
import UserEdit from './Pages/User-Edit/User-Edit';

/*  NOTES  */

// 1. FIX Articles.js
// 2. Username should have no spaces (can use special characters instead) 

class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const { user } = this.props;
      return (
        <div className="App">
          <Navbar user={user}/>
          <Route path='/' exact render={() => 
              user ? (
                <Redirect to={`/api/profile/${user.username}`}/>
              ) : (
                <Landing/>
              )
          }/>
          <Route path='/api/home' exact component={Home}/>
          <Route path='/api/users/login' exact render={(props) => 
              user ? (
                <Redirect to={`/api/profile/${user.username}`}/>
              ) : (
                <Signin {...props}/>
              )
          }/>
          <Route path='/api/users' exact render={(props) => 
              user ? (
                <Redirect to={`/api/profile/${user.username}`}/>
              ) : (
                <Signup {...props}/>
              )
          }/>

          {/* <Route exact path='/api/profile/:username' component={User}/> */}
          <Route exact path='/api/feed' component={Feed}/>
          <Route exact path='/api/articles/:slug' render={(props) => (<Article {...props}/>)}/>

          {/* <Route path='/api/creator' component={ArticleCreator}/> */}
          <Route path='/api/creator' exact render={(props) => 
              user ? (
                <ArticleCreator {...props}/>
              ) : (
                <Redirect to='/'/>
              )
          }/>
          <Route path='/api/editor/:slug' component={ArticleEditor}/>
          <Route path='/api/editor/:slug' exact render={(props) => 
              user ? (
                <ArticleEditor {...props}/>
              ) : (
                <Redirect to='/'/>
              )
          }/>

          <Route path='/' component={ProtectedUserRoute}/>
          <Route path='/' component={ProtectedEditRoute}/>

          {/* TO BE UNCOMMENETED  <Route path={`/api/profile/${user.username}`} render={(props) => (<User {...props}/>)}/> */}
          {/* TO BE UNCOMMENTED <Route path={`/api/profile/${user.username}/edit`} exact render={() => 
              user ? (
                <UserEdit/>
              ) : (
                <Redirect to='/'/>
              )
          }/> */}
          {/* <Footer/> */}
        </div>
      );
    }
  } 

const mapStateToProps = state => ({
  user : state.user.currentUser
})

export default connect(mapStateToProps,null)(App);
