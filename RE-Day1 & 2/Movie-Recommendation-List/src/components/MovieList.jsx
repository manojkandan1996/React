import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList() {
  const movies = [
    { id: 1, title: "Inception", rating: 5, isTrending: true, poster: "https://m.media-amazon.com/images/I/51oBxmV-dML._AC_.jpg" },
    { id: 2, title: "Interstellar", rating: 4, isTrending: false, poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg" },
    { id: 3, title: "The Dark Knight", rating: 5, isTrending: true, poster: "https://m.media-amazon.com/images/I/71pVzWWP+PL._AC_SY679_.jpg" },
    { id: 4, title: "Dune", rating: 4, isTrending: false, poster: "https://m.media-amazon.com/images/I/91E3f8V0w4L._AC_SY679_.jpg" }
  ]

  return (
    <section className="movie-list">
      {movies.map(movie => (
        <MovieCard 
          key={movie.id}
          title={movie.title}
          rating={movie.rating}
          isTrending={movie.isTrending}
          poster={movie.poster}
          footer={<button className="watch-btn">Watch Now</button>}
        />
      ))}
    </section>
  )
}
