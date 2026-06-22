import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeaturedCars from "./components/FeaturedCars/FeaturedCars";
import FeaturedModels from "./components/FeaturedModels/FeaturedModels";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <FeaturedCars />
      <FeaturedModels />
    </BrowserRouter>
  );
}

export default App;
