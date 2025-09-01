import React from 'react'
import MovieList from './components/MovieList'

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎬 Movie Recommendation List</h1>
        <p className="subtitle">Props • List Rendering • Conditional Rendering • JSX Props</p>
      </header>

      <main>
        <MovieList />
      </main>

      <footer className="app-footer">
        <small>Built with React + Vite</small>
      </footer>
    </div>
  )
}
