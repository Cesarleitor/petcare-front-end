import { Link } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ icon, title, description, buttonText, link }) {
  const isInternal = link?.startsWith("/");

  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      {isInternal ? (
        <Link to={link}>
          <button>{buttonText}</button>
        </Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button>{buttonText}</button>
        </a>
      )}
    </div>
  );
}

export default ServiceCard;
