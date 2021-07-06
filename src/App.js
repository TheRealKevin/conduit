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
                <Redirect to='/api/home'/>
              ) : (
                <Landing/>
              )
          }/>
          {/* <Route path='/' exact component={Landing} /> */}
          <Route path='/api/home' exact component={Home}/>
          <Route path='/api/users/login' exact render={(props) => 
              user ? (
                <Redirect to='/api/home'/>
              ) : (
                <Signin {...props}/>
              )
          }/>
          <Route path='/api/users' exact render={(props) => 
              user ? (
                <Redirect to='/api/home'/>
              ) : (
                <Signup {...props}/>
              )
          }/>
          {/* <Route path='/api/users/login' exact render={(props) => (<Signin {...props}/>)}/> */}
          {/* <Route path='/api/users' exact render={(props) => (<Signup {...props}/>)}/> */}
          <Route path='/api/profile/:username' render={(props) => (<User {...props}/>)}/>
          <Route exact path='/api/articles/feed' component={Feed}/>
          <Route exact path='/api/articles/:slug' render={(props) => (<Article {...props}/>)}/>
          <Route path='/api/creator' component={ArticleCreator}/>
          <Route path='/api/editor/:slug' component={ArticleEditor}/>
          <Footer/>
        </div>
      );
    }
  } 

const mapStateToProps = state => ({
  user : state.user.currentUser
})

export default connect(mapStateToProps,null)(App);
