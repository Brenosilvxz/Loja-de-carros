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
      <div>
        {carros.map((carro) => (
          <div key={carro.id}>
            <h2>{carro.nome}</h2>
            <h2>{carro.ano}</h2>
            <h2>{carro.preco}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;
