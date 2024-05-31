import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const [visible, SetVisible] = useState(true);

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
      SetVisible(false);
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
      {visible ? (
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          {" "}
          Agregar al carrito{" "}
        </button>
      ) : (
        <Link to={"/cart"} className="btn bg-light">
          Terminar mi compra
        </Link>
      )}
    </div>
  );
};

export default ItemCount;
