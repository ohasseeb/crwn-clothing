import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';

import cartReducer from './cart/cart.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {

    key: 'root',
    storage, 
    whitelist: ['cart'] // array containign the string names of all the reducers we want to store

}


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});


export default persistReducer(persistConfig, rootReducer);