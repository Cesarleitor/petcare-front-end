import "./ServiceCard.css";

function ServiceCard({
  icon,
  title,
  description,
  buttonText,
  link,
}) {
  return (
    <div className="service-card">
      <div className="service-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <a
        href={link}
        target={link?.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
      >
        <button>{buttonText}</button>
      </a>
    </div>
  );
}

export default ServiceCard;