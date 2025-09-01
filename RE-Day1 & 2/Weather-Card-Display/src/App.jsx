import React from 'react'
import WeatherDashboard from './components/WeatherDashboard'

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🌦️ Weather Card Display</h1>
        <p className="subtitle">Props • JSX • Conditional Rendering • Default Props</p>
      </header>

      <main>
        <WeatherDashboard />
      </main>

      <footer className="app-footer">
        <small>Built with React + Vite</small>
      </footer>
    </div>
  )
}
