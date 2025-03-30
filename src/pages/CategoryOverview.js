// CategoryOverview.js - Shows all product categories
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryOverview = () => {
  // Simulated category data - in a real app, this would come from an API
  const categories = [
    { id: 1, name: 'Electronics', image: '/images/electronics.jpg' },
    { id: 2, name: 'Clothing', image: '/images/clothing.jpg' },
    { id: 3, name: 'Home & Kitchen', image: '/images/home-kitchen.jpg' },
    { id: 4, name: 'Books', image: '/images/books.jpg' },
    { id: 5, name: 'Toys & Games', image: '/images/toys.jpg' },
    { id: 6, name: 'Beauty & Personal Care', image: '/images/beauty.jpg' },
  ];

  return (
    <div className="category-overview">
      <h1>All Categories</h1>
      <div className="categories-grid">
        {categories.map(category => (
          <Link to={`/category/${category.id}`} key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryOverview;