import { useState } from 'react';
import { API_ENDPOINTS } from '../config/ConfigAPIURL';

export const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendContactForm = async (formData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(API_ENDPOINTS.contact, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send contact form');
      }
      
      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    sendContactForm,
  };
};