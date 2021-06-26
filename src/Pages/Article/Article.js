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

    async componentDidMount(){
        const slug = this.props.match.params.slug;
        // fetch(`http://localhost:3000/api/articles/${slug}`)
        // .then(res => res.json())
        // .then(data => {
        //     if(data){
        //         console.log('From data',data);
        //         const {title, slug, description, createdAt, updatedAt, body, author} = data;
        //         this.setState({
        //             title : title,
        //             slug : slug,
        //             description : description,
        //             createdAt : createdAt,
        //             updatedAt : updatedAt,
        //             body : body, 
        //             author : {
        //                 username : author.username,
        //                 bio : author.bio,
        //                 image : author.image
        //             }
        //         }) 
        //     }
        // });
        const _article = await fetch(`http://localhost:3000/api/articles/${slug}`);     // To make async code, sync and (a)wait till we get the response from the API
        const article = await _article.json();
        this.setState({
            article : article
        })
        console.log('In state',this.state.article);
    }

    handleChange = (event) => {
        // console.log('In Article -> handleChange ',this.state.addComment)
        this.setState( (prevState) => ({
              addComment : {...prevState.addComment,
                            body : event.target.value
            }
        }))
    }

    handleSubmit = () => {
        if(!this.state.addComment.body){
            alert('Oops, you might have forgotten to write the comment')
            return;
        }
        console.log(this.state.addComment.body);
        
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
        const {title,author,favorited,favoritesCount,body} = this.state.article;
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
                    {/* <Tag tagList={tagList}/> */}
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
                    {/* <div className='article-comment-list'>
                        <CommentList comments={this.state.comments}/>
                    </div> */}
                </div>
            </article>
        );
    }
}

const mapStateToProps = state => ({
    article : state.article
})

export default connect(mapStateToProps,null)(Article);