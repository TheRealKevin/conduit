import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ArticleManagement from '../../Components/Article-Management/Article-Management';

import './User.css';
// import img from './img.jpg';
 
class User extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     username : '',
        //     following : false,
        //     bio : '',
        //     image : ''
        // }
    }

    // componentDidMount(){
    //     const {username,bio,image,following} = this.props;
    //     console.log('Props are ',this.props);
    //     this.setState({
    //         username : username,
    //         bio : bio,
    //         image : image,
    //         following : following
    //     })
    // }

    render(){
        const {username,bio,image,following} = this.props;
        console.log(username,bio,following ? 'following' : 'not');
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
                        {   
                            /*   email can also be added to a users profile   */ 
                            
                            /* <div className='user-info'>
                                <label for='email'>Email</label>
                                <p>vibecat@mail.com</p>
                            </div> */
                        }
                        <div className='user-info'>
                            <label for='bio'>Bio</label>
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

const mapStateToProps = ({user}) => ({
    currentUser : user.currentUser
})

export default connect(mapStateToProps,null)(User);