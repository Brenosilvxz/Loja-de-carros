import "./FeaturedCars.css";
import bmw from "../../assets/bmw-models.jpg";
import audi from "../../assets/audi-models.jpg";
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
          <h2>BMW M3</h2>
        </div>
        <div className="Card1">
          <img src={audi} alt="bmw" />
          <h2>Audi R8</h2>
        </div>
        <div className="Card1">
          <img src={porsche} alt="bmw" />
          <h2>Porsche 911</h2>
        </div>
      </div>
    </section>
  );
}
export default FeaturedCars;
