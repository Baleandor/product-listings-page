# Product Listings Page Documentation

# DISCLAIMER! If the app does not connect to the supabase backend, it means the free instance of that database has been frozen and I need to unfreeze it manually. Please contact me via email so that I can do so when needed. Thanks!

## Summary

The Product Listings Page is a straightforward web application that dynamically displays a list of products. Users can conveniently filter the products based on color and price range to find items that match their preferences. The application also features an "Add to Cart" button, which provides user feedback upon being clicked. The app is built using React and leverages essential libraries such as Ant Design, Supabase, and React Query to deliver an engaging and responsive user experience.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Features](#features)
  - [Dynamic Product Listing](#dynamic-product-listing)
  - [Filtering by Color and Price Range](#filtering-by-color-and-price-range)
  - ["Add to Cart" Interaction](#add-to-cart-interaction)
- [Dependencies](#dependencies)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd product-listings-page
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

### Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your web browser and navigate to `http://localhost:3000` to access the product listings page.

## Features

### Dynamic Product Listing

- The app displays a list of products dynamically fetched from a data source.
- Product information such as name, image, color, and price are presented in an organized manner.

### Filtering by Color and Price Range

- Users can filter the displayed products by color and price range.
- This feature helps users narrow down their choices based on their preferences.

### "Add to Cart" Interaction

- Each product item includes an "Add to Cart" button.
- When the button is clicked, a user-friendly message confirms that the item has been added to the cart.

## Dependencies

The Product Listings Page app relies on several core libraries to provide a seamless and visually appealing user experience:

- **Ant Design:** A comprehensive UI library that offers a wide range of polished and customizable components for building modern interfaces.

- **Supabase:** A backend service platform that offers various functionalities such as authentication, database management, and more.

- **React Query:** A powerful library for managing and caching asynchronous data in React applications, enhancing performance and data management.

These dependencies, along with others listed in the `package.json` file, contribute to the app's functionality and aesthetic. For detailed information about each library, please refer to the respective documentation.
