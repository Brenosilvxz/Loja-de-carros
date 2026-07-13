import { useEffect, useState } from "react";
import axios from "axios";
import "./Catalogo.css";
import { Link } from "react-router-dom";
import Banner from "../../assets/banner.png";
import Banner1 from "../../assets/banner.png";

function Catalogo() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/carros").then((resposta) => {
      setCarros(resposta.data);
    });
  }, []);

  return (
    <section className="CatalogoPage">
      <h1 className="Tittlee">Catálogo de Veículos</h1>

      <div className="Catalogo">
        {carros.map((carro) => (
          <div className="Card" key={carro.id}>
            <div className="Car">
              <img
                src={`http://localhost:3000/uploads/${carro.imagem}`}
                alt={carro.nome}
              />
            </div>

            <div className="Textss">
              <h2>{carro.nome}</h2>

              <p>{carro.marca}</p>

              <h3>R$ {Number(carro.preco).toLocaleString("pt-BR")}</h3>

              <Link className="Details" to={`/carros/${carro.id}`}>
                Ver detalhes 🔎
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="Banners">
        <img src={Banner} alt="" />
        <img src={Banner1} alt="" />
      </div>
    </section>
  );
}

export default Catalogo;
