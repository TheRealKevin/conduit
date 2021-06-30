import React from 'react';
import { connect } from 'react-redux';

import ManagementPreview from '../Management-Preview/Management-Preview';

import './Article-Management.css';

    const ArticleManagement = ({articles}) => {
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

const mapStateToProps = state => ({
    articles : state.article.articles
})

export default connect(mapStateToProps,null)(ArticleManagement);
