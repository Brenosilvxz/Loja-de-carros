import "./Featuredmodels.css";

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
    </section>
  );
}

export default FeaturedModels;
