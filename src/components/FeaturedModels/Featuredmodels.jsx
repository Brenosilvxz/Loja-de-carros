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
        <img src={bmw} />
        <img src={mclaren} />
      </div>
      <div className="Textimages">
        <div className="Textbmw">
          <h2>Nova BMW disponível no nosso catálogo</h2>
          <p>Veja detalhes inéditos do nosso novo modelo!</p>
          <Link className="Link" to="/bmw-novo-modelo">
            Acesse aqui
          </Link>
        </div>
        <div className="TextMclaren">
          <h2>McLaren uníca do catálogo</h2>
          <p>Homenagem a uma lenda!</p>
          <Link className="Link" to="/Mclaren-novo-modelo">
            Acesse aqui
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedModels;
