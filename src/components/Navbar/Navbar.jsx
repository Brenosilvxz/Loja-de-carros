import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/logo.png";
import userIcon from "../../assets/user.svg";
import iconLocalizacao from "../../assets/localizacao.svg";

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="Navbar">

      <div className="NavbarTop">

        <img src={logo} alt="Logo MeeCars" className="Logo" />

        <button
          className="MenuButton"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          ☰
        </button>

      </div>

      <ul className={`Navegation ${menuAberto ? "Active" : ""}`}>

        <li>
          <Link className="Links" to="/" onClick={() => setMenuAberto(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link className="Links" to="/Catalogo" onClick={() => setMenuAberto(false)}>
            Modelos
          </Link>
        </li>

        <li>
          <Link className="Links" to="/destaques" onClick={() => setMenuAberto(false)}>
            Destaques
          </Link>
        </li>

        <li>
          <Link className="Links" to="/sobre" onClick={() => setMenuAberto(false)}>
            Sobre
          </Link>
        </li>

        <li>
          <Link className="Links" to="/favoritos" onClick={() => setMenuAberto(false)}>
            ❤️ Favoritos
          </Link>
        </li>

        <li>
          <Link className="Links" to="/login" onClick={() => setMenuAberto(false)}>
            <img src={userIcon} alt="Perfil" className="UserIcon" />
          </Link>
        </li>

        <li>
          <Link className="Links" to="/localize" onClick={() => setMenuAberto(false)}>
            <div className="Sourch">
              <img src={iconLocalizacao} alt="Localizar" className="Local" />
              <h3>Localize perto de você</h3>
            </div>
          </Link>
        </li>

      </ul>

    </header>
  );
}

export default Navbar;