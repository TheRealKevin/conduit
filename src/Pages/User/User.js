import React,{Component} from 'react';
import { connect } from 'react-redux';
import ArticleManagement from '../../Components/Article-Management/Article-Management';

import { loadArticles } from '../../Redux/Article/Article.actions';

import './User.css';

//      FIXES
//  1. When visiting another user's profile, on going to "My Profile", it doesn't render "My profile" of the current user
 
class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            profile : {}
        }
    }

    // async componentDidMount() {
    //     const username = this.props.match.params.username;
    //     console.log('username is',username);
    //     const _profile = await fetch(`http://localhost:3000/api/profiles/${username}`);     // To make async code, sync and (a)wait till we get the response from the API
    //     const profile = await _profile.json();
    //     this.setState({
    //         profile : profile
    //     })
    //     console.log('In User page, state is',this.state);
    // }

    componentDidMount() {
        const username = this.props.match.params.username;
        //console.log('username is',username);
        fetch(`http://localhost:3000/api/profiles/${username}`)
        .then(res => res.json())
        .then(data => {
            if(data){
                this.setState({
                    profile : data
                })
            }else{
                alert(data);
            }
        });
    }

    render(){
        const {username,bio,following,image} = this.state.profile;
        // console.log('The props are',this.props)
        return(
            <div className='user'>
                <div className='user-username-container'>
                    <h3 className='user-username'>Your Profile</h3>
                </div>
                <div className='user-container'>
                    <div className='username'>
                        <h3 id ='username-header'>{username}</h3>
                        <p id='status'>{following ? following : null}</p>
                    </div>
                    <img id='user-img'  src={image} alt='user-profile-pic'/>
                    <div className='user-info-container'>
                        <div className='user-info'>
                            <label htmlFor='bio'>Bio</label>
                            <p>{bio}</p>
                        </div>
                    </div>
                </div> 
                <div className='user-article'>
                    <div className='user-article-title-container'>
                        <h3>Your Articles</h3>
                    </div>
                    <div className='user-articles-container'>
                        <ArticleManagement/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps, null)(User);