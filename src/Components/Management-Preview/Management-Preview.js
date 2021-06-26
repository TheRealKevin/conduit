import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                            <button className='management-preview-edit'>Remove</button>
                        </div>
                </div>
            </div>
        ); 
    }
} 

export default ManagementPreview;