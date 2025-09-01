import React from 'react'
import PropTypes from 'prop-types'

export default function ProductCard({ title, price, isAvailable, discount, image }) {
  // Ensure discount is a number (percentage). defaultProps provides fallback.
  const disc = Number(discount) || 0
  const discountedPrice = (price * (1 - disc / 100))

  return (
    <article className="product-card">
      <div className="product-media">
        <img className="product-image" src={image} alt={title} />
      </div>

      <div className="product-body">
        <h3 className="product-title">{title}</h3>

        {/* Price display: show discount UI if applicable */}
        <div className="product-price">
          {disc > 0 ? (
            <>
              <span className="price-original">₹{price.toFixed(2)}</span>
              <span className="price-discounted">₹{discountedPrice.toFixed(2)}</span>
              <span className="badge">{disc}% OFF</span>
            </>
          ) : (
            <span className="price-single">₹{price.toFixed(2)}</span>
          )}
        </div>

        {/* Conditional rendering for stock */}
        {!isAvailable && <p className="out-of-stock">Out of Stock</p>}

        <div className="product-actions">
          {isAvailable ? (
            <button className="btn">Add to Cart</button>
          ) : (
            <button className="btn btn-disabled" disabled>Unavailable</button>
          )}
        </div>
      </div>
    </article>
  )
}

// defaultProps for optional props
ProductCard.defaultProps = {
  discount: 0,
  image: 'https://images.unsplash.com/photo-1513708928679-1f96b5a3d9b1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder'
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  discount: PropTypes.number,
  image: PropTypes.string,
}
