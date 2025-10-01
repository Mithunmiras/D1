// API Configuration
export const API_BASE_URL = process.env.VITE_API_BASE_URL || 'http://localhost:5000';
export const API_ENDPOINTS = {
  auth: '/auth',
  services: '/services',
  contact: '/contact',
  media: '/media',
};

// API Request Configuration
export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
};