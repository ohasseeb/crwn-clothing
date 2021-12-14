// Utility functions allow us to kepe our files clean
// and organize functions that we may need in multiple filesin one locatoin


export const addItemToCart = (cartItems, cartItemToAdd ) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id == cartItemToAdd.id
        );


        if (existingCartItem) {
            return cartItems.map(cartItem => 
                cartItem.id == cartItemToAdd.id
                ? {... cartItem, quantity: cartItem.quantity + 1}
                 : cartItem 
                )
        }


        return [...cartItems, {...cartItemToAdd, quantity: 1}]

}

