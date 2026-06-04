import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <main className="contact">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Entre em Contato</h1>

          <p>
            Estamos prontos para ajudar você e seu pet. Entre em contato com
            nossa equipe e tire todas as suas dúvidas.
          </p>
        </div>
      </section>

      {/* INFORMAÇÕES */}
      <section className="contact-info">
        <h2>Fale Conosco</h2>

        <div className="contact-info-grid">
          <div className="contact-info-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Endereço</h3>
            <p>Rua Exemplo, 123 - Centro</p>
          </div>

          <div className="contact-info-card">
            <FaPhoneAlt className="contact-icon" />
            <h3>Telefone</h3>
            <p>(54) 99999-9999</p>
          </div>

          <div className="contact-info-card">
            <FaEnvelope className="contact-icon" />
            <h3>E-mail</h3>
            <p>contato@petcare.com</p>
          </div>

          <div className="contact-info-card">
            <FaClock className="contact-icon" />
            <h3>Atendimento</h3>
            <p>Segunda a Sábado • 08h às 18h</p>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="contact-map">
        <h2>Nossa Localização</h2>

        <div className="map-container">
          {/* Google Maps entra aqui depois */}
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="contact-form-section">
        <h2>Envie uma Mensagem</h2>

        <form className="contact-form">
          <input type="text" placeholder="Seu nome" />

          <input type="email" placeholder="Seu e-mail" />

          <input type="tel" placeholder="Seu telefone" />

          <input type="text" placeholder="Assunto" />

          <textarea rows="5" placeholder="Digite sua mensagem"></textarea>

          <button type="submit">Enviar Mensagem</button>
        </form>
      </section>

      {/* FAQ */}
      <section className="contact-faq">
        <h2>Perguntas Frequentes</h2>

        <div className="contact-faq-grid">
          <div className="contact-faq-card">
            <h3>Como agendar um serviço?</h3>
            <p>Você pode entrar em contato pelo formulário ou WhatsApp.</p>
          </div>

          <div className="contact-faq-card">
            <h3>Vocês atendem emergências?</h3>
            <p>Consulte nossa equipe para verificar disponibilidade.</p>
          </div>

          <div className="contact-faq-card">
            <h3>Posso visitar o hotel antes?</h3>
            <p>Sim! Agende uma visita e conheça nossa estrutura.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <h2>Estamos esperando você e seu pet!</h2>

        <p>Entre em contato e descubra como podemos ajudar.</p>

        <button>Falar no WhatsApp</button>
      </section>
    </main>
  );
}

export default Contact;
