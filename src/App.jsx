import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

import Home from "./Pages/Home/Home";
import Catalogo from "./Pages/Catalogo/Catalogo";
import Detalhes from "./Pages/Detalhes/Detalhes";
import Destaques from "./Pages/Destaques/Destaques";
import Localize from "./Pages/Localize/Localize";
import Sobre from "./Pages/Sobre/Sobre";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Favoritos from "./Pages/Favoritos/Favoritos";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startFade = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const finishLoading = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(startFade);
      clearTimeout(finishLoading);
    };
  }, []);

  return (
    <>
      {loading && <Loading fadeOut={fadeOut} />}

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/destaques" element={<Destaques />} />
          <Route path="/localize" element={<Localize />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/carros/:id" element={<Detalhes />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
