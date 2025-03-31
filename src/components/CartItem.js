import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions/cartActions';
// Import the local delete icon
import deleteIcon from '../assets/delete-icon.svg';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncrease = () => dispatch(increaseQuantity(item.id));
    const handleDecrease = () => dispatch(decreaseQuantity(item.id));
    const handleDelete = () => dispatch(removeFromCart(item.id));

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹ {item.price}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
            <div className="cart-item-controls">
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease} disabled={item.quantity === 1}>-</button>
                <button 
                    onClick={handleDelete} 
                    className="delete-btn"
                    style={{ color: 'red', fontWeight: 'bold' }}
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default CartItem;