import "./menu.css";
import icono from "./assets/favicon.png";
import CartWidget from "./CartWidget";

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
