import "./Featuredmodels.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import carro1 from "../../assets/carro1.jpg";
import carro2 from "../../assets/carro2.jpg";
import carro3 from "../../assets/carro3.jpg";
import carro4 from "../../assets/carro4.jpg";

function FeaturedModels() {
  const carros = [
    {
      id: 1,
      nome: "Toyota Corolla",
      preco: "R$ 165.900",
      imagem: carro1,
    },
    {
      id: 2,
      nome: "Honda Civic",
      preco: "R$ 182.900",
      imagem: carro2,
    },
    {
      id: 3,
      nome: "Volkswagen Jetta",
      preco: "R$ 179.900",
      imagem: carro3,
    },
    {
      id: 4,
      nome: "BMW Série 3",
      preco: "R$ 339.900",
      imagem: carro4,
    },
  ];

  const [indice, setIndice] = useState(0);

  const proximo = () => {
    setIndice((prev) => (prev + 1) % carros.length);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + carros.length) % carros.length);
  };

  return (
    <section className="featured-models">
      <h2>Modelos em Destaque</h2>

      <div className="carousel">
        <button className="arrow" onClick={anterior}>
          ❮
        </button>

        <div className="card">
          <img src={carros[indice].imagem} alt={carros[indice].nome} />

          <h3>{carros[indice].nome}</h3>

          <p>{carros[indice].preco}</p>

          <Link to="/" className="btn-modelo">
            Ver detalhes
          </Link>
        </div>

        <button className="arrow" onClick={proximo}>
          ❯
        </button>
      </div>
    </section>
  );
}

export default FeaturedModels;
