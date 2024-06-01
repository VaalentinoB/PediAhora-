import { useContext } from "react";
import cart from "../assets/cart.png";
import { CartContext } from "../context/context";
import { Link } from "react-router-dom";
import "../assets/styles/menu.css";
const CartWidget = () => {
  const { getTotalProducts } = useContext(CartContext);

  if (getTotalProducts() > 0) {
    return (
      <Link to={"/cart"}>
        <div className="cart-container">
          <img src={cart} alt="Carrito" className="cart-icon" />
          <span className="cart-counter">{getTotalProducts()}</span>
        </div>
      </Link>
    );
  }
};
export default CartWidget;
