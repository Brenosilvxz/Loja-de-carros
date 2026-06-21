import "./FeaturedCars.css";
import { Link } from "react-router-dom";

import cardsedan from "../../assets/card1.jpg";
import modelosedan from "../../assets/sedan1.jpg";
import modelosedan2 from "../../assets/sedan2.jpg";
import sedanbox from "../../assets/sedanbox.jpg";
import sedanbox2 from "../../assets/sedanbox2.jpg";

function FeaturedCars() {
  return (
    <section className="Cards">
      <div className="Card1">
        {/* Imagem principal */}
        <div className="ImageContainer">
          <img src={cardsedan} alt="Sedan" />
        </div>

        {/* Conteúdo da direita */}
        <div className="InfoSedan">
          <h1 className="Tittle">Explore nossos modelos sedans</h1>

          <p className="TextSedan">
            Os sedãs unem elegância, conforto e desempenho em um único veículo.
            Com design sofisticado, amplo espaço interno e tecnologias modernas,
            são a escolha ideal para quem busca uma experiência de condução
            refinada, seja para o dia a dia ou para viagens. Descubra nossa
            seleção de sedãs e encontre o modelo que combina perfeitamente com o
            seu estilo.
          </p>

          <Link to="/sedans" className="btn-modelo">
            Ver modelos →
          </Link>
          <div className="Cardssedan">
            <div className="Modelosedan">
              <div className="ImageContainer">
                <img src={modelosedan} alt="Modelo Sedan" />
              </div>
            </div>
            <div className="Modelosedan2">
              <div className="ImageContainer">
                <img src={modelosedan2} alt="Modelo Sedan2" />
              </div>
            </div>
          </div>
          <div className="Boxsedan">
            <div>
              <img src={sedanbox} alt="" />
            </div>
            <div>
              <img src={sedanbox2} alt="" />
            </div>
          </div>
          <div className="Textboxsedan">
            <h2>
              Os sedãs são reconhecidos pelo equilíbrio entre conforto,
              elegância e desempenho. Seu design aerodinâmico proporciona maior
              estabilidade e eficiência, enquanto o amplo espaço interno garante
              uma viagem agradável para todos os ocupantes. Além disso, oferecem
              excelente isolamento acústico, dirigibilidade precisa e um
              porta-malas espaçoso, ideal para o dia a dia e viagens. Com
              tecnologias modernas de segurança, conectividade e assistência ao
              motorista, os sedãs entregam uma experiência de condução
              sofisticada, segura e confiável, atendendo às necessidades de quem
              valoriza qualidade e praticidade.
            </h2>
          </div>
        </div>
      </div>

      <div className="Card2"></div>

      <div className="Card3"></div>
    </section>
  );
}

export default FeaturedCars;
