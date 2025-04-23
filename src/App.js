import React from 'react';
import WeatherForecast from './components/WeatherForecast';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Weather App</h1>
        <p>Powered by ASP.NET Core API</p>
      </header>
      <main>
        <WeatherForecast />
      </main>
      <footer>
        <p>API URL: {process.env.REACT_APP_API_URL}</p>
      </footer>
    </div>
  );
}

export default App;
