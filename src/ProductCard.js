import React from 'react';
import { useNavigate } from "react-router-dom";


export function ProductCard({ product }) {
  const navigate = useNavigate();

  const openProductDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.brand}</p>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock} units</p>
      <button onClick={openProductDetails}>Buy</button>
    </div>
  );
}
