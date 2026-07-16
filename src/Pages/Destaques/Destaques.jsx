import { useEffect, useState } from "react";
import axios from "axios";
import "./Destaques.css";
import { Link } from "react-router-dom";

// Imagens
import dodge from "../../assets/dodge.jpg";
import audi from "../../assets/audi.jpg";
import porsche from "../../assets/porsche.jpg";

// Imagens cards

import lambo from "../../assets/lamborghini.jpg";
import gtr from "../../assets/skyline.jpg";
import dentro from "../../assets/acabamento.jpg";

// Imagem única

import img from "../../assets/revendedor.jpg";

// Vídeo

import video from "../../assets/car-video.mp4";
const imagens = {
  20: dodge,
  21: porsche,
  22: audi,
};

function Destaques() {
  const [carros, setCarros] = useState([]);
  const [index, setIndex] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/carros").then((resposta) => {
      const carrosDestaque = resposta.data.filter((carro) =>
        [20, 21, 22].includes(carro.id),
      );

      setCarros(carrosDestaque);
    });
  }, []);

  // Carrossel automático
  useEffect(() => {
    if (carros.length === 0 || pausado) return;

    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % carros.length);
    }, 6000);

    return () => clearInterval(intervalo);
  }, [carros, pausado]);

  function proximo() {
    setIndex((prev) => (prev + 1) % carros.length);
  }

  function anterior() {
    setIndex((prev) => (prev - 1 + carros.length) % carros.length);
  }

  if (carros.length === 0) {
    return <h2>Carregando...</h2>;
  }

  return (
    <main>
      <section className="Carrousel">
        <div
          className="Car1"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
        >
          <img
            key={index}
            className="ImagemCarrossel"
            src={imagens[carros[index].id]}
            alt={carros[index].nome}
          />

          <div className="Info">
            <h2>{carros[index].nome}</h2>
          </div>
        </div>
        <div className="Buttons">
          <button onClick={anterior}>❮</button>
          <button onClick={proximo}>❯</button>
        </div>
      </section>
      <section className="Cards-ofertas">
        <div className="Card-ofertas">
          <img src={lambo} alt="" />
          <h3 className="Desc">Variedades </h3>
          <h1 className="Tittle-cards">
            Fique ligado com as novidades e surpresas!
          </h1>
          <h4 className="Text-cards">
            As novidades da nossa marca vão surpreender investidores e clientes.
            Em breve, ampliaremos nosso catálogo com novas marcas de veículos e
            muitas outras novidades preparadas especialmente para você. Fique
            ligado!
          </h4>
        </div>
        <div className="Card-ofertas">
          <img src={gtr} alt="" />
          <div className="Two">
            <h3 className="Desc"> Clássicos </h3>
            <h3 className="Desc"> favoritos </h3>
          </div>
          <h1 className="Tittle-cards">
            Carros clássicos que ligaram gerações.
          </h1>
          <h4 className="Text-cards">
            Os queridinhos do público já fazem parte do nosso catálogo e outros
            estão a caminho. Clássicos que marcaram época, modelos altamente
            desejados por colecionadores e veículos com histórico nas pistas
            estão chegando para elevar ainda mais a nossa seleção. Prepare-se
            para grandes novidades!
          </h4>
        </div>
        <div className="Card-ofertas">
          <img src={dentro} alt="" />
          <h3 className="Desc">Por dentro </h3>
          <h1 className="Tittle-cards">Por dentro de carros espetaculares.</h1>
          <h4 className="Text-cards">
            Descubra cada detalhe dos modelos que fazem parte do nosso catálogo.
            Conheça o desempenho, a tecnologia, o conforto e o acabamento que
            tornam cada veículo único. De clássicos inesquecíveis a esportivos
            de alta performance, selecionamos carros que unem qualidade,
            exclusividade e uma experiência incomparável ao volante.
          </h4>
        </div>
      </section>
      <section className="Revendedor">
        <div className="Encontre">
          <img src={img} alt="" />
          <h1 className="Encontre-text">Localize nossas concessionárias</h1>

          <Link className="Encontre-link" to="/localize">
            Encontre perto de você
          </Link>
        </div>
      </section>
      <section className="Video">
        <video src={video} autoPlay loop muted playsInline />
        <div className="Video-content">
          <h1>Desempenho que Inspira</h1>
          <p>
            Cada detalhe foi pensado para oferecer uma experiência única ao
            volante. Descubra veículos que unem potência, tecnologia e design em
            perfeita harmonia. Dos clássicos que marcaram gerações aos
            superesportivos mais desejados do mundo, aqui você encontra carros
            que transformam cada viagem em um momento inesquecível.
          </p>

          <Link to="/catalogo" className="Video-btn">
            Explorar Catálogo
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Destaques;
