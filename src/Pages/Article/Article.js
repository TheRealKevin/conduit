import React, {Component} from 'react';
import './Article.css';

import { connect } from 'react-redux';

import { getArticle } from '../../Redux/Article/Article.actions';
 
import Tag from '../../Components/Tag/Tag';
import CommentList from '../../Components/CommentList/CommentList';
import Seperator from '../../Components/Seperator/Seperator';

/* FIXES REQUIRED */

//  * CANT READ PROPERTY OF AUTHOR UNDEFINED
//  1. Written on Date format function in Comment.js
//  2. Add Edit comment button
//  3. Link the comments author details to current user
//  4. Fix TagList sizing 


class Article extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            loading : 'false',
            article : {
                slug : '',
                title : '',
                description : '',
                body : '',
                createdAt : '',
                updatedAt : '',
                author : {
                    username : '',
                    bio : '',
                    image : ''
                }
            },
            comment : {
                body : ''
            }
        }
    }


    async componentDidMount(){
        const slug = this.props.match.params.slug;
        const _article = await fetch(`https://fast-stream-91986.herokuapp.com/api/articles/${slug}`);     // To make async code, sync and (a)wait till we get the response from the API
        const article = await _article.json();
        this.setState({
            article : article
        })
    }

    // async componentDidMount(){
    //     const slug = this.props.match.params.slug;
    //     const _article = await fetch(`http://localhost:3000/api/articles/${slug}`);     // To make async code, sync and (a)wait till we get the response from the API
    //     const article = await _article.json();
    //     this.setState({
    //         article : article
    //     })
    // }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            ...prevState,
            comment : {
                [name] : value
            }
        }))
    }

    handleSubmit = () => {
        const slug = this.props.match.params.slug;
        const { token } = this.props.user;
        const comment = this.state.comment;
        fetch(`https://fast-stream-91986.herokuapp.com/api/articles/${slug}/comments`, {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Token ${token}`
            },
            body : JSON.stringify({comment})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data){
                window.location.reload()           // To refresh page and reflect changes after article is deleted
            }
        })
    }

    // handleSubmit = () => {
    //     const slug = this.props.match.params.slug;
    //     const { token } = this.props.user;
    //     const comment = this.state.comment;
    //     fetch(`http://localhost:3000/api/articles/${slug}/comments`, {
    //         method : 'POST',
    //         headers : {
    //             'Content-Type': 'application/json',
    //             'Authorization' : `Token ${token}`
    //         },
    //         body : JSON.stringify({comment})
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if(data){
    //             window.location.reload()           // To refresh page and reflect changes after article is deleted
    //         }
    //     })
    // }

    handleFollowing = () => {
        console.log('handleFollowing ', this.state.article.author.following)
    }
    
    render(){
        const {title, author, body} = this.state.article;
        const slug = this.props.match.params.slug;
        const { user } = this.props;

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
                                <p>{author.bio}</p>
                                {
                                    user.username === author.username ? 
                                        null 
                                            :
                                        author.following ? 
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
                    {/* <Tag tagList={tagList}/> */}
                    <div className='favorite-socials'>
    
                    </div>
                </div>
                <div className='author-container'>
                    <div className='author-footer-details'>
                        <div className='author-details-header'>
                            <div className='author-pic'>
                                <div className='author-pic-container'>
                                    <img className='author-img' src={author.image} alt='author-img'/>
                                </div>
                            </div>
                            <div className='author-details-container'>
                                <div className='author-details'>
                                    <p id='written'>WRITTEN BY</p>
                                    <div className='author-details-info'>
                                        <p id='author-username'>{author.username}</p>
                                    </div>
                                </div>
                                {
                                    user.username === author.username ? 
                                        null 
                                            :
                                            author.following ? 
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
                {
                    this.state.loading === 'true' ? 
                        <h3>Loading</h3>
                            :
                        <div className='article-comment'>
                            <p id='comment'>Comments</p>
                            <div className='article-comment-generator'>
                                <div className='article-comment-generator-container'>
                                    <textarea onChange = {this.handleChange} id='article-comment-generator-text' name='body' type='text' placeholder='Write your thoughts ...'/>
                                    <div className='article-comment-generator-submit'>
                                        <button onClick={this.handleSubmit} className='post-button'>Post</button>
                                    </div>
                                </div>
                            </div>
                            <div className='article-comment-list'>
                                <CommentList slug={slug}/>
                            </div>
                        </div>  
                }
            </article>
        );
    }
}

const mapStateToProps = state => ({
    user : state.user.currentUser
})

export default connect(mapStateToProps,null)(Article);