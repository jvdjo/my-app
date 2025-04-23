import React, { useState, useEffect } from 'react';
import { getWeatherForecast } from '../services/weatherService';
import './WeatherForecast.css';

const WeatherForecast = () => {
  const [forecasts, setForecasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const data = await getWeatherForecast();
        setForecasts(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch weather data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <div className="loading">Loading weather data...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="weather-container">
      <h1>Weather Forecast</h1>
      <div className="forecast-grid">
        {forecasts.map((forecast, index) => (
          <div key={index} className="forecast-card">
            <h2>{forecast.date}</h2>
            <div className="temperature">
              <p>{forecast.temperatureC}°C / {forecast.temperatureF}°F</p>
            </div>
            <div className="summary">
              <p>{forecast.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;