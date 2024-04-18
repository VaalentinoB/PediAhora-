import "./menu.css";
import icono from "./assets/favicon.png";

const Menu = () => {
  return (
    <header>
      <nav class="nav">
        <a href="/index.html" class="logo">
          <div class="logo">
            <img src={icono} alt="Logo de la página" />
          </div>
        </a>

        <div class="right-items">
          <div class="support">
            <a href="#">Soporte! </a>
          </div>

          <div class="cart">
            <i class="fa-solid fa-cart-shopping" id="carrito"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Menu;
