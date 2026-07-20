import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detalhes.css";

function Detalhes() {
  const { id } = useParams();

  const [carro, setCarro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/carros/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCarro(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Carregando...</h2>;

  if (!carro) return <h2>Carro não encontrado.</h2>;

  return (
    <section className="detalhes-page">
      <div className="detalhes-container">
        <div className="detalhes-imagem">
          <img
            src={`http://localhost:3000/uploads/${carro.imagem}`}
            alt={carro.nome}
          />
        </div>

        <div className="detalhes-info">
          <span className="detalhes-marca">{carro.marca}</span>

          <h1 className="detalhes-titulo">{carro.nome}</h1>

          <h2 className="detalhes-preco">
            R$ {Number(carro.preco).toLocaleString("pt-BR")}
          </h2>

          <p className="detalhes-descricao">{carro.descricao}</p>

          <div className="detalhes-grid">
            <div className="detalhes-card">
              <h3>Ano</h3>
              <p>{carro.ano}</p>
            </div>

            <div className="detalhes-card">
              <h3>Cor</h3>
              <p>{carro.cor}</p>
            </div>

            <div className="detalhes-card">
              <h3>Combustível</h3>
              <p>{carro.combustivel}</p>
            </div>

            <div className="detalhes-card">
              <h3>Câmbio</h3>
              <p>{carro.cambio}</p>
            </div>

            <div className="detalhes-card">
              <h3>Quilometragem</h3>
              <p>{carro.quilometragem} km</p>
            </div>

            <div className="detalhes-card">
              <h3>Potência</h3>
              <p>{carro.potencia} cv</p>
            </div>
          </div>

          <button className="detalhes-botao">Comprar Agora</button>
        </div>
      </div>
    </section>
  );
}

export default Detalhes;
