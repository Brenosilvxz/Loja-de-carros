import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";

import Catalogo from "./Pages/Catalogo/Catalogo";

import Detalhes from "./Pages/Detalhes/Detalhes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carros/:id" element={<Detalhes />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
