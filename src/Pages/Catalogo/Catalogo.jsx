import "./Catalogo.css";
import { Link } from "react-router-dom";

import bmw from "../../assets/bmw.jpg";
import audi from "../../assets/audi.jpg";
import mercedes from "../../assets/mercedes.jpg";
import porsche from "../../assets/porsche.jpg";
import i30 from "../../assets/i30.jpg";
import golftsi from "../../assets/golf.jpg";
import polotsi from "../../assets/polo.jpg";
import jettagli from "../../assets/jetta.jpg";
import yaris from "../../assets/yaris.jpg";
import audiq3 from "../../assets/audiq3.jpg";
import nivus from "../../assets/nivus.jpg";
import bmwx5 from "../../assets/bmwx5.jpg";
import hylux from "../../assets/hylux.jpg";
import fiattoro from "../../assets/fiattoro.jpg";
import amarok from "../../assets/amarok.jpg";
import s10 from "../../assets/s10.jpg";
import bydsegull from "../../assets/bydsegull.jpg";
import bydseal from "../../assets/bydseal.jpg";
import teslamodely from "../../assets/teslamodely.jpg";
import volvoex30 from "../../assets/volvoex30.jpg";
import hb20 from "../../assets/hb20.jpg";
import onix from "../../assets/onix.jpg";
import fiatargo from "../../assets/fiatargo.jpg";
import hondafit from "../../assets/hondafit.jpg";
import nissangtr from "../../assets/nissangtr.jpg";
import hondacivictyper from "../../assets/hondacivictyper.jpg";
import bmwm4 from "../../assets/bmwm4.jpg";
import nissan350z from "../../assets/nissan350z.jpg";
import volante from "../../assets/steering-wheel.svg";

