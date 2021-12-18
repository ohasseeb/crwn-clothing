import React from 'react';
import {createSelector} from 'reselect'; 

// input selector is a function gets the whole state
// and returns a slice of it
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart], 
    (cart) => cart.cartItems // This is now Memoized
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart=> cart.hidden
)

export const selectCartItemsCount = createSelector (
    [selectCartItems],
    cartItems =>
         cartItems.reduce((accumulatedQuantity , cartItem) => accumulatedQuantity + cartItem.quantity, 
         0
         ) 

);

export const selectCartTotal = createSelector (
    [selectCartItems],
    cartItems =>
    cartItems.reduce((accumulatedQuantity , cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 
    0
    ) 
)