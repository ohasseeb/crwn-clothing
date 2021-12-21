import {createStore, applyMiddleware} from 'redux';

import {persistStore} from 'redux-persist';

import logger from 'redux-logger'; 

import rootReducer from './root-reducer';
// Expects Array



// Look Up Redux documenttation
const middlewares = [logger];


// why did we do this? 
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//What is this Persistor, look up the docs
export const persistor = persistStore(store); 

export default {store, persistor};






