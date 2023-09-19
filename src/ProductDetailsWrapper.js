import React from 'react';
import { useParams } from "react-router-dom";
import { ProductListSource } from './App';
import { ProductDetails } from './ProductDetails';

export function ProductDetailsWrapper() {
  const { id } = useParams();
  const product = ProductListSource.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails product={product} />;
}
