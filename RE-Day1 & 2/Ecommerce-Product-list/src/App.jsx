import React from 'react'
import ProductList from './components/ProductList'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🛍️ E-commerce Product Listing</h1>
        <p>JSX • Props • Default Props • Lists • Conditional Rendering</p>
      </header>

      <main>
        <ProductList />
      </main>

      <footer className="footer">
        <small>Demo store • Built with React + Vite</small>
      </footer>
    </div>
  )
}