function Catalogo() {
  return (
    <main>
      <section className="catalogo-header">
        <h1>Catálogo de Veículos</h1>
        <img src={volante} alt="" />
      </section>

      <section className="catalogo-filtros">
        <input type="text" placeholder="Descreva o que voçê está procurando" />

        <select>
          <option value="">Categoria</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="esportivos">Esportivos</option>
          <option value="eletricos">Elétricos</option>
          <option value="picapes">Picapes</option>
          <option value="hibridos">Híbridos</option>
          <option value="luxo">Luxo</option>
          <option value="zerokm">Clássicos</option>
          <option value="economicos">Econômicos</option>
          <option value="populares">Populares</option>
          <option value="modificados">Modificados</option>
        </select>
        <select>
          <option value="">Faixa de preço</option>
          <option value="ate-20">Até R$ 20.000</option>
          <option value="ate-30">Até R$ 30.000</option>
          <option value="ate-40">Até R$ 40.000</option>
          <option value="ate-50">Até R$ 50.000</option>
          <option value="ate-70">Até R$ 70.000</option>
          <option value="ate-100">Até R$ 100.000</option>
          <option value="100-200">R$ 100.000 - R$ 200.000</option>
          <option value="200-400">R$ 200.000 - R$ 400.000</option>
          <option value="400+">Acima de R$ 400.000</option>
        </select>
        <select>
          <option value="">Quilometragem</option>
          <option value="0">0 km</option>
          <option value="0-20000">Até 20.000 km</option>
          <option value="20000-50000">20.000 - 50.000 km</option>
          <option value="50000-100000">50.000 - 100.000 km</option>
          <option value="100000+">Acima de 100.000 km</option>
        </select>
      </section>

      <section className="catalogo-grid">
        <Link to="/carro/bmw-m3" className="car-card">
          <img src={bmw} alt="BMW M3" />
          <h3>BMW M3</h3>
          <p>Performance extrema e tecnologia inspirada nas pistas.</p>
        </Link>

        <Link to="/carro/audi-a4" className="car-card">
          <img src={audi} alt="Audi A4" />
          <h3>Audi A4</h3>
          <p>Motor turbo, conforto e acabamento de alto padrão.</p>
        </Link>

        <Link to="/carro/mercedes-c200" className="car-card">
          <img src={mercedes} alt="Mercedes C200" />
          <h3>Mercedes C200</h3>
          <p>LElegância, desempenho e sofisticação em cada detalhe.</p>
        </Link>

        <Link to="/carro/porsche-718-cayman" className="car-card">
          <img src={porsche} alt="Porsche 718 cayman" />
          <h3>Porsche 718 cayman</h3>
          <p>
            Esportivo de motor central com desempenho e precisão excepcionais.
          </p>
        </Link>

        <Link to="/carro/i30" className="car-card">
          <img src={i30} alt="Hyundai I30" />
          <h3>Hyundai I30</h3>
          <p>
            Hatch esportivo com conforto, tecnologia e excelente desempenho.
          </p>
        </Link>

        <Link to="/carro/golf-tsi" className="car-card">
          <img src={golftsi} alt="Golf TSI" />
          <h3>Volkswagen Golf TSI</h3>
          <p>Hatch turbo com desempenho, conforto e tecnologia de ponta.</p>
        </Link>

        <Link to="/carro/polo-tsi" className="car-card">
          <img src={polotsi} alt="Polo TSI" />
          <h3>Volkswagen Polo TSI</h3>
          <p>
            Hatch compacto com motor turbo, economia e excelente desempenho.
          </p>
        </Link>

        <Link to="/carro/jetta-gli" className="car-card">
          <img src={jettagli} alt="Jetta GLI" />
          <h3> Volkswagen Jetta GLI</h3>
          <p>Sedã esportivo com motor turbo e desempenho empolgante.</p>
        </Link>
        <Link to="/carro/yaris" className="car-card">
          <img src={yaris} alt="Yaris" />
          <h3>Toyota Yaris</h3>
          <p>Conforto, economia e confiabilidade para o dia a dia.</p>
        </Link>

        <Link to="/carro/audi-q3-sportback" className="car-card">
          <img src={audiq3} alt="Audi Q3 Sportback" />
          <h3>Audi Q3 Sportback</h3>
          <p>SUV premium com design esportivo, luxo e tecnologia.</p>
        </Link>

        <Link to="/carro/nivus" className="car-card">
          <img src={nivus} alt="Nivus" />
          <h3>Wolskvagen Nivus</h3>
          <p>Motor TSI, conforto e conectividade para qualquer trajeto.</p>
        </Link>

        <Link to="/carro/bmw-x5" className="car-card">
          <img src={bmwx5} alt="BMW X5" />
          <h3>BMW X5</h3>
          <p>Potência, sofisticação e dirigibilidade incomparável.</p>
        </Link>

        <Link to="/carro/hilux" className="car-card">
          <img src={hylux} alt="Toyota Hilux" />
          <h3>Toyota Hilux</h3>
          <p>Picape robusta, potente e pronta para qualquer desafio.</p>
        </Link>

        <Link to="/carro/fiat-toro" className="car-card">
          <img src={fiattoro} alt="Fiat Toro" />
          <h3>Fiat Toro</h3>
          <p>Picape versátil com conforto, tecnologia e desempenho.</p>
        </Link>

        <Link to="/carro/amarok" className="car-card">
          <img src={amarok} alt="Volkswagen Amarok" />
          <h3>Volkswagen Amarok</h3>
          <p>Força e tecnologia para enfrentar qualquer desafio.</p>
        </Link>

        <Link to="/carro/chevrolet-s10" className="car-card">
          <img src={s10} alt="Chevrolet S10" />
          <h3>Chevrolet S10</h3>
          <p>Desempenho confiável em qualquer terreno e situação.</p>
        </Link>
        <Link to="/carro/byd-segull" className="car-card">
          <img src={bydsegull} alt="BYD segull" />
          <h3>BYD segull</h3>
          <p>Compacto elétrico com tecnologia, economia e zero emissões.</p>
        </Link>

        <Link to="/carro/byd-seal" className="car-card">
          <img src={bydseal} alt="BYD seal" />
          <h3>BYD seal</h3>
          <p>edã elétrico premium com alto desempenho e tecnologia.</p>
        </Link>

        <Link to="/carro/tesla-model-y" className="car-card">
          <img src={teslamodely} alt="Tesla Model Y" />
          <h3>Tesla Model Y</h3>
          <p>SUV elétrico com tecnologia, autonomia e alto desempenho.</p>
        </Link>

        <Link to="/carro/volvo-ex30" className="car-card">
          <img src={volvoex30} alt="Volvo EX30" />
          <h3>Volvo EX30</h3>
          <p>Design escandinavo, autonomia e inovação em cada viagem.</p>
        </Link>

        <Link to="/carro/hb20" className="car-card">
          <img src={hb20} alt="Hyundai HB20" />
          <h3>Hyundai HB20</h3>
          <p>Hatch compacto com economia, conforto e tecnologia</p>
        </Link>

        <Link to="/carro/onix" className="car-card">
          <img src={onix} alt="Chevrolet Onix" />
          <h3>Chevrolet Onix</h3>
          <p>Hatch compacto com economia, tecnologia e ótimo desempenho.</p>
        </Link>

        <Link to="/carro/fiat-argo" className="car-card">
          <img src={fiatargo} alt="Fiat Argo" />
          <h3>Fiat Argo</h3>
          <p>Design marcante, tecnologia e eficiência para o dia a dia.</p>
        </Link>

        <Link to="/carro/honda-fit" className="car-card">
          <img src={hondafit} alt="Honda Fit" />
          <h3>Honda Fit</h3>
          <p>Compacto versátil com amplo espaço, conforto e economia.</p>
        </Link>
        <Link to="/carro/nissan-gtr" className="car-card">
          <img src={nissangtr} alt="Nissan GT-R R35" />
          <h3>Nissan GT-R R35</h3>
          <p>
            Superesportivo com potência extrema e desempenho impressionante.
          </p>
        </Link>

        <Link to="/carro/honda-civic-type-r" className="car-card">
          <img src={hondacivictyper} alt="Honda Civic Type R" />
          <h3>Honda Civic Type R</h3>
          <p>Alto desempenho, design agressivo e tecnologia esportiva.</p>
        </Link>

        <Link to="/carro/bmw-m4" className="car-card">
          <img src={bmwm4} alt="BMW M4" />
          <h3>BMW M4 </h3>
          <p>Coupé esportivo com potência, luxo e desempenho excepcional.</p>
        </Link>

        <Link to="/carro/nissan-350z" className="car-card">
          <img src={nissan350z} alt="Nissan 350Z" />
          <h3>Nissan 350Z</h3>
          <p>Esportivo icônico com motor V6 e tração traseira.</p>
        </Link>
      </section>
    </main>
  );
}

export default Catalogo;
