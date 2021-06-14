import { UserActionTypes } from './User.types';

const INITIAL_STATE = {
    currentUser : null
};

const userReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_STATE : 
            return {
                ...state,
                currentUser : action.payload
            };
        case UserActionTypes.REMOVE_CURRENT_USER : 
            return {
                ...state,
                currentUser : null
            }
        default : 
            return state;
    }
};

export default userReducer;