import React, { Component } from 'react';
import { connect } from 'react-redux';
import ManagementPreview from '../../Components/Management-Preview/Management-Preview';

import './Article-Editor.css';

//         INCOMPLETE
// ------> Copying previous content into inputs for editing articles

class ArticleEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            article : {
                  slug : '',
                  title: '',
                  description: '',
                  body: '',
                  createdAt: '',
                  updatedAt: '',
                  author: {
                    username: '',
                    bio: '',
                    image: ''
                  }
            }
        }
    }

    async componentDidMount() {
        // console.log('Props -> ',this.props);
        // console.log('State before willMount -> ',this.state);

        const slug = this.props.match.params.slug;
        const _article = await fetch(`http://localhost:3000/api/articles/${slug}`);     // To make async code, sync and (a)wait till we get the response from the API
        const article = await _article.json();
        console.log('article is',article);
        this.setState({
            article : article
        })
        // console.log('State after willMount -> ',this.state);
    }

    handleChange = (event) => {
        const {value,name} = event.target;
        this.setState( (prevState) => ({
            article : {
                ...prevState.article,
                [name] : value
            }
        }))
        //console.log('After handleChange',this.state.article);
    }

    handleSubmit = async () => {
        console.log('handleSubmit clicked');
        const { article } = this.state;
        const { history, match } = this.props;
        const slug = match.params.slug;
        const token = article.author.token;
        fetch(`http://localhost:3000/api/articles/${slug}`, {
            method : 'PATCH',
            headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Token ${token}`
            },
            body : JSON.stringify({article})
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
            if(data){
                history.push(`/api/articles/${data.slug}`);
            }else{
                alert(data.errors.body[0]);
            }
        })
    }

    articleForm = () => {
        const { title, description, body } = this.state.article;
        return(
            <div className='article-form-container'>
                <div className='article-form-title'>
                    <p>Article Form</p>
                </div>
                <div className='article-form'>
                    <div className='article-form-content'>
                        <label className='article-form-content-label'>title : </label>
                        <input onChange={this.handleChange} className='article-input' value={title || ''} type='text' name='title' placeholder='title'/>
                    </div>
                    <div className='article-form-content'>
                        <label className='article-form-content-label'>description : </label>
                        <textarea onChange={this.handleChange} id='article-input-decription' className='article-input' value={description || ''} type='text' name='description' placeholder='description'/>
                    </div>
                    {/* <div className='article-form-content'>
                        <label className='article-form-content-label'>tag-list : </label>
                        <input onChange={this.handleChange} className='article-input' type='text' name='tag-list' placeholder='tag-list'/>
                    </div> */}
                    <div className='article-form-content'>
                        <label className='article-form-content-label'>body : </label>
                        <textarea onChange={this.handleChange} id='article-input-body' value={body || ''} name='body'/>
                    </div>
                </div>
                <div className='article-publish-container'>
                    <button type='submit' onClick={this.handleSubmit} className='article-publish'>Publish</button>
                </div>
            </div>
        );
    }
    
    render(){
        const { article } = this.state;
        return(
            <div className='article-editor'>
                <div className='article-editor-title'>
                    <p>{article.author.username} Article Editor</p>
                </div>
                {this.articleForm()}
            </div>
        );
    }
}

export default ArticleEditor;