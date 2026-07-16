import { useEffect, useState } from "react";
import axios from "axios";
import "./Catalogo.css";
import { Link, useNavigate } from "react-router-dom";

function Catalogo() {
  const [carros, setCarros] = useState([]);

  const navigate = useNavigate();
  async function favoritar(id) {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      await axios.post(
        "http://localhost:3000/favoritos",
        {
          carro_id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("Carro favoritado!");
    } catch (erro) {
      alert("Erro ao favoritar o carro.");
      console.error(erro);
    }
  }

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

              <div className="Actions">
                <Link className="Details" to={`/carros/${carro.id}`}>
                  Ver detalhes 🔎
                </Link>

                <button
                  className="Favorite"
                  onClick={() => favoritar(carro.id)}
                >
                  🤍
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;
