import { combineReducers } from 'redux';

import userReducer from './User/User.reducer';
import articleReducer from './Article/Article.reducer';

export default combineReducers({
    user : userReducer,
    article : articleReducer
})