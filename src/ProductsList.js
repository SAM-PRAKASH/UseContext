import React from 'react';
import { ProductListSource } from './App';
import { ProductCard } from './ProductCard';

export function ProductsList() {
  return (
    <div className="products-list">
      {ProductListSource.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
