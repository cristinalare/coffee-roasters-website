import './Hero.css';
import Button from '../Button/Button';
import { useLocation, Link } from 'react-router-dom';

export default function Hero ({hero}) {
    const {pathname} = useLocation();

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
                { pathname === '/' && <Link to="/create-a-plan"><Button text='Create your plan'/></Link> }
            </div>
        </div>
    );
}