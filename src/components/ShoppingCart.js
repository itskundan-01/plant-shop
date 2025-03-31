import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleCheckout = () => {
        alert("Coming Soon! Our checkout system will be available shortly.");
    };

    return (
        <div className="shopping-cart">
            <h1>Your Shopping Cart</h1>
            <div className="cart-summary">
                <p>Total Items: {totalItems}</p>
                <p>Total Cost: ₹ {totalCost.toFixed(2)}</p>
            </div>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))
                )}
            </div>
            <div className="cart-actions">
                <Link to="/products" className="continue-shopping">
                    Continue Shopping
                </Link>
                <button className="checkout-button" onClick={handleCheckout}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default ShoppingCart;