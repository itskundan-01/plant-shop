import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page" style={{ backgroundImage: `url('/images/background.jpg')` }}>
            <div className="landing-content">
                <h1 className="company-name">Green Thumb</h1>
                <p className="company-description">
                    Welcome to Green Thumb, your one-stop shop for beautiful houseplants. 
                    Discover a variety of plants that will bring life to your home.
                </p>
                <Link to="/products" className="get-started-button">Get Started</Link>
            </div>
        </div>
    );
};

export default LandingPage;