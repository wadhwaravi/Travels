import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const fetchSafetyData = async (searchTerm) => {
  try {
    const response = await axios.get(`${API_URL}/safety-rating`, {
      params: { district: searchTerm }, 
    });
    return response.data; 
  } catch (error) {
    console.error('There was a problem with the request:', error);
    throw error;
  }
};
