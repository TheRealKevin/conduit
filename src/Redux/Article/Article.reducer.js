import { articleActionTypes } from './Article.types';

const INITIAL_STATE = {
    article : {},
    articles : []
}

const articleReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case articleActionTypes.GET_ARTICLE :
            return {
                ...state,
                article : action.payload
            }
        case articleActionTypes.LOAD_ARTICLES : 
            return {
                ...state,
                articles : action.payload
            }
        default : 
            return state;
    }
}

export default articleReducer;