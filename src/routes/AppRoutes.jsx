import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Hotel from "../pages/Hotel/Hotel";
import Adoption from "../pages/Adoption/Adoption";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/adocao" element={<Adoption />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;