import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Adoption from "../pages/Adoption/Adoption";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

function AppRoutes() {
  return (
    <BrowserRouter basename="/petcare">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/adocao" element={<Adoption />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
