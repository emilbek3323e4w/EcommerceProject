// Checkout.js - Main checkout component with checkout flow
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-steps">
        <div className="checkout-step active">
          <span className="step-number">1</span>
          <span className="step-name">Login / Guest</span>
        </div>
        <div className="checkout-step">
          <span className="step-number">2</span>
          <span className="step-name">Shipping</span>
        </div>
        <div className="checkout-step">
          <span className="step-number">3</span>
          <span className="step-name">Payment</span>
        </div>
        <div className="checkout-step">
          <span className="step-number">4</span>
          <span className="step-name">Review</span>
        </div>
        <div className="checkout-step">
          <span className="step-number">5</span>
          <span className="step-name">Confirmation</span>
        </div>
      </div>
      
      <div className="checkout-options">
        <div className="login-option">
          <h2>Returning Customer</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit" className="login-button">Login & Continue</button>
            <Link to="/account/password-reset" className="forgot-password">Forgot Password?</Link>
          </form>
        </div>
        
        <div className="divider">
          <span>OR</span>
        </div>
        
        <div className="guest-option">
          <h2>Guest Checkout</h2>
          <p>Continue without creating an account</p>
          <Link to="/checkout/shipping" className="guest-button">Continue as Guest</Link>
        </div>
      </div>
      
      <div className="checkout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Checkout;