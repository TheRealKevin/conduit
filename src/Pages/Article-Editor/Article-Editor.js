import React, { Component } from 'react';
import ManagementPreview from '../../Components/Management-Preview/Management-Preview';

import './Article-Editor.css';

class ArticleEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : {
                name : 'Vibe Cat',
                username : 'vibecat',
                email : 'vibecat@mail.com'
            },
            article : {
                  slug : '',
                  title: '',
                  description: '',
                  body: '',
                  tagList: [],
                  createdAt: '',
                  updatedAt: '',
                  favorited: false,
                  favoritesCount: 0,
                  author: {
                    username: '',
                    bio: '',
                    image: '',
                    following: false
                  }
            }
            // showUpdate : false
        }
    }

    componentDidMount() {
        console.log('Props -> ',this.props)
    }

    handleChange = (event) => {
        const {value,name} = event.target;
        this.setState( (prevState) => ({
            article : {
                ...prevState.article,
                [name] : value
            },
            user : {
                ...prevState.user
            }
        }))
    }

    articleForm = () => {
        return(
            <div className='article-form-container'>
                <div className='article-form-title'>
                    <p>Article Form</p>
                </div>
                <div className='article-form'>
                    <div className='article-form-content'>
                        <label className='article-form-content-label'>title : </label>
                        <input onChange={this.handleChange} className='article-input' type='text' name='title' placeholder='title'/>
                    </div>
                    <div className='article-form-content'>
                        <label className='article-form-content-label'>slug : </label>
                        <input onChange={this.handleChange} className='article-input' type='text' name='slug' placeholder='Enter title and replace spaces with "-"  '/>
                    </div>
                    <div className='article-form-content'>
                        <label className='article-form-content-label'>description : </label>
                        <input onChange={this.handleChange} id='article-input-decription' className='article-input' type='text' name='description' placeholder='description'/>
                    </div>
                    <div className='article-form-content'>
                        <label className='article-form-content-label'>tag-list : </label>
                        <input onChange={this.handleChange} className='article-input' type='text' name='tag-list' placeholder='tag-list'/>
                    </div>
                    <div className='article-form-content'>
                        <label className='article-form-content-label'>body : </label>
                        <textarea onChange={this.handleChange} id='article-input-body' name='body'></textarea>
                    </div>
                </div>
                <div className='article-publish-container'>
                    <button type='submit' className='article-publish'>Publish</button>
                </div>
            </div>
        );
    }
    
    render(){
        return(
            <div className='article-editor'>
                <div className='article-editor-title'>
                    <p>{this.state.user.name} Article Editor</p>
                </div>
                {this.articleForm()}
            </div>
        );
    }
}

export default ArticleEditor;