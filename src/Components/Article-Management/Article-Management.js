import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ManagementPreview from '../Management-Preview/Management-Preview';

import './Article-Management.css';

class ArticleManagement extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles : []
        }
    }

    componentDidMount() {
        const username = this.props.match.params.username;
        fetch(`http://localhost:3000/api/articles?username=${username}`)
        .then(res => res.json())
        .then(articles => {
            if(articles.length > 0){
                this.setState({
                    articles : articles
                })
            }
        })
    }

    render(){
        const { articles } = this.state;
        return(
            <div className='article-management'>
                <div className='article-management-container'>
                    {articles.map((article) => {
                        return <ManagementPreview key={article.slug} {...article}/>
                    })}
                </div>
            </div> 
        );
    }
}

// const mapStateToProps = state => ({
//     articles : state.article.articles
// })

export default withRouter(ArticleManagement);
