import './Cards.css';

export default function Cards ({cards}) {
    return (
        cards.map(card => (
            <div className="card coffee-type" key={card.name}>
                <img src={card.src} alt={card.name}/>
                <div className="card-content coffee-content">
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                </div>
            </div>
        ))
    );
}