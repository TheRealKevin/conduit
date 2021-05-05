import React from 'react';
import './Preview.css';
import clap from './clapping_25.png';
import comment from './comment_25.png';

import Seperator from '../Seperator/Seperator';

const Preview = () => {
    return(
        <div className='preview'>
            <div className='preview-container'>
                <div className='preview-publish'>
                    <p>Published on 29 June,2020</p>
                </div>
                <div className='preview-content'>
                    <section>
                        <div className='preview-tag'>
                            <h2>Football</h2>
                        </div>
                        <div className='preview-title'>
                            <h1>Why Kieran Tierney is the best LB in the Prem</h1>
                        </div>
                    </section>
                    <div className='preview-extras'>
                        <div className='favorites'>
                            <div className='favorites-icon'>
                                <button className='preview-extras-buttons'>
                                    <img src={clap} alt='clapping-img'/>
                                </button>
                            </div>
                            <div className='favorites-count'>
                                <p>69</p>
                            </div>
                        </div>
                        <div className='comments'>
                            <div className='comments-icon'>
                                <button className='preview-extras-buttons'>
                                    <img src={comment} alt='comment-img'/>
                                </button>
                            </div>
                            <div className='comments-count'>
                                <p>69</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='seperator'>
                    <span className='seperator-span'>.</span>
                    <span className='seperator-span'>.</span>
                    <span className='seperator-span'>.</span>
                </div> */}
                <Seperator/>
            </div>
        </div>
    );
}

export default Preview;