import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Article-Creator.css';

class ArticleCreator extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            description : '',
            body : ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = async () => {
        const { history, author } = this.props;
        const token = author.token;
        const article = {
            title : this.state.title,
            description : this.state.description,
            body : this.state.body
        }
        fetch('http://localhost:3000/api/articles', {
            method : 'POST',
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

    articleForm = () => {
        return(
            <div className='article-form-container'>
                <div className='article-form-title'>
                    <p>Article Form</p>
                </div>
                <div className='article-form-content-container'>
                    <div className='article-form-content'>
                        <label className='article-form-content-label'>title : </label>
                        <input onChange={this.handleChange} className='article-input' type='text' name='title' placeholder='title'/>
                    </div>
                    <div className='article-form-content'>
                        <label className='article-form-content-label'>description : </label>
                        <textarea onChange={this.handleChange} id='article-input-decription' className='article-input' type='text' name='description' placeholder='description'/>
                    </div>
                    <div className='article-form-content'>
                        <label className='article-form-content-label'>body : </label>
                        <textarea onChange={this.handleChange} id='article-input-body' name='body'/>
                    </div>
                </div>
                <div className='article-publish-container'>
                    <button type='submit' onClick={this.handleSubmit} className='article-publish'>Publish</button>
                </div>
            </div>
        );
    }
    
    render(){
        return(
            <div className='article-creator'>
                <div className='article-creator-title'>
                    <p>Your journey to writing an article starts here</p>
                </div>
                <div className='article-form'>
                    {this.articleForm()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    author : state.user.currentUser
})

export default connect(mapStateToProps,null)(ArticleCreator);