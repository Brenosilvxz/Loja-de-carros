import Hero from "../../components/Hero/Hero";
import FeaturedModels from "../../components/FeaturedModels/FeaturedModels";
import Featuredcars from "../../components/FeaturedCars/FeaturedCars";
import Banner from "../../components/Banner/Banner";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedModels />
      <Featuredcars />
      <Banner />
    </>
  );
}

export default Home;
