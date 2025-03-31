import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../types';

const initialState = {
    items: [],
    totalItems: 0,
    totalCost: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            let updatedItems;

            if (existingItemIndex >= 0) {
                const updatedItem = {
                    ...state.items[existingItemIndex],
                    quantity: state.items[existingItemIndex].quantity + 1,
                };
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
            }

            return {
                ...state,
                items: updatedItems,
                totalItems: state.totalItems + 1,
                totalCost: state.totalCost + action.payload.price,
            };

        case REMOVE_FROM_CART:
            // Fixed: Using action.payload directly as ID
            const removedItem = state.items.find(item => item.id === action.payload);
            const filteredItems = state.items.filter(item => item.id !== action.payload);

            return {
                ...state,
                items: filteredItems,
                totalItems: state.totalItems - removedItem.quantity,
                totalCost: state.totalCost - (removedItem.price * removedItem.quantity),
            };

        case INCREASE_QUANTITY:
            // Fixed: Using action.payload directly as ID
            const increaseItemIndex = state.items.findIndex(item => item.id === action.payload);
            const increasedItem = {
                ...state.items[increaseItemIndex],
                quantity: state.items[increaseItemIndex].quantity + 1,
            };
            const increasedItems = [...state.items];
            increasedItems[increaseItemIndex] = increasedItem;

            return {
                ...state,
                items: increasedItems,
                totalItems: state.totalItems + 1,
                totalCost: state.totalCost + increasedItem.price,
            };

        case DECREASE_QUANTITY:
            // Fixed: Using action.payload directly as ID
            const decreaseItemIndex = state.items.findIndex(item => item.id === action.payload);
            const decreasedItem = state.items[decreaseItemIndex];

            if (decreasedItem.quantity === 1) {
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload),
                    totalItems: state.totalItems - 1,
                    totalCost: state.totalCost - decreasedItem.price,
                };
            } else {
                const updatedDecreasedItem = {
                    ...decreasedItem,
                    quantity: decreasedItem.quantity - 1,
                };
                const decreasedItems = [...state.items];
                decreasedItems[decreaseItemIndex] = updatedDecreasedItem;

                return {
                    ...state,
                    items: decreasedItems,
                    totalItems: state.totalItems - 1,
                    totalCost: state.totalCost - decreasedItem.price,
                };
            }

        default:
            return state;
    }
};

export default cartReducer;