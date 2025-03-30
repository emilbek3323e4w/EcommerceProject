// ProductPage.js - Shows details for a specific product
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simulated API call to fetch product details
    setTimeout(() => {
      // Mock data
      const mockProduct = {
        id: productId,
        name: 'Smartphone X',
        price: 699.99,
        description: 'The latest smartphone with cutting-edge features including a high-resolution display, powerful processor, and all-day battery life.',
        features: [
          '6.5-inch Super AMOLED display',
          '128GB storage',
          '12MP triple camera system',
          'Water and dust resistant',
          'Fast charging technology'
        ],
        images: [
          '/images/smartphone-front.jpg',
          '/images/smartphone-back.jpg',
          '/images/smartphone-side.jpg'
        ],
        inStock: true
      };
      
      setProduct(mockProduct);
      setLoading(false);
    }, 500);
  }, [productId]);

  const handleAddToCart = () => {
    // Add to cart logic would go here
    navigate(`/cart/add-confirmation?product=${productId}&quantity=${quantity}`);
  };

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  return (
    <div className="product-page">
      <div className="product-gallery">
        <img src={product.images[0]} alt={product.name} className="main-image" />
        <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`${product.name} view ${index + 1}`} />
          ))}
        </div>
      </div>
      
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        
        <h3>Features</h3>
        <ul className="features-list">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        
        <div className="purchase-options">
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <select 
              id="quantity" 
              value={quantity} 
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          
          <button 
            onClick={handleAddToCart} 
            className="add-to-cart-button"
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;