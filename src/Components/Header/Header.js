import React from 'react';
import './Header.css';

/*
    header -> as we're creating a header
    intro -> as it'll be the landing showpiece
    overlay -> as a light black tint is above the background img
    container -> The container is the template for the whole header
    row -> The content inside the container such as text and buttons
*/

const Header = () => {
    return(
        <header id='header'>    
            <div className='intro'>
                <div className='overlay'>
                    <div className='header-container'>
                        <div className='intro-content'>
                            <h1 id='intro-header'>Explore new <br/>perspectives</h1>
                            <p id='text'>
                                Read and share ideas from independent voices, world-class publications, and experts from around the globe. Everyone's welcome
                            </p>
                            <button id='header-btn' type='button'>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;