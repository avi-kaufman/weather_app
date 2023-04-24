import React, { useState } from 'react';
import SearchBar from './searchBar.mjs';
import WeatherDisplay from './weatherDisplay.mjs';
import API_KEY from './setings.js';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;
