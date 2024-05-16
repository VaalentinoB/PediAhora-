import "./assets/styles/menu.css";
import icono from "./assets/favicon.png";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav class="nav">
        <a href="/index.html" class="logo">
          <div class="logo">
            <img src={icono} alt="Logo de la página" />
          </div>
        </a>

        <div className="row">
          <div className="col"></div>
          <div className="col">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-secondary"
                  to={"/category/sushi"}
                >
                  Sushi
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-secondary"
                  to={"/category/EmpanadasYPizzas"}
                >
                  Empanadas y pizzas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-secondary"
                  to={"/category/tablas"}
                >
                  Tablas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-secondary"
                  to={"/category/helados"}
                >
                  Helados
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col text-end"></div>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
