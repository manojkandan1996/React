import React from 'react'
import WeatherCard from './WeatherCard'

export default function WeatherDashboard() {
  const weatherData = [
    { id: 1, city: "New Delhi", temperature: 35, condition: "Sunny" },
    { id: 2, city: "London", temperature: 18, condition: "Rainy" },
    { id: 3, city: "New York", temperature: 25, condition: "Cloudy" },
    { id: 4, city: "Sydney", temperature: 32 }, // no condition passed → uses default
    { id: 5, city: "Tokyo", temperature: 28, condition: "Cloudy" }
  ]

  return (
    <section className="dashboard">
      {weatherData.map(w => (
        <WeatherCard 
          key={w.id}
          city={w.city}
          temperature={w.temperature}
          condition={w.condition}
        />
      ))}
    </section>
  )
}
