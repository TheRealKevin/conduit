import React from 'react';
import './CommentList.css';

import Comment from '../Comment/Comment';

const CommentList = ({comments}) => {
    return(
        <div className='comment-list'>
            <div className='comment-list-container'>
                {comments.map( (comment) => {
                    return <Comment key={comment.id} comment={comment}/>
                })}
            </div>
        </div>
    );
}

export default CommentList;