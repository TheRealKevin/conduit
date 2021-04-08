import React, { Component } from 'react';
import Tag from '../Tag/Tag';

import './Management-Preview.css';

class ManagementPreview extends Component {
    
    constructor(props){
        super(props);
    }

    getDates = (createdAt) => {
        var date = createdAt;
        var year = date.substr(0,4), day = date.substr(5,2), month = date.substr(8,2);
        console.log(`Day ${day} , month ${month} , year ${year}`);
        return {day,month,year};
    }

    render(){
        console.log(this.props);
        const {title, tagList, createdAt} = this.props;
        const date = this.getDates(createdAt);
        console.log('Inside Preview ', title, tagList, createdAt)
        return(
            <div className='management-preview'>
                <div className='management-preview-options-container'>
                    <div className='management-preview-container'>
                        <div className='management-preview-date'>
                            
                            <p>Published on {date.day}th {date.month}, {date.year}</p>
                        </div>
                        <div className='management-preview-title'>
                            {title}
                        </div>
                            <Tag className='management-preview-tag' tagList={tagList}/>
                    </div>
                    <div className='management-preview-option-container'>
                        <button className='management-preview-option'>Update</button>
                        <button className='management-preview-option'>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManagementPreview;