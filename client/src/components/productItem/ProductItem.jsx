import './productItem.css';
import React from 'react';

function ProductItem(props) {
  const { _id, name, qty, price, onDelete } = props
  return (
    <div className="wrapper">
      <div className="product-container">
        <div className="product-name">{name}</div>
        <div className="product-qty">{qty}</div>
        <div className="product-price">{price}</div>
      </div>
      <span className="product-remove" onClick={() => onDelete(_id)}>❌</span>
    </div>
  );
}

export default ProductItem;
