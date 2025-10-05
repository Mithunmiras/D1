import React from 'react';

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="spinner"></div>
        <div className="preloader-text">Loading...</div>
      </div>
    </div>
  );
}
