import { useEffect, useState } from "react";
import axios from "axios";

function Catalogo() {
  const [carros, setCarros] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/carros").then((resposta) => {
      setCarros(resposta.data);
      console.log(resposta.data);
    });
  }, []);

  return (
    <section>
      <div>Catálogo de veículos</div>
      <div className="Catalogo">
        {carros.map((carro) => (
          <div key={carro.id}>
            <img
              src={`http://localhost:3000/uploads/${carro.imagem}`}
              alt={carro.nome}
            />
            <h2>{carro.nome}</h2>
            <h2>{carro.marca}</h2>
            <h2>{carro.modelo}</h2>
            <h2>{carro.ano}</h2>
            <h2>{carro.cor}</h2>
            <h2>{carro.combustivel}</h2>
            <h2>{carro.cambio}</h2>
            <h2>{carro.quilometragem}</h2>
            <h2>{carro.potencia}</h2>
            <h2>{carro.preco}</h2>
            <h2>{carro.descricao}</h2>
            <h2>{carro.created_at}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;
