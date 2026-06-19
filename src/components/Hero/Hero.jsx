import "./Hero.css";
import car from "../../assets/hero.jpg";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={car} alt="BMW M4" />
      </div>

      <div className="Texts">
        <h1>Encontre o carro dos seus sonhos.</h1>
        <p>Veículos premium com qualidade, segurança e desempenho.</p>

        <div className="hero-buttons">
          <Link to="/modelos" className="btn-primary">
            Explorar Modelos
          </Link>

          <Link to="/ofertas" className="btn-secondary">
            Ver Ofertas
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
