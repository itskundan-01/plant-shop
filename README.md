# Plant Shop

Welcome to the Plant Shop project! This is a simple e-commerce application built with React and Redux, allowing users to browse and purchase houseplants.

## Project Structure

The project is organized as follows:

```
plant-shop
├── public
│   ├── index.html          # Main HTML file
│   └── images
│       ├── background.jpg  # Background image for the landing page
│       └── plants          # Contains images of the houseplants
│           ├── plant1.jpg
│           ├── plant2.jpg
│           ├── plant3.jpg
│           ├── plant4.jpg
│           ├── plant5.jpg
│           └── plant6.jpg
├── src
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for the React application
│   ├── components          # Contains all React components
│   │   ├── Header.js
│   │   ├── LandingPage.js
│   │   ├── ProductListing.js
│   │   ├── ProductCard.js
│   │   ├── ShoppingCart.js
│   │   └── CartItem.js
│   ├── redux               # Redux setup
│   │   ├── store.js
│   │   ├── actions
│   │   │   └── cartActions.js
│   │   ├── reducers
│   │   │   ├── cartReducer.js
│   │   │   └── index.js
│   │   └── types.js
│   ├── data                # Contains data for the plants
│   │   └── plantData.js
│   └── styles              # CSS styles for the application
│       ├── App.css
│       ├── LandingPage.css
│       ├── ProductListing.css
│       └── ShoppingCart.css
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd plant-shop
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Features

- **Landing Page**: A welcoming page with a background image, company name, and a "Get Started" button.
- **Product Listing**: Displays six unique houseplants with their images, names, and prices, along with an "Add to Cart" button.
- **Shopping Cart**: Allows users to view their selected plants, adjust quantities, and proceed to checkout.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

This is very
## License

This project is open-source and available under the [MIT License](LICENSE).
