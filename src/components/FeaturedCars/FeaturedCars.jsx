import "./FeaturedCars.css";
import { Link } from "react-router-dom";

import bmw from "../../assets/bmw-models.jpg";
import porsche from "../../assets/porsche-models.jpg";

function FeaturedCars() {
  return (
    <section className="featured-models">
      <div className="featured-header">
        <span>Modelos Premium</span>

        <h2>Os carros mais desejados</h2>

        <p>
          Descubra alguns dos veículos esportivos e de luxo mais procurados da
          nossa coleção.
        </p>
      </div>

      <div className="featured-grid">
        <div className="featured-card">
          <img src={bmw} alt="BMW M3" />

          <div className="featured-overlay">
            <span>BMW</span>

            <h3>BMW M3 Competition</h3>

            <Link to="/catalogo">Explorar →</Link>
          </div>
        </div>

        <div className="featured-card">
          <img src={porsche} alt="Porsche 911" />

          <div className="featured-overlay">
            <span>Porsche</span>

            <h3>Porsche 911 Turbo S</h3>

            <Link to="/catalogo">Explorar →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCars;
