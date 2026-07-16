import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Favoritos.css";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    carregarFavoritos();
  }, []);

  async function carregarFavoritos() {
    const token = localStorage.getItem("token");

    try {
      const resposta = await axios.get("http://localhost:3000/favoritos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFavoritos(resposta.data);
    } catch (erro) {
      console.log(erro);
    }
  }

  async function removerFavorito(id) {
    const token = localStorage.getItem("token");

    try {
      await axios.delete(`http://localhost:3000/favoritos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      carregarFavoritos();
    } catch (erro) {
      console.log(erro);
    }
  }

  return (
    <section className="FavoritosPage">
      <h1>❤️ Meus Favoritos</h1>

      <div className="FavoritosGrid">
        {favoritos.length === 0 ? (
          <div className="SemFavoritos">
            <h2>Nenhum carro favoritado.</h2>
            <p>Adicione veículos aos seus favoritos.</p>
          </div>
        ) : (
          favoritos.map((carro) => (
            <div className="FavoritoCard" key={carro.id}>
              <img
                src={`http://localhost:3000/uploads/${carro.imagem}`}
                alt={carro.nome}
              />

              <div className="Info">
                <h2>{carro.nome}</h2>

               

                <h3>R$ {Number(carro.preco).toLocaleString("pt-BR")}</h3>

                <div className="Buttons">
                  <Link className="Detalhes" to={`/carros/${carro.id}`}>
                    Ver detalhes
                  </Link>

                  <button
                    className="Remover"
                    onClick={() => removerFavorito(carro.id)}
                  >
                    Remover ❤️
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Favoritos;
