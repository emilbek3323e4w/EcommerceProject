// AddToCartConfirmation.js - Confirmation dialog after adding product to cart
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const AddToCartConfirmation = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('product');
  const quantity = searchParams.get('quantity') || 1;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // In a real app, this would fetch product details based on productId
    // Mock product data
    setProduct({
      id: productId,
      name: 'Smartphone X',
      price: 699.99,
      image: '/images/smartphone.jpg'
    });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="add-to-cart-confirmation">
      <div className="confirmation-message">
        <h2>Item Added to Cart</h2>
        <div className="product-summary">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>Quantity: {quantity}</p>
            <p className="price">${(product.price * quantity).toFixed(2)}</p>
          </div>
        </div>
        
        <div className="action-buttons">
          <Link to="/cart" className="view-cart-button">View Cart</Link>
          <Link to="/" className="continue-shopping-button">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default AddToCartConfirmation;