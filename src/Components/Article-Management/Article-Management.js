import React from 'react';
import { connect } from 'react-redux';

import ManagementPreview from '../Management-Preview/Management-Preview';

import './Article-Management.css';

// const db = {
//     articles : [
//                     {
//                     slug : 'vibe-cats-article',
//                     title: 'How to train your dragon',
//                     description: 'Ever wonder how?',
//                     body: 'It takes a Jacobian',
//                     tagList: ['dragons', 'training'],
//                     createdAt: '2016-02-18T03:22:56.637Z',
//                     updatedAt: '2016-02-18T03:48:35.824Z',
//                     favorited: false,
//                     favoritesCount: 0,
//                     author: {
//                         username: 'Jake',
//                         bio: 'I work at statefarm',
//                         image: 'https://i.stack.imgur.com/xHWG8.jpg',
//                         following: false
//                     }
//                     }
//                     ,
//                     {
//                     slug: 'how-to-train-your-dragon-2',
//                     title: 'How to train your dragon 2',
//                     description: 'So toothless',
//                     body: 'It a dragon',
//                     tagList: ['dragons', 'training'],
//                     createdAt: '2016-02-18T03:22:56.637Z',
//                     updatedAt: '2016-02-18T03:48:35.824Z',
//                     favorited: false,
//                     favoritesCount: 0,
//                     author: {
//                         username: 'jake',
//                         bio: 'I work at statefarm',
//                         image: 'https://i.stack.imgur.com/xHWG8.jpg',
//                         following: false
//                     }
//                     }
//                 ]
//             } 

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
