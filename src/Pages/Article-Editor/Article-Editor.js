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
        console.log('Props -> ',this.props);
        // console.log('State before willMount -> ',this.state);

        const slug = this.props.match.params.slug;
        const _article = await fetch(`https://fast-stream-91986.herokuapp.com/${slug}`);     // To make async code, sync and (a)wait till we get the response from the API
        const article = await _article.json();
        // console.log('article is',article);
        this.setState({
            article : article
        })
        // console.log('State after willMount -> ',this.state);
    }

    // async componentDidMount() {
    //     console.log('Props -> ',this.props);
    //     // console.log('State before willMount -> ',this.state);

    //     const slug = this.props.match.params.slug;
    //     const _article = await fetch(`http://localhost:3000/${slug}`);     // To make async code, sync and (a)wait till we get the response from the API
    //     const article = await _article.json();
    //     // console.log('article is',article);
    //     this.setState({
    //         article : article
    //     })
    //     // console.log('State after willMount -> ',this.state);
    // }
 
    handleChange = (event) => {
        const {value,name} = event.target;
        this.setState( (prevState) => ({
            article : {
                ...prevState.article,
                [name] : value
            }
        }))
    }

    handleSubmit = () => {
        console.log('handleSubmit clicked');
        const { article } = this.state;
        const { history, match } = this.props;
        const slug = match.params.slug;
        const token = article.author.token;
        fetch(`https://fast-stream-91986.herokuapp.com/${slug}`, {
            method : 'PATCH',
            headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Token ${token}`
            },
            body : JSON.stringify({article})
        })
        .then( res => res.json())
        .then(data => {
            // console.log(data);
            if(data){
                history.push(`/api/articles/${data.slug}`);
            }else{
                alert(data.errors.body[0]);
            }
        })
    }

    // handleSubmit = () => {
    //     console.log('handleSubmit clicked');
    //     const { article } = this.state;
    //     const { history, match } = this.props;
    //     const slug = match.params.slug;
    //     const token = article.author.token;
    //     fetch(`http://localhost:3000/${slug}`, {
    //         method : 'PATCH',
    //         headers : {
    //             'Content-Type': 'application/json',
    //             'Authorization' : `Token ${token}`
    //         },
    //         body : JSON.stringify({article})
    //     })
    //     .then( res => res.json())
    //     .then(data => {
    //         // console.log(data);
    //         if(data){
    //             history.push(`/api/articles/${data.slug}`);
    //         }else{
    //             alert(data.errors.body[0]);
    //         }
    //     })
    // }

    articleForm = () => {
        const { title, description, body } = this.state.article;
        return(
            <div className='form-container'>
                <div className='form-title'>
                    <p>Make the changes you wish to your article</p>
                </div>
                <div className='form'>
                    <div className='form-content'>
                        <label className='form-label'>Title</label>
                        <input className='form-input' onChange={this.handleChange} type='text' name='title'  value={title || ''} />
                    </div>
                    <div className='form-content'>
                        <label className='form-label'>Description</label>
                        <textarea className='form-input' onChange={this.handleChange} type='text' name='description'  value={description || ''}/>
                    </div>
                    <div className='form-content'>
                        <label className='form-label'>Body</label>
                        <textarea className='form-input' onChange={this.handleChange} type='text' name='body'  value={body || ''}/>
                    </div>
                </div>
                <div className='form-publish-container'>
                    <button type='submit' onClick={this.handleSubmit} className='form-publish'>Publish</button>
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