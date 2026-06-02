import pet3 from "../../assets/pet3.png";
import "./Services.css";

function Services() {
  return (
    <main className="services">
      <section className="services-hero">
  <img src={pet3} alt="Pets felizes na PetCare" />

  <div className="services-overlay">
    <h1>Nossos Serviços</h1>

    <p>
      Tudo o que seu pet precisa para viver com saúde,
      conforto e felicidade.
    </p>
  </div>
</section>
    </main>
  );
}

export default Services;