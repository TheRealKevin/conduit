import React, {Component} from 'react';
import './Article.css';

import Tag from '../../Components/Tag/Tag';
import CommentList from '../../Components/CommentList/CommentList';
import Seperator from '../../Components/Seperator/Seperator';

/* FIXES REQUIRED */

//  1. Written on Date format function in Comment.js
//  2. Add Edit comment button
//  3. Link the comments author details to current user
//  4. Fix TagList sizing


class Article extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            article : {
                    slug : '',
                    title: '',
                    description: '',
                    body: '',
                    tagList: [],
                    createdAt: '',
                    updatedAt: '',
                    favorited: false,
                    favoritesCount: 0,
                    author: {
                      username: '',
                      bio: '',
                      image: '',
                      following: false
                    }
                },
            comments : [
                {
                    id : 1,
                    createdAt: '16-02-18T03:22:56.637Z',
                    updatedAt: '16-02-18T03:22:56.637Z',
                    body : 'It takes a Jacobian',
                    author : {
                        username : 'Doggo',
                        bio : 'Skert Skert',
                        image : 'https://previews.123rf.com/images/virgonira/virgonira1104/virgonira110400018/9204773-smiling-alaskan-malamute.jpg',
                        following : false
                    }
                },
                {
                    id : 2,
                    createdAt: '02-05-21T03:22:56.637Z',
                    updatedAt: '02-05-21T03:22:56.637Z',
                    body : 'Smells like teen spirit',
                    author : {
                        username : 'Red-Panda',
                        bio : 'Mr. steal your girl',
                        image : 'https://i.imgur.com/48d0SQ9.jpg',
                        following : true
                    }
                }
            ],
            addComment : {
                id : '',
                createdAt : '',
                updatedAt : '',
                body : '',
                author : {
                    username : '',
                    bio : '',
                    image : '',
                    following : false
                }
            }
        }
    }

    componentDidMount(){
        console.log('In didMount Yoooooooo');
        const {slug,title,description,body,tagList,createdAt,updatedAt,favorited,favoritesCount,author} = this.props;
        console.log('In onMount props are ',this.props)
        this.setState({
            slug : slug,
            title : title,
            description : description,
            body : body,
            tagList : tagList,
            createdAt : createdAt,
            updatedAt : updatedAt,
            favorited : favorited,
            favoritesCount : favoritesCount,
            author : {
                username : author.username,
                bio : author.bio,
                image : author.image,
                following : author.following
            }
        })
        console.log('In didMount ',this.state);
    }

    handleChange = (event) => {
        // console.log('In Article -> handleChange ',this.state.addComment)
        this.setState( (prevState) => ({
              addComment : {...prevState.addComment,
                            body : event.target.value
            }
        }))
    }

    // componentDidUpdate(){
    //     console.log('In componentDidUpdate',this.state.comments);
    // }

    handleSubmit = () => {
        if(!this.state.addComment.body){
            alert('Oops, you might have forgotten to write the comment')
            return;
        }
        console.log(this.state.addComment.body)
       this.setState( (prevState) => ({   
        comments : [
               ...prevState.comments,
               {
                    id : prevState.comments.length+1, 
                    body : prevState.addComment.body,
                    createdAt : new Date().toString(),
                    updatedAt : new Date().toString(),
                    author : {
                        username : 'Arsenal FC',
                        bio : 'Random Bio',
                        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBufnXiExP5gTz3X4Zwjku_fv3fGaZPVxuYq7koL4xJ0Pvp6y8KT7MV9e1MyoHA8Hu_O8&usqp=CAU',
                        following : true
                    }
               }
           ]
       }))
    }

    handleFollowing = () => {
        console.log('handleFollowing ', this.state.article.author.following)
        // this.setState((prevState) => ({
        //     article : {
        //         ...prevState.article,
        //         author : {
        //             ...prevState.article.author,
        //             following : !following
        //         }
        //     }
        // }))
    }
    
    render(){
        const {title,author,favorited,favoritesCount,tagList,body} = this.state;
        return(
            <article>
                <div className='article-header'>
                    <div className='article-title-container'>
                        <h1>{title}</h1>
                    </div>
                    <div className='author-info-container'>
                        <div className='author-pic-container'>
                            <img className='author-img' src={author.image} alt='author-img'/>
                        </div>
                        <div className='author-details'>
                            <div className='author-info'>
                                <h3 id='author-username'>{author.username}</h3>
                                {author.following ? 
                                    <div className='following-status'>
                                        <h4 id='following'>Following</h4>
                                    </div> 
                                    :
                                    <button className='sign-button' id='follow-btn'>Follow</button>
                                }
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='seperator'>
                    <Seperator/>
                </div> 
                <section>
                    <div className='article-container'>
                        <div className='article-content'>
                            <p>{body}</p>
                        </div>
                    </div>
                </section>
                <div className='seperator'>
                    <Seperator/>
                </div>
                <div className='article-extra'>
                    <Tag tagList={tagList}/>
                    <div className='favorite-socials'>
    
                    </div>
                </div>
                <div className='author-container'>
                    <div className='author-footer-details'>
                        <div className='author-details-header'>
                            <div className='author-pic-container'>
                                <img className='author-img' src={author.image} alt='author-img'/>
                            </div>
                            <div>
                                <p id='written'>WRITTEN BY</p>
                            </div>
                            <div className='author-details-bio-container'>
                                <p id='author-username'>{author.username}</p>
                                {
                                    author.following ?
                                    <div className='following-status'>
                                        <h4 onClick={this.handleFollowing} id='following'>Following</h4>
                                    </div> 
                                    :
                                    <button onClick={this.handleFollowing} className='sign-button' id='follow-btn'>Follow</button>
                                }
                            </div>
                        </div>
                        <div className='author-details-bio'>
                            <div className='author-bio-container'>
                                <p>{author.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='article-comment'>
                    <p id='comment'>Comments</p>
                    <div className='article-comment-generator'>
                        <div className='article-comment-generator-container'>
                            <textarea onChange = {this.handleChange} id='article-comment-generator-text' type='text' placeholder='Write your thoughts ...'/>
                            <div className='article-comment-generator-submit'>
                                <button onClick={this.handleSubmit} className='post-button'>Post</button>
                            </div>
                        </div>
                    </div>
                    <div className='article-comment-list'>
                        <CommentList comments={this.state.comments}/>
                    </div>
                </div>
            </article>
        );
    }
}

export default Article;