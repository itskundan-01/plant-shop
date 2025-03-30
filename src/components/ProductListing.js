import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import plantData from '../data/plantData';
import '../styles/ProductListing.css';
import ProductCard from './ProductCard';

const ProductListing = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    // Group plants by category
    const categories = {};
    plantData.forEach(plant => {
        if (!categories[plant.category]) {
            categories[plant.category] = [];
        }
        categories[plant.category].push(plant);
    });

    return (
        
        <div className="product-listing">
            {Object.keys(categories).map(category => (
                <div key={category} className="category-section">
                    <h2>{category}</h2>
                    <div className="product-grid">
                        {categories[category].map(plant => {
                            const isInCart = cartItems.some(item => item.id === plant.id);
                            return (
                                <ProductCard 
                                    key={plant.id} 
                                    plant={plant} 
                                    isInCart={isInCart}
                                />
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductListing;