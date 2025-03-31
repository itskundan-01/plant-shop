import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css';

const Header = () => {
    const cartItemsCount = useSelector(state => state.cart.totalItems);

    return (
        <header className="header">
            <h1 className="header-title">Green Thumb</h1>
            <nav className="header-nav">
                <Link to="/">Home</Link>
                <Link to="/products">Plants</Link>
                <Link to="/cart" className="cart-link">
                    <div className="cart-icon">
                        🛒 <span className="cart-count">{cartItemsCount}</span>
                    </div>
                </Link>
            </nav>
        </header>
    );
};

export default Header;