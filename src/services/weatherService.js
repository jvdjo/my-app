import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true // This is the key!  Allows sending and receiving credentials with the request
});

export const getWeatherForecast = async () => {
  try {
    const response = await apiClient.get('/weatherforecast');
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};