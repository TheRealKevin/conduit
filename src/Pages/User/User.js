import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

    // componentDidMount() {
    //     const username = this.props.match.params.username;
    //     //console.log('username is',username);
    //     fetch(`https://fast-stream-91986.herokuapp.com/api/profiles/${username}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data){
    //             this.setState({
    //                 profile : data
    //             })
    //         }else{
    //             alert(data);
    //         }
    //     });
    // }

    componentDidMount() {
        console.log('In User Page',this.props);
        const username = this.props.match.params.username;
        console.log('username is',username);
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
        const { username, bio, following, image } = this.state.profile;
        const { currentUser } = this.props;
        return(
            <div className='user'>
                <div className='user-username-container'>
                    <h3 className='user-username'>Your Profile</h3>
                </div>
                <div className='user-container'>
                    <div className='username'>
                        <h3 id ='username-header'>{username}</h3>
                        <div className='username-extras'>
                            {
                                currentUser.username === username ? 
                                    <Link id='edit' to={`/api/profile/${username}/edit`}>
                                        Edit
                                    </Link>
                                    :
                                    following ? 
                                        <p id='status'>following</p>
                                            :
                                        <p id='status'>follow</p>
                            }
                        </div>
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