import React from 'react';

const BrandCard = ({ brand }) => {
  return (
    <div className="brand-card p-4 bg-white rounded-lg shadow-md">
      <img src={brand.logo} alt={brand.name} className="w-full h-auto" />
    </div>
  );
}

export default BrandCard;