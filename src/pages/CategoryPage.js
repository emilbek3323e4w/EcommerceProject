import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProducts, getCategories } from '../services/api';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get categories to find the selected one
        const categoriesData = await getCategories();
        const selectedCategory = categoriesData.find(cat => cat.category_id === parseInt(categoryId));
        setCategory(selectedCategory || { name: 'Category', description: 'Products in this category' });
        
        // Get products for this category
        const productsData = await getProducts();
        // Filter products by category if API doesn't support filtering
        const filteredProducts = productsData.filter(
          product => product.category_id === parseInt(categoryId)
        );
        
        setProducts(filteredProducts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setLoading(false);
      }
    };
    
    fetchData();
  }, [categoryId]);

  if (loading) {
    return <div className="loading">Loading category...</div>;
  }

  return (
    <div className="category-page">
      <h1>{category.name}</h1>
      <p className="category-description">{category.description}</p>
      
      <div className="products-grid">
        {products.length > 0 ? (
          products.map(product => (
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
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;