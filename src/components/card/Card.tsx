import './card.css';

type CardProps = {
  title: string;
  text?: string;
  highlight?: boolean;
};

export default function Card({ title, text, highlight }: CardProps) {
  return (
    <div className={`municipio-card ${highlight ? "highlight" : ""}`}>
      <h3>{title}</h3>
      {text && <p>{text}</p>}

      {text && (
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: text }}
          ></div>
        </div>
      )}
    </div>
  );
}