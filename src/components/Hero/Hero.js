import './Hero.css';
import Button from '../Button/Button';

export default function Hero ({hero}) {
    return (
        <div className="hero container">
            <picture>
                <source media="(min-width: 68rem)" srcSet={hero.desktopImg} />
                <source media="(min-width: 37.5rem)" srcSet={hero.tabletImg} />
                <img className="hero-img" src={hero.mobileImg} alt={hero.alt}/>
            </picture>
            <div className="hero-content">
                <h1>{hero.title}</h1>
                <p>{hero.description}</p>
                <Button text='Create your plan'/>
            </div>
        </div>
    );
}