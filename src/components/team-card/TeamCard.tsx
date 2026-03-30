import './teamCard.css';

type cardProps = {
    title: string;
    img: string;
    text?: string;
    contact?: string;
}

export default function TeamCard({title, text, img, contact} : cardProps) {
    return(
        <div className="team-card">
            <h3>{title}</h3>
            <div className='img-container'>
               <img src={img}/> 
            </div>
            
            <p>{text}</p>
            <p><strong>Contato: </strong>{contact}</p>
        </div>
    );
}