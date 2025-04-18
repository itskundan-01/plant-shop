export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export const addToCart = (plant) => {
    return {
        type: ADD_TO_CART,
        payload: plant,
    };
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    };
};

export const increaseQuantity = (id) => {
    return {
        type: INCREASE_QUANTITY,
        payload: id,
    };
};

export const decreaseQuantity = (id) => {
    return {
        type: DECREASE_QUANTITY,
        payload: id,
    };
};