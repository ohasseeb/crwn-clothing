import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'; 

import rootReducer from './root-reducer';
// Expects Array



// Look Up Redux documenttation
const middlewares = [logger];


// why did we do this? 
const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default store;






