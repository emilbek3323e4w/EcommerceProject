import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

// Import layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import page components
import StoreLocator from './pages/StoreLocator';
import StoreDetails from './pages/StoreDetails';

// Placeholder component for pages that haven't been created yet
const PlaceholderPage = ({ title }) => (
  <div className="placeholder-page">
    <h1>{title}</h1>
    <p>This page is under construction</p>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
);

// Define placeholder components for each route
const HomePage = () => <PlaceholderPage title="Home Page" />;
const CategoryOverview = () => <PlaceholderPage title="Category Overview" />;
const CategoryPage = () => <PlaceholderPage title="Category Page" />;
const ProductPage = () => <PlaceholderPage title="Product Page" />;
const SearchResults = () => <PlaceholderPage title="Search Results" />;
const Cart = () => <PlaceholderPage title="Shopping Cart" />;
const AddToCartConfirmation = () => <PlaceholderPage title="Added to Cart" />;
const Login = () => <PlaceholderPage title="Login" />;
const CreateAccount = () => <PlaceholderPage title="Create Account" />;
const Account = () => <PlaceholderPage title="My Account" />;
const MyOrders = () => <PlaceholderPage title="My Orders" />;
const OrderDetails = () => <PlaceholderPage title="Order Details" />;
const AccountSettings = () => <PlaceholderPage title="Account Settings" />;
const PaymentSettings = () => <PlaceholderPage title="Payment Settings" />;
const Addresses = () => <PlaceholderPage title="My Addresses" />;

// Checkout flow components
const Checkout = () => <PlaceholderPage title="Checkout" />;
const Shipping = () => <PlaceholderPage title="Shipping Information" />;
const Payment = () => <PlaceholderPage title="Payment Information" />;
const Review = () => <PlaceholderPage title="Review Order" />;
const Confirmation = () => <PlaceholderPage title="Order Confirmation" />;

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            {/* Main store routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoryOverview />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/search" element={<SearchResults />} />
            
            {/* Cart routes */}
            <Route path="/cart/add-confirmation" element={<AddToCartConfirmation />} />
            <Route path="/cart" element={<Cart />} />
            
            {/* Account routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/orders" element={<MyOrders />} />
            <Route path="/account/orders/:orderId" element={<OrderDetails />} />
            <Route path="/account/settings" element={<AccountSettings />} />
            <Route path="/account/payment" element={<PaymentSettings />} />
            <Route path="/account/addresses" element={<Addresses />} />
            
            {/* Checkout routes */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/shipping" element={<Shipping />} />
            <Route path="/checkout/payment" element={<Payment />} />
            <Route path="/checkout/review" element={<Review />} />
            <Route path="/checkout/confirmation" element={<Confirmation />} />
            
            {/* Store information routes */}
            <Route path="/stores" element={<StoreLocator />} />
            <Route path="/stores/:storeId" element={<StoreDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;