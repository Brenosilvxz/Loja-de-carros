import "./Banner.css";
import { Link } from "react-router-dom";
import banner1 from "../../assets/banner-car.jpg";
import banner2 from "../../assets/banner-car2.jpg";
import banner3 from "../../assets/banner-car3.jpg";

function Banner() {
  return (
    <section className="Banner">
      <div className="Banner1">
        <img src={banner1} alt="" />
        <h1>Porsche</h1>
        <h2>Luxo, conforto e qualidade com a íncrivel Porsche.</h2>
        <Link className="Linkss" to="/Porsche">
          Descobrir
        </Link>
      </div>

      <div className="Banner1">
        <img src={banner2} alt="" />
        <h1>Ferrari</h1>
        <h2>Modelos da marca Italiana, voçê encontra aqui.</h2>
        <Link className="Linkss" to="/Ferrari">
          Descobrir
        </Link>
      </div>

      <div className="Banner1">
        <img src={banner3} alt="" />
        <h1>Mercedes</h1>
        <h2>Acabamentos sensacionais e alta velocidade com a Mercedes.</h2>
        <Link className="Linkss" to="/Mercedes">
          Descobrir
        </Link>
      </div>
    </section>
  );
}
export default Banner;
