import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for cart items
    // In a real app, this would come from an API or local storage
    setTimeout(() => {
      setCartItems([
        {
          id: 1,
          product: {
            id: 101,
            name: 'Smartphone X',
            price: 699.99,
            image: 'https://via.placeholder.com/100x100'
          },
          quantity: 1
        },
        {
          id: 2,
          product: {
            id: 103,
            name: 'Wireless Headphones',
            price: 159.99,
            image: 'https://via.placeholder.com/100x100'
          },
          quantity: 2
        }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  };

  if (loading) {
    return <div className="loading">Loading your cart...</div>;
  }

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart is Empty</h1>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="continue-shopping-button">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.product.image} alt={item.product.name} />
              
              <div className="item-details">
                <h3>{item.product.name}</h3>
                <p className="item-price">${item.product.price.toFixed(2)}</p>
                
                <div className="quantity-controls">
                  <label>Quantity:</label>
                  <select 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
              
              <div className="item-total">
                ${(item.product.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="summary-row">
            <span>Tax:</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="summary-row total">
            <span>Estimated Total:</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>
          
          <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
          <Link to="/" className="continue-shopping-link">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;