import { FaShieldDog, FaFutbol, FaUserNurse, FaHeart } from "react-icons/fa6";
import "./Hotel.css";

import pet1 from "../../assets/pet1.jpg";
import pet2 from "../../assets/pet2.png";
import pet3 from "../../assets/pet3.png";
import pet4 from "../../assets/pet4.png";

function Hotel() {
  const whatsapp = "https://wa.me/5554999999999";

  return (
    <main className="hotel">
      {/* HERO */}

      <section className="hotel-hero">
        <img src={pet4} alt="Hotel Pet" />

        <div className="hotel-overlay">
          <h1>Hotel Pet</h1>

          <p>
            Conforto, segurança e carinho para seu melhor amigo enquanto você
            estiver longe.
          </p>
        </div>
      </section>

      {/* BENEFÍCIOS */}

      <section className="hotel-benefits">
        <div className="container">
          <h2>Por que escolher nosso Hotel Pet?</h2>

          <p>
            Um ambiente preparado para oferecer conforto, diversão e
            tranquilidade durante toda a hospedagem.
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <FaShieldDog className="benefit-icon" />
              <h3>Ambiente Seguro</h3>

              <p>Espaços planejados para garantir segurança e bem-estar.</p>
            </div>

            <div className="benefit-card">
              <FaFutbol className="benefit-icon" />
              <h3>Recreação Diária</h3>

              <p>
                Atividades supervisionadas para manter os pets felizes e ativos.
              </p>
            </div>

            <div className="benefit-card">
              <FaUserNurse className="benefit-icon" />
              <h3>Monitoramento</h3>

              <p>Acompanhamento constante durante toda a estadia.</p>
            </div>

            <div className="benefit-card">
              <FaHeart className="benefit-icon" />
              <h3>Muito Carinho</h3>

              <p>Tratamos cada hóspede como parte da nossa família.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}

      <section className="hotel-gallery">
        <div className="container">
          <h2>Nosso Ambiente</h2>

          <div className="gallery-grid">
            <img src={pet1} alt="Área de recreação" />
            <img src={pet2} alt="Área de descanso" />
            <img src={pet3} alt="Momentos de diversão" />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}

      <section className="hotel-process">
        <div className="container">
          <h2>Como funciona?</h2>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">1</div>

              <h3>Reserva</h3>

              <p>Entre em contato e escolha o período da hospedagem.</p>
            </div>

            <div className="process-card">
              <div className="process-number">2</div>

              <h3>Check-in</h3>

              <p>Recebemos seu pet com toda atenção e cuidado.</p>
            </div>

            <div className="process-card">
              <div className="process-number">3</div>

              <h3>Hospedagem</h3>

              <p>
                Alimentação, recreação e acompanhamento durante toda a estadia.
              </p>
            </div>

            <div className="process-card">
              <div className="process-number">4</div>

              <h3>Check-out</h3>

              <p>Seu melhor amigo retorna feliz e bem cuidado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="hotel-cta">
        <h2>Reserve a hospedagem do seu pet</h2>

        <p>
          Entre em contato com nossa equipe e garanta uma estadia segura,
          confortável e cheia de carinho.
        </p>

        <a
          href={`${whatsapp}?text=Olá! Gostaria de reservar uma hospedagem para meu pet.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Reservar Agora</button>
        </a>
      </section>
    </main>
  );
}

export default Hotel;
