// Private Route Component
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Add your authentication logic here
  const isAuthenticated = false; // Replace with your auth check

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;