import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Tag from '../Tag/Tag';

import './Management-Preview.css';

class ManagementPreview extends Component {
    
    constructor(props){
        super(props);
    }

    getDate = (createdAt) => {
        var date = createdAt;
        var year = date.substr(0,4), day = date.substr(5,2), month = date.substr(8,2);
        // console.log(`Day ${day} , month ${month} , year ${year}`);
        return {day,month,year};
    }

    handleRemove = () => {
        const { slug, history } = this.props;
        const { username,token } = this.props.author;
        console.log('props are',this.props);
        fetch(`http://localhost:3000/api/articles/${slug}`, {
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.message === "Article deleted successfully"){
                history.push(`/api/profile/${username}`)
            }
        });
    }
 
    render(){
        // console.log(this.props);
        const {title, tagList, createdAt, slug, description, body} = this.props;
        const date = this.getDate(createdAt);
        return(
            <div className='management-preview'>
                <div className='management-preview-container'>
                    <Link className='management-preview-link' to={`/api/articles/${slug}`}>
                        <div className='management-preview-content-container'>
                            <div className='management-preview-date'>
                                <p>Published on {date.day}th {date.month}, {date.year}</p>
                            </div>
                            <div className='management-preview-title'>
                                {title}
                            </div>
                            {/* <Tag className='management-preview-tag' tagList={tagList}/> */}
                        </div>
                    </Link>
                        <div className='management-preview-edit-container'>
                            <Link to={`/api/editor/${slug}`}>
                                <button className='management-preview-edit'>Edit</button>
                            </Link>
                            <button onClick={this.handleRemove} className='management-preview-edit'>Remove</button>
                        </div>
                </div>
            </div>
        ); 
    }
} 

const mapStateToProps = state => ({
    author : state.user.currentUser
})

export default withRouter(connect(mapStateToProps,null)(ManagementPreview));