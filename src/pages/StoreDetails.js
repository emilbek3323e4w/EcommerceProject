import React from 'react';
import { useParams } from 'react-router-dom';

const StoreDetails = () => {
  const { storeId } = useParams();
  
  return (
    <div>
      <h1>Store Details</h1>
      <p>Information about store #{storeId}</p>
      <p>Store hours, location, and contact information would be displayed here.</p>
    </div>
  );
};

export default StoreDetails;