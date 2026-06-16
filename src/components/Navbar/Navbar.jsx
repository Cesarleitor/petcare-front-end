import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="logo" aria-label="Página inicial PetCare">
            🐾 PetCare
          </NavLink>

         <nav
  className={`navbar-nav ${isOpen ? "active" : ""}`}
  aria-label="Menu Principal"
>
  <ul className="nav-links">
    <li>
      <NavLink
        to="/"
        end
        onClick={closeMenu}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Início
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/sobre"
        onClick={closeMenu}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Sobre
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/servicos"
        onClick={closeMenu}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Serviços
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/hotel"
        onClick={closeMenu}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Hotel Pet
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/adocao"
        onClick={closeMenu}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Adoção
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/contato"
        onClick={closeMenu}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Contato
      </NavLink>
    </li>
  </ul>
</nav>

          <a
            href="https://wa.me/5554999999999"
            className="btn-whatsapp"
            target="_blank"
            rel="noreferrer"
            aria-label="Entrar em contato pelo WhatsApp"
          >
            WhatsApp
          </a>

          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {isOpen && <div className="overlay" onClick={closeMenu} />}

      <a
        href="https://wa.me/5554999999999"
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Entrar em contato pelo WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
}

export default Navbar;
