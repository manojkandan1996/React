import React from 'react'
import ProductCard from './ProductCard'

// Example product list — parent App would normally pass these as props.
// This satisfies requirement #4 (render list using map()) and #5 (parent passes objects)
const products = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 2499.00,
    isAvailable: true,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1518444022435-3d343b3b8f08?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder'
  },
  {
    id: 2,
    title: 'Smart Watch',
    price: 3999.00,
    isAvailable: false,
    // discount omitted => default prop used
    image: 'https://images.unsplash.com/photo-1523475496153-3d6cc3d9d2f5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder'
  },
  {
    id: 3,
    title: 'Portable Speaker',
    price: 1599.00,
    isAvailable: true,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder'
  },
  {
    id: 4,
    title: 'Fitness Band',
    price: 999.00,
    isAvailable: true,
    // discount 0 explicitly
    discount: 0,
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder'
  }
]

export default function ProductList() {
  return (
    <section className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          isAvailable={product.isAvailable}
          discount={product.discount}
          image={product.image}
        />
      ))}
    </section>
  )
}
