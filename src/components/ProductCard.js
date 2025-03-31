import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ProductCard = ({ plant, isInCart }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(plant));
    };

    return (
        <div className="product-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>₹ {plant.price}</p>
            <button 
                onClick={handleAddToCart} 
                disabled={isInCart}
            >
                {isInCart ? 'In Cart' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductCard;