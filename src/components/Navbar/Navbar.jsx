import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

import logo from "../../assets/logo.png";
import userIcon from "../../assets/user.svg";
import iconCart from "../../assets/cart.svg";

function Navbar() {
  const [submenuAberto, setSubmenuAberto] = useState(false);
  const timeoutRef = useRef(null);

  const abrirSubmenu = () => {
    clearTimeout(timeoutRef.current);
    setSubmenuAberto(true);
  };

  const fecharSubmenu = () => {
    timeoutRef.current = setTimeout(() => {
      setSubmenuAberto(false);
    }, 250);
  };

  return (
    <div className="Navbar">
      <img src={logo} alt="Logo MeeCars" className="Logo" />

      <ul className="Navegation">
        <li>
          <Link className="Links" to="/">
            Home
          </Link>
        </li>

        <li onMouseEnter={abrirSubmenu} onMouseLeave={fecharSubmenu}>
          <Link className="Links" to="/modelos">
            Modelos
          </Link>

          {submenuAberto && (
            <ul
              className="Submenu"
              onMouseEnter={abrirSubmenu}
              onMouseLeave={fecharSubmenu}
            >
              <li>
                <Link className="Linkssubmenu" to="/modelos/sedans">
                  Sedans
                </Link>
              </li>

              <li>
                <Link className="Linkssubmenu" to="/modelos/esportivos">
                  Esportivos
                </Link>
              </li>

              <li>
                <Link className="Linkssubmenu" to="/modelos/eletricos">
                  Elétricos
                </Link>
              </li>

              <li>
                <Link className="Linkssubmenu" to="/modelos/picapes">
                  Picapes
                </Link>
              </li>
              <li>
                <Link className="Linkssubmenu" to="/modelos/suvs">
                  SUVs
                </Link>
              </li>
              <li>
                <Link className="Linkssubmenu" to="/modelos/hibridos">
                  Híbridos
                </Link>
              </li>
              <li>
                <Link className="Linkssubmenu" to="/modelos/luxo">
                  Luxo
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link className="Links" to="/ofertas">
            Ofertas
          </Link>
        </li>

        <li>
          <Link className="Links" to="/destaques">
            Destaques
          </Link>
        </li>

        <li>
          <Link className="Links" to="/sobre">
            Sobre
          </Link>
        </li>

        <li>
          <Link className="Links" to="/perfil">
            <img src={userIcon} alt="Perfil" className="UserIcon" />
          </Link>
        </li>

        <li>
          <Link className="Links" to="/cart">
            <img src={iconCart} alt="Carrinho" className="Cart" />
          </Link>
        </li>

        <li>
          <input
            type="text"
            placeholder="Buscar veículos..."
            className="Sourch"
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
