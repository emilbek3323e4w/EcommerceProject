import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-navigation">
        <div className="footer-section">
          <h4>STAY UPDATED</h4>
          <div className="email-signup-container" style={{ position: 'relative' }}>
            <form className="email-signup">
              <input type="email" placeholder="Your email address" />
              <button type="submit">SIGN UP</button>
            </form>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>RETURNS</h4>
          <Link to="/returns">Return Policy</Link>
          <Link to="/returns/process">Start a Return</Link>
        </div>
        
        <div className="footer-section">
          <h4>SHIPPING</h4>
          <Link to="/shipping/info">Shipping Information</Link>
          <Link to="/shipping/rates">Shipping Rates</Link>
        </div>
        
        <div className="footer-section">
          <h4>CONTACT US</h4>
          <Link to="/help">Help Center</Link>
          <Link to="/contact">Contact Form</Link>
        </div>
        
        <div className="footer-section">
          <h4>FIND A STORE</h4>
          <Link to="/stores">Store Locator</Link>
          <Link to="/stores/hours">Store Hours</Link>
        </div>
        
        <div className="footer-section">
          <h4>LEGAL</h4>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '40px', color: '#b0bec5', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Your E-commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;