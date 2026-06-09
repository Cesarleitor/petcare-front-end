import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
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
          <Link to="/" className="logo">
            🐾 PetCare
          </Link>

          <nav className={`navbar-nav ${isOpen ? "active" : ""}`}>
            <ul className="nav-links">
              <li>
                <Link to="/" onClick={closeMenu}>
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" onClick={closeMenu}>
                  Sobre
                </Link>
              </li>

              <li>
                <Link to="/servicos" onClick={closeMenu}>
                  Serviços
                </Link>
              </li>

              <li>
                <Link to="/hotel" onClick={closeMenu}>
                  Hotel Pet
                </Link>
              </li>

              <li>
                <Link to="/adocao" onClick={closeMenu}>
                  Adoção
                </Link>
              </li>

              <li>
                <Link to="/contato" onClick={closeMenu}>
                  Contato
                </Link>
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
