import React from 'react'

// WeatherCard: Displays weather info for a city
export default function WeatherCard({ city, temperature, condition }) {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p className="temp">{temperature}°C</p>
      <p className="condition">
        {temperature > 30 ? "Hot Day 🌞" : "Cool Day ❄️"} | {condition}
      </p>
    </div>
  )
}

// Default props → if condition not passed, assume "Sunny"
WeatherCard.defaultProps = {
  condition: "Sunny"
}
