import "./Featuredmodels.css";
import { Link } from "react-router-dom";

import bmw from "../../assets/bmw-home.jpg";
import mclaren from "../../assets/mclaren-home.jpg";

function FeaturedModels() {
  return (
    <section className="Featuredmodels">
      <div className="Tittle">
        <h1>Descubra os novos modelos que chegaram na loja!</h1>
      </div>

      <div className="images">
        <div className="CardImage">
          <img src={bmw} alt="BMW" />

          <div className="Text">
            <h2>Nova BMW disponível no nosso catálogo</h2>

            <p>Veja detalhes inéditos do nosso novo modelo!</p>

            <Link className="Link" to="/Catalogo">
              Acesse aqui
            </Link>
          </div>
        </div>

        <div className="CardImage">
          <img src={mclaren} alt="McLaren" />

          <div className="Text">
            <h2>McLaren única do catálogo</h2>

            <p>Homenagem a uma lenda!</p>

            <Link className="Link" to="/Catalogo">
              Acesse aqui
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedModels;
