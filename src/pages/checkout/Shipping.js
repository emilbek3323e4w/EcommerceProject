import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    phone: ''
  });
  
  const [shippingMethod, setShippingMethod] = useState('standard');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process shipping info
    // In a real app, you'd validate and save this information
    navigate('/checkout/payment');
  };

  return (
    <div className="shipping-page">
      <h1>Shipping Information</h1>
      
      <form onSubmit={handleSubmit} className="shipping-form">
        <div className="form-section">
          <h2>Contact Information</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName"
                value={shippingInfo.firstName}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName"
                value={shippingInfo.lastName}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              value={shippingInfo.phone}
              onChange={handleInputChange}
              required 
            />
          </div>
        </div>
        
        <div className="form-section">
          <h2>Shipping Address</h2>
          <div className="form-group">
            <label htmlFor="address1">Address Line 1</label>
            <input 
              type="text" 
              id="address1" 
              name="address1"
              value={shippingInfo.address1}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="address2">Address Line 2 (Optional)</label>
            <input 
              type="text" 
              id="address2" 
              name="address2"
              value={shippingInfo.address2}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input 
                type="text" 
                id="city" 
                name="city"
                value={shippingInfo.city}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State/Province</label>
              <input 
                type="text" 
                id="state" 
                name="state"
                value={shippingInfo.state}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">ZIP/Postal Code</label>
              <input 
                type="text" 
                id="zipCode" 
                name="zipCode"
                value={shippingInfo.zipCode}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select 
              id="country" 
              name="country"
              value={shippingInfo.country}
              onChange={handleInputChange}
              required
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="AU">Australia</option>
              {/* More countries would be added */}
            </select>
          </div>
        </div>
        
        <div className="form-section">
          <h2>Shipping Method</h2>
          <div className="shipping-options">
            <div className="shipping-option">
              <input 
                type="radio" 
                id="standard" 
                name="shippingMethod" 
                value="standard"
                checked={shippingMethod === 'standard'}
                onChange={() => setShippingMethod('standard')}
              />
              <label htmlFor="standard">
                <span className="method-name">Standard Shipping</span>
                <span className="method-price">FREE</span>
                <span className="method-time">5-7 business days</span>
              </label>
            </div>
            
            <div className="shipping-option">
              <input 
                type="radio" 
                id="expedited" 
                name="shippingMethod" 
                value="expedited"
                checked={shippingMethod === 'expedited'}
                onChange={() => setShippingMethod('expedited')}
              />
              <label htmlFor="expedited">
                <span className="method-name">Expedited Shipping</span>
                <span className="method-price">$9.99</span>
                <span className="method-time">2-3 business days</span>
              </label>
            </div>
            
            <div className="shipping-option">
              <input 
                type="radio" 
                id="express" 
                name="shippingMethod" 
                value="express"
                checked={shippingMethod === 'express'}
                onChange={() => setShippingMethod('express')}
              />
              <label htmlFor="express">
                <span className="method-name">Express Shipping</span>
                <span className="method-price">$19.99</span>
                <span className="method-time">1-2 business days</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="continue-button">Continue to Payment</button>
          <button type="button" className="back-button" onClick={() => navigate(-1)}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default Shipping;