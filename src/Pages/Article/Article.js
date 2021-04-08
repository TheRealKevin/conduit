import React from 'react';
import './Article.css';

import Tag from '../../Components/Tag/Tag';
import Comment from '../../Components/Comment/Comment';
import Seperator from '../../Components/Seperator/Seperator';

/* img link -> https://pbs.twimg.com/profile_images/1320782895318007811/PrmXyscz.jpg */
/* body -> Instead, I’m writing from the downstairs couch, still cozied up in a blanket but buzzing from a morning of friends and fried chicken. I’m reading off countless notes from my phone — thoughts that have randomly popped up in the weeks since. I didn’t really know how I would start this, no matter the room or state I was in, but it feels right to begin with a thank you. For weeks, our floors have been covered in flowers of kindness. Notes have flooded in and have each been read with our own teary eyes. Social media messages from strangers have consumed my days, most starting with, “you probably won’t read this, but…”. I can assure you, I did. */
/* bio -> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. */

const Article = ({title,author,favorited,favoritesCount,tagList,body}) => {
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
                                <h4 id='following-status'>Following</h4>
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
                                <h4 id='following-status'>Following</h4>
                                :
                                <button className='sign-button' id='follow-btn'>Follow</button>
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
            <div className='comment-title'>
                <p id='comment'>Comments</p>
                <Comment/>
            </div>
        </article>
    );
}

export default Article;