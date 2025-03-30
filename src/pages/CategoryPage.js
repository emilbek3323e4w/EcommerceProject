// CategoryPage.js - Shows products in a specific category
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call to fetch category and its products
    // In a real app, this would be an actual API call
    setTimeout(() => {
      // Mock data
      const mockCategory = { 
        id: categoryId, 
        name: 'Electronics',
        description: 'Shop the latest electronics and gadgets'
      };
      
      const mockProducts = [
        { id: 101, name: 'Smartphone X', price: 699.99, image: '/images/smartphone.jpg' },
        { id: 102, name: 'Laptop Pro', price: 1299.99, image: '/images/laptop.jpg' },
        { id: 103, name: 'Wireless Headphones', price: 159.99, image: '/images/headphones.jpg' },
        { id: 104, name: 'Smart Watch', price: 249.99, image: '/images/smartwatch.jpg' },
        { id: 105, name: 'Bluetooth Speaker', price: 89.99, image: '/images/speaker.jpg' },
        { id: 106, name: 'Tablet Ultra', price: 349.99, image: '/images/tablet.jpg' },
      ];
      
      setCategory(mockCategory);
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, [categoryId]);

  if (loading) {
    return <div className="loading">Loading category...</div>;
  }

  return (
    <div className="category-page">
      <h1>{category.name}</h1>
      <p className="category-description">{category.description}</p>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
            </Link>
            <button 
              onClick={() => {
                // Add to cart logic would go here
                window.location.href = `/cart/add-confirmation?product=${product.id}`;
              }}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;