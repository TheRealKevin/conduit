import { articleActionTypes } from './Article.types';

export const getArticle = (article) => ({
    type : articleActionTypes.GET_ARTICLE,
    payload : article
})

export const loadArticles = (articles) => ({
    type : articleActionTypes.LOAD_ARTICLES,
    payload : articles
})