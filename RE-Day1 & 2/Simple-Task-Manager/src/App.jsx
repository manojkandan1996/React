import React from 'react'
import TaskList from './components/TaskList'

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🗂️ Simple Task Manager</h1>
        <p className="subtitle">Function vs Class components • Callback props • Lists • Conditional rendering</p>
      </header>

      <main>
        <TaskList />
      </main>

      <footer className="app-footer">
        <small>Built with React + Vite</small>
      </footer>
    </div>
  )
}
