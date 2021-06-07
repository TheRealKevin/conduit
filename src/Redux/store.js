import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];    // Using array, as in applyMiddleware(), we can spread the array and apply the middlewares individually

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;