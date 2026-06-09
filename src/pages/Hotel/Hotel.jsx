import {
  FaShieldDog,
  FaFutbol,
  FaUserNurse,
  FaHeart,
  FaCamera,
  FaDog,
} from "react-icons/fa6";
import "./Hotel.css";

import pet1 from "../../assets/pet1.webp";
import pet2 from "../../assets/pet2.webp";
import pet3 from "../../assets/pet3.webp";

function Hotel() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const mensagem = "Olá! Gostaria de solicitar uma reserva para meu pet.";

    window.open(
      `https://wa.me/5554999999999?text=${encodeURIComponent(mensagem)}`,
      "_blank",
    );
  };

  return (
    <main className="hotel">
      {/* HERO */}
      {/* HERO */}
      <section className="hotel-hero">
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
            <div className="benefit-card">
              <FaCamera className="benefit-icon" />

              <h3>Atualizações para o Tutor</h3>

              <p>
                Enviamos fotos e informações para que você acompanhe a estadia
                do seu pet.
              </p>
            </div>
            <div className="benefit-card">
              <FaDog className="benefit-icon" />

              <h3>Socialização Saudável</h3>

              <p>
                Atividades supervisionadas para estimular interação e diversão
                entre os pets.
              </p>
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

      {/* AGENDAMENTO */}
      <section className="hotel-booking">
        <div className="container booking-container">
          <h2>Solicite uma Reserva</h2>
          <p className="booking-subtitle">
            Preencha os dados abaixo e nossa equipe entrará em contato para
            confirmar a disponibilidade da hospedagem.
          </p>

          <form className="booking-form" onSubmit={handleSubmit}>
            <label>Tutor</label>
            <input type="text" placeholder="Nome do Tutor" />

            <label>Pet</label>
            <input type="text" placeholder="Nome do Pet" />

            <label>Data de Entrada</label>
            <input type="date" />

            <label>Data de Saída</label>
            <input type="date" />

            <label>Tamanho do seu Pet</label>
            <select>
              <option>Porte do Pet</option>
              <option>Pequeno</option>
              <option>Médio</option>
              <option>Grande</option>
            </select>

            <label>Telefone para Contato</label>
            <input type="tel" placeholder="Telefone para Contato" />

            <textarea
              placeholder="Observações importantes sobre seu pet"
              rows="4"
            ></textarea>

            <button type="submit">Solicitar Reserva</button>
          </form>
        </div>
      </section>

      {/* FAQ */}

      <section className="hotel-faq">
        <div className="container">
          <h2>Perguntas Frequentes</h2>

          <div className="faq-grid">
            <div className="faq-card">
              <h3>Posso levar a própria ração?</h3>

              <p>
                Sim! Recomendamos trazer a alimentação habitual do seu pet para
                manter a rotina e evitar desconfortos.
              </p>
            </div>

            <div className="faq-card">
              <h3>Como funciona a adaptação?</h3>

              <p>
                Nossa equipe acompanha cada pet de forma individual para
                garantir conforto e tranquilidade durante a estadia.
              </p>
            </div>

            <div className="faq-card">
              <h3>Há acompanhamento durante a hospedagem?</h3>

              <p>
                Sim! Os pets recebem monitoramento constante, alimentação
                adequada e momentos de recreação ao longo do dia.
              </p>
            </div>

            <div className="faq-card">
              <h3>Posso visitar o local antes da reserva?</h3>

              <p>
                Claro! Agende uma visita e conheça nossa estrutura antes de
                realizar a hospedagem.
              </p>
            </div>
            <div className="faq-card">
              <h3>Meu pet precisa estar vacinado?</h3>

              <p>
                Sim! Para garantir a segurança e o bem-estar de todos os
                hóspedes, é necessário que as vacinas estejam em dia.
              </p>
            </div>

            <div className="faq-card">
              <h3>Receberei atualizações durante a hospedagem?</h3>

              <p>
                Sim! Nossa equipe pode enviar fotos e informações sobre a
                estadia para que você acompanhe seu pet com tranquilidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hotel;
