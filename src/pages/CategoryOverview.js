import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

const CategoryOverview = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setLoading(false);
      }
    };
    
    fetchCategories();
  }, []);

  if (loading) {
    return <div className="loading">Loading categories...</div>;
  }

  return (
    <div className="category-overview">
      <h1>All Categories</h1>
      <div className="categories-grid">
        {categories.length > 0 ? (
          categories.map(category => (
            <Link to={`/category/${category.category_id}`} key={category.category_id} className="category-card">
              <img src={category.image_url || '/images/placeholder.jpg'} alt={category.name} />
              <h2>{category.name}</h2>
            </Link>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryOverview;