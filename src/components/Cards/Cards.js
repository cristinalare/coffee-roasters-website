import './Cards.css';
import { Parallax } from 'react-scroll-parallax';

export default function Cards ({cards}) {
    return (
        cards.map(card => (
            <Parallax className="card coffee-type" key={card.name} speed={10}>
                <img src={card.src} alt={card.name}/>
                <div className="card-content coffee-content">
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                </div>
            </Parallax>
        ))
    );
}