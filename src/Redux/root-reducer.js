import { combineReducers } from 'redux';

import userReducer from './User/User.reducer';
import articleReducer from './Article/Article.reducer';
import storage from 'redux-persist/lib/storage';

import { UserActionTypes } from './User/User.types';


const appReducer = combineReducers({
    user : userReducer,
    article : articleReducer
});

const rootReducer = (state, action) => {
    if(action.type === UserActionTypes.REMOVE_CURRENT_USER){
        storage.removeItem('persist:root');
        state = undefined;
    }
    return appReducer(state,action);
}

export default rootReducer;