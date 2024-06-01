import { useContext } from "react";
import cart from "../assets/cart.png";
import { CartContext } from "../context/context";
const CartWidget = () => {
  const { getTotalProducts } = useContext(CartContext);

  if (getTotalProducts > 0) {
    <div className="cart-container">
      <img src={cart} alt="Carrito" className="cart-icon" />
      <span className="cart-counter">{getTotalProducts()}</span>
    </div>;
  }
};

export default CartWidget;
