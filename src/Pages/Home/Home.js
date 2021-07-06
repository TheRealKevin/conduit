import React from 'react';
import { connect } from 'react-redux';
import './Home.css';

const Home = ({user}) => {
    return(
        <div className='home'>
            <div className='home-container'>
                <div className='home-container-header'>
                    <div className='landing-page-header-text'>
                        <p>Welcome <br/> {user.username}</p>
                    </div>
                </div>
                <div className='home-feed'>
                    <div className='home-feed-header'>
                        <h3>FEED</h3>
                    </div>
                    <div className='home-feed-content'>
                        <p>Here comes your feed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    user : state.user.currentUser
})

export default connect(mapStateToProps,null)(Home);