import { API_CONFIG } from '../config/ConfigAPIURL';

export const APIRequest = async (endpoint, method = 'GET', data = null) => {
  const config = {
    ...API_CONFIG,
    method,
    headers: {
      ...API_CONFIG.headers,
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(endpoint, config);
    if (!response.ok) {
      throw new Error('API request failed');
    }
    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};