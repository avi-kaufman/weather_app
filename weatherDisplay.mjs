import React, { useState } from 'react';

function WeatherDisplay({ data }) {
  
  return (
    <div className="card">
      <div className="card-body">
        <h2>{data.name}</h2>
        <p>{data.weather[0].description}</p>
        <p>Temperature: {data.main.temp} °C</p>
        <p>Feels like: {data.main.feels_like} °C</p>
        <p>Humidity: {data.main.humidity}%</p>
      </div>
    </div>
  );
}
export default WeatherDisplay;
