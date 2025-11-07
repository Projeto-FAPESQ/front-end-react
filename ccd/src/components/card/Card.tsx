import './card.css';

type cardProps = {
    title: string;
    text?: string;
}

export default function Card({title, text} : cardProps) {
    return(
        <div className="municipio-card">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}