import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Featured categories
  const featuredCategories = [
    { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/300x200' },
    { id: 2, name: 'Clothing', image: 'https://via.placeholder.com/300x200' },
    { id: 3, name: 'Home & Kitchen', image: 'https://via.placeholder.com/300x200' },
    { id: 4, name: 'Books', image: 'https://via.placeholder.com/300x200' }
  ];
  
  // Featured products
  const featuredProducts = [
    { id: 101, name: 'Smartphone X', price: 699.99, image: 'https://via.placeholder.com/300x300' },
    { id: 102, name: 'Laptop Pro', price: 1299.99, image: 'https://via.placeholder.com/300x300' },
    { id: 103, name: 'Wireless Headphones', price: 159.99, image: 'https://via.placeholder.com/300x300' },
    { id: 104, name: 'Smart Watch', price: 249.99, image: 'https://via.placeholder.com/300x300' },
  ];

  return (
    <div className="home-page">
      <div className="hero-banner">
        <h1>Welcome to Your Online Store</h1>
        <p>Discover amazing products at unbeatable prices. Free shipping on orders over $50!</p>
        <Link to="/categories" className="shop-now-button">Shop Now</Link>
      </div>
      
      <section>
        <h2>Featured Categories</h2>
        <div className="categories-grid">
          {featuredCategories.map(category => (
            <Link to={`/category/${category.id}`} key={category.id} className="category-card">
              <img src={category.image} alt={category.name} />
              <h2>{category.name}</h2>
            </Link>
          ))}
        </div>
      </section>
      
      <section style={{ marginTop: '40px' }}>
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
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
      </section>
      
      <section style={{ marginTop: '40px', textAlign: 'center', padding: '40px 20px', backgroundColor: 'var(--secondary-color)', borderRadius: 'var(--border-radius)' }}>
        <h2>Why Shop With Us?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px', gap: '30px' }}>
          <div style={{ flex: '1', minWidth: '200px', maxWidth: '300px' }}>
            <h3>Fast Shipping</h3>
            <p>Get your products delivered quickly and reliably.</p>
          </div>
          <div style={{ flex: '1', minWidth: '200px', maxWidth: '300px' }}>
            <h3>Secure Payments</h3>
            <p>Your transactions are protected with advanced encryption.</p>
          </div>
          <div style={{ flex: '1', minWidth: '200px', maxWidth: '300px' }}>
            <h3>Quality Guarantee</h3>
            <p>We stand behind the quality of all our products.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;