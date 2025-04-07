import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProducts } from '../services/api';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesData, productsData] = await Promise.all([
          getCategories(),
          getProducts()
        ]);
        
        setCategories(categoriesData.slice(0, 4)); // Get first 4 categories
        setProducts(productsData.slice(0, 4)); // Get first 4 products
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

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
          {categories.map(category => (
            <Link to={`/category/${category.category_id}`} key={category.category_id} className="category-card">
              <img src={category.image_url || '/images/placeholder.jpg'} alt={category.name} />
              <h2>{category.name}</h2>
            </Link>
          ))}
        </div>
      </section>
      
      <section style={{ marginTop: '40px' }}>
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.product_id} className="product-card">
              <Link to={`/product/${product.product_id}`}>
                <img src={product.image_url || '/images/placeholder.jpg'} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">${parseFloat(product.price).toFixed(2)}</p>
              </Link>
              <button 
                onClick={() => {
                  window.location.href = `/cart/add-confirmation?product=${product.product_id}`;
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