import React,{Component} from 'react';
import { connect } from 'react-redux';
import ArticleManagement from '../../Components/Article-Management/Article-Management';

import { loadArticles } from '../../Redux/Article/Article.actions';

import './User.css';

//      FIXES
//  1. FETCH Articles of a particular user
 
class User extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const { loadArticles } = this.props;
        const username = this.props.match.params.username;
        // console.log(this.props);
        fetch(`http://localhost:3000/api/articles?username=${username}`)
        .then(res => res.json())
        .then(articles => {
            if(articles.length > 0){
                this.setState({
                    articlesCount : articles.length
                })
                loadArticles(articles);
            }
        })
    }

    render(){
        const {username,bio,following,image} = this.props.currentUser;
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

const mapDispatchToProps = dispatch => ({
    loadArticles : (articles) => dispatch(loadArticles(articles))
})

export default connect(mapStateToProps,mapDispatchToProps)(User);