import logo from "../../assets/logo.png";
import "./Loading.css";
import video from "../../assets/loading-car.mp4";

function Loading({ fadeOut }) {
  return (
    <div className={`Loading ${fadeOut ? "fade-out" : ""}`}>
      <video className="Loading-video" src={video} autoPlay muted playsInline />

      <div className="Overlay"></div>

      <div className="Loading-content">
        <img src={logo} alt="MeeCars" />
        <p>Performance • Exclusividade • Elegância</p>
      </div>
    </div>
  );
}

export default Loading;
