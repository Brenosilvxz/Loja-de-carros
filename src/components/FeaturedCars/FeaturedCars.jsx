import "./FeaturedCars.css";
import { Link } from "react-router-dom";
import bmw from "../../assets/bmw-models.jpg";
// import audi from "../../assets/audi-models.jpg";
import porsche from "../../assets/porsche-models.jpg";

function FeaturedCars() {
  return (
    <section className="Models">
      <div className="Tittle">
        <h1>Modelos mais buscados</h1>
      </div>
      <div className="Cards">
        <div className="Card1">
          <img src={bmw} alt="bmw" />

          <Link className="h2" to="/">
            BMW M3
          </Link>
        </div>
        {/* <div className="Card1">
          <img src={audi} alt="bmw" />
          <Link className="h2" to="/">
            Audi R8
          </Link>
        </div> */}
        <div className="Card1">
          <img src={porsche} alt="bmw" />
          <Link className="h2" to="/">
            Porsche 911
          </Link>
        </div>
      </div>
    </section>
  );
}
export default FeaturedCars;
