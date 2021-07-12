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

    handleSubmit = () => {
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
            console.log(data);
            if(data){
                history.push(`/api/articles/${data.slug}`);
            }else{
                alert(data.errors.body[0]);
            }
        })
    }

    articleForm = () => {
        return(
            <div className='form-container'>
                <div className='form-title'>
                    <p>Pen down and share what's on your mind</p>
                </div>
                <div className='form'>
                    <div className='form-content'>
                        <label className='form-label'>Title</label>
                        <input className='form-input' onChange={this.handleChange} type='text' name='title' />
                    </div>
                    <div className='form-content'>
                        <label className='form-label'>Description</label>
                        <textarea className='form-input' onChange={this.handleChange} type='text' name='description'/>
                    </div>
                    <div className='form-content'>
                        <label className='form-label'>Body</label>
                        <textarea className='form-input' onChange={this.handleChange} type='text' name='body'/>
                    </div>
                </div>
                <div className='form-publish-container'>
                    <button type='submit' onClick={this.handleSubmit} className='form-publish'>Publish</button>
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