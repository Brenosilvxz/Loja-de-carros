import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeaturedCars from "./components/FeaturedCars/FeaturedCars";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <FeaturedCars />
    </BrowserRouter>
  );
}

export default App;
