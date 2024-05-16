import "./assets/styles/menu.css";
import icono from "./assets/favicon.png";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav class="nav">
        <a class="logo">
          <div class="logo">
            <img src={icono} alt="Logo de la página" />
          </div>
        </a>
        <Link>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-secondary"
                    to={"/category/Sandwich"}
                  >
                    Sandwich
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-secondary"
                    to={"/category/TartasyEmpanadas"}
                  >
                    Tartas y empanadas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-secondary"
                    to={"/category/Sushi"}
                  >
                    Sushi
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-secondary"
                    to={"/category/Picadas"}
                  >
                    Picadas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-secondary"
                    to={"/category/Helados"}
                  >
                    Helados
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-secondary"
                    to={"/category/Helados"}
                  >
                    Helados
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col text-end"></div>
          </div>
        </Link>
        <CartWidget />
      </nav>
    </header>
  );
};

export default Navbar;
