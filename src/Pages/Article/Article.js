import React from 'react';
import './Article.css';
import Comment from '../../Components/Comment/Comment';

const Article = () => {
    return(
        <article>
            <div className='article-header'>
                <div className='article-title-container'>
                    <h1>Vibe Cat's Article</h1>
                </div>
                <div className='author-info-container'>
                    <div className='author-pic-container'>
                        <img id='author-img' src='https://pbs.twimg.com/profile_images/1320782895318007811/PrmXyscz.jpg' alt='author-img'/>
                    </div>
                    <div className='author-details'>
                        <div className='author-info'>
                            <h3 id='author-username'>Vibe Cat</h3>
                            <button className='sign-button' id='follow-btn'>Follow</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='seperator'>
                <div className='seperator-container'>
                    <span className='seperator-span'>.</span>
                    <span className='seperator-span'>.</span>
                    <span className='seperator-span'>.</span>
                </div>
            </div>
            <section>
                <div className='article-container'>
                    <div className='article-content'>
                        <p>Instead, I’m writing from the downstairs couch, still cozied up in a blanket but buzzing from a morning of friends and fried chicken. I’m reading off countless notes from my phone — thoughts that have randomly popped up in the weeks since. I didn’t really know how I would start this, no matter the room or state I was in, but it feels right to begin with a thank you. For weeks, our floors have been covered in flowers of kindness. Notes have flooded in and have each been read with our own teary eyes. Social media messages from strangers have consumed my days, most starting with, “you probably won’t read this, but…”. I can assure you, I did.</p>
                    </div>
                </div>
            </section>
            <div className='seperator'>
                <span className='seperator-span'>.</span>
                <span className='seperator-span'>.</span>
                <span className='seperator-span'>.</span>
            </div>
            <div className='article-extra'>
                <div className='tag-list-container'>
                    <div className='tag-list'>
                        <ul className='tag-options-container'>
                            <li className='tag-options'>Crime</li>
                            <li className='tag-options'>Technology</li>
                            <li className='tag-options'>Science</li>
                            <li className='tag-options'>Thriller</li>
                            <li className='tag-options'>Action</li>
                        </ul>
                    </div>
                </div>
                <div className='favorite-socials'>

                </div>
            </div>
            <div className='author-container'>
                <div className='author-footer-details'>
                    <div className='author-details-header'>
                        <div className='author-pic-container'>
                            <img id='author-img' src='https://pbs.twimg.com/profile_images/1320782895318007811/PrmXyscz.jpg' alt='author-img'/>
                        </div>
                        <div>
                            <p id='written'>WRITTEN BY</p>
                        </div>
                        <div className='author-details-bio-container'>
                            <p id='author-username'>Vibe Cat</p>
                            <button className='sign-button' id='follow-btn'>Follow</button>
                        </div>
                    </div>
                    <div className='author-details-bio'>
                        <div className='author-bio-container'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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