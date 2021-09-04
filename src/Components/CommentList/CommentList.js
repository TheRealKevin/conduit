import React,{ Component } from 'react';
import './CommentList.css';

import Comment from '../Comment/Comment';

class CommentList extends Component {
    constructor(props){
        super(props);

        this.state = {
            comments : []
        }
    }

    // async componentDidMount(){
    //     const slug = this.props.slug;
    //     const _comments = await fetch(`https://fast-stream-91986.herokuapp.com/api/articles/${slug}/comments`);     // To make async code, sync and (a)wait till we get the response from the API
    //     const comments = await _comments.json();
    //     this.setState({
    //         comments : comments
    //     })
    // }

    async componentDidMount(){
        const slug = this.props.slug;
        const _comments = await fetch(`http://localhost:3000/api/articles/${slug}/comments`);     // To make async code, sync and (a)wait till we get the response from the API
        const comments = await _comments.json();
        this.setState({
            comments : comments
        })
    }

    render(){
        const { comments } = this.state;
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
}

export default CommentList;