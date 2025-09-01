import React from 'react'

export default function MovieCard({ title, rating, isTrending, poster, footer }) {
  // Convert rating into ⭐
  const stars = "⭐".repeat(rating)

  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="poster" />
      <h2>{title} {isTrending && <span className="badge">🔥</span>}</h2>
      <p className="rating">{stars}</p>
      <div className="footer">{footer}</div>
    </div>
  )
}
