import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

import storage from 'redux-persist/lib/storage';

const middlewares = [logger];    // Using array, as in applyMiddleware(), we can spread the array and apply the middlewares individually

const persistConfig = { 
    key : "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

