import "./Navbar.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import userIcon from "../../assets/user.svg";
import iconCart from "../../assets/cart.svg";
import iconLocalizacao from "../../assets/localizacao.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} alt="Logo MeeCars" className="Logo" />

      <ul className="Navegation">
        <li>
          <Link className="Links" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="Links" to="/Catalogo">
            Modelos
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
          <Link className="Links" to="/favoritos">
            ❤️ Favoritos
          </Link>
        </li>

        <li>
          <Link className="Links" to="/login">
            <img src={userIcon} alt="Perfil" className="UserIcon" />
          </Link>
        </li>

        <li>
          <Link className="Links" to="/localize">
            <div className="Sourch">
              <img src={iconLocalizacao} alt="Localizar" className="Local" />
              <h3>Localize perto de voçê</h3>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
