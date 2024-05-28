import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0 && count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div className="cart-controls">
      <div className="counter-container">
        <button className="decrement-btn" onClick={handleDecrement}>
          -
        </button>
        <span className="count">{count}</span>
        <button className="increment-btn" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
