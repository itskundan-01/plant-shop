import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions/cartActions';
import CartItem from './CartItem';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const dispatch = useDispatch();

    return (
        <div className="shopping-cart">
            <h1>Your Shopping Cart</h1>
            <div className="cart-summary">
                <p>Total Items: {totalItems}</p>
                <p>Total Cost: ₹ 1{totalCost.toFixed(2)}</p>
            </div>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map(item => (
                        <CartItem 
                            key={item.id} 
                            item={item} 
                            increaseQuantity={() => dispatch(increaseQuantity(item.id))}
                            decreaseQuantity={() => dispatch(decreaseQuantity(item.id))}
                            removeFromCart={() => dispatch(removeFromCart(item.id))}
                        />
                    ))
                )}
            </div>
            <div className="cart-actions">
                <button className="continue-shopping" onClick={() => window.location.href = '/products'}>
                    Continue Shopping
                </button>
                <button className="checkout" disabled>
                    Checkout (Coming Soon)
                </button>
            </div>
        </div>
    );
};

export default ShoppingCart;