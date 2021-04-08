import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';


import Footer from './Components/Footer/Footer';
import ManagementPreview from './Components/Management-Preview/Management-Preview';
import Navbar from './Components/Navbar/Navbar';
import ArticleEditor from './Pages/Article-Editor/Article-Editor';
import Article from './Pages/Article/Article';
import Feed from './Pages/Feed/Feed';
import Landing from './Pages/Landing/Landing';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import User from './Pages/User/User';



class App extends Component {

  constructor(){
    super();
    this.state = {
      user : {
              name : 'Kevin',
              username : 'kevin',
              email: 'kev@mail.com'
             },
      article : [
                  {
                    slug : 'vibe-cats-article',
                    title: 'How to train your dragon',
                    description: 'Ever wonder how?',
                    body: 'It takes a Jacobian',
                    tagList: ['dragons', 'training'],
                    createdAt: '2016-02-18T03:22:56.637Z',
                    updatedAt: '2016-02-18T03:48:35.824Z',
                    favorited: false,
                    favoritesCount: 0,
                    author: {
                      username: 'Jake',
                      bio: 'I work at statefarm',
                      image: 'https://i.stack.imgur.com/xHWG8.jpg',
                      following: false
                    }
                  }
                  ,
                  {
                    slug: 'how-to-train-your-dragon-2',
                    title: 'How to train your dragon 2',
                    description: 'So toothless',
                    body: 'It a dragon',
                    tagList: ['dragons', 'training'],
                    createdAt: '2016-02-18T03:22:56.637Z',
                    updatedAt: '2016-02-18T03:48:35.824Z',
                    favorited: false,
                    favoritesCount: 0,
                    author: {
                      username: 'jake',
                      bio: 'I work at statefarm',
                      image: 'https://i.stack.imgur.com/xHWG8.jpg',
                      following: false
                    }
                  }
                ]
              }
            }

  render(){
    return (
      <div className="App">
        <Navbar user={this.state.user}/>
        <Route path='/' exact component={Landing} />
        <Route path='/api/users/login' exact component={Signin}/>
        <Route path='/api/users' exact component={Signup}/>
        <Route path='/api/profile/:username' component={User}/>
        <Route exact path='/api/articles/feed' component={Feed}/>
        <Route exact path='/api/articles/:slug' render={(props) => (<Article {...this.state.article}/>)}/>
        <Route path='/api/editor' component={ArticleEditor}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
