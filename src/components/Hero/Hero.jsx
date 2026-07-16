import "./Hero.css";
import car from "../../assets/car-home.mp4";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <video src={car} autoPlay loop muted playsInline />
      </div>

      <div className="Texts">
        <h1>Encontre o carro dos seus sonhos.</h1>
        <p>Veículos premium com qualidade, segurança e desempenho.</p>

        <div className="hero-buttons">
          <Link to="/Catalogo" className="btn-primary">
            Explorar Modelos
          </Link>

          <Link to="/destaques" className="btn-secondary">
            Ver Destaques
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
