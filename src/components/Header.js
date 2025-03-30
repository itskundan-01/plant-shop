import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css'; // Updated path

const Header = () => {
    const cartItemsCount = useSelector(state => state.cart.totalItems);

    return (
        <header className="header">
            <h1 className="header-title">Plant Shop</h1>
            <nav className="header-nav">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Shopping Cart ({cartItemsCount})</Link>
            </nav>
        </header>
    );
};

export default Header;