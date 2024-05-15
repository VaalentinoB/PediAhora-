import "./assets/styles/menu.css";
import icono from "./assets/favicon.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
