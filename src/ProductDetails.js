import React, { useState } from 'react';
import { Link } from "react-router-dom";


export function ProductDetails({ product }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };

  const totalPrice = selectedQuantity * product.price;
  return (
    <div className="product-details">
      <div>
        <Link to="/">Home</Link>
      </div>
      <nav>
        <ul>
          <h2>{product.title}</h2>
        </ul>
      </nav>
      <div className='Products'>
        <img src={product.thumbnail} alt={product.title} />
        <p><h4>Description</h4>{product.description}</p>
        <p><h4>Price</h4> ${product.price} / Discount: {product.discountPercentage}%</p>
        <p><h4>Rating</h4>{product.rating}
          <h3>Stock:  </h3>{product.stock} units Stock availabe</p>
        <div className='Tocart'>
          <h3>Select the required quantity</h3>
          <select onChange={handleQuantityChange} value={selectedQuantity}>
            {[...Array(10).keys()].map((quantity) => (
              <option key={quantity} value={quantity + 1}>
                {quantity + 1}
              </option>
            ))}
          </select>
          <h1>Total Price : ${totalPrice}</h1>
        </div>
      </div></div>
  );
}

