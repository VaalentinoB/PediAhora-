import cart from "./assets/cart.png";

const CartWidget = () => {
  return (
    <div className="cart-container">
      <img src={cart} alt="Carrito" className="cart-icon" />
      <span className="cart-counter">01</span>
    </div>
  );
};

export default CartWidget;
