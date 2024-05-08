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
    <div class="cart-controls">
      <div className="counter-container">
        <button class="decrement-btn" onClick={handleDecrement}>
          -
        </button>
        <span class="count">{count}</span>
        <button class="increment-btn" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button class="add-to-cart-btn" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
