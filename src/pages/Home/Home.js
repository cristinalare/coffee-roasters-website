import './Home.css';
import Hero from '../../components/Hero/Hero';
import Cards from '../../components/Cards/Cards';
import Steps from '../../components/Steps/Steps';
import Button from '../../components/Button/Button';
import {Link} from 'react-router-dom';

export default function Home () {
    const coffeeTypes = [
        {
            name: 'Gran Espresso',
            description: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
            src: '/coffee-roasters-website/assets/home/desktop/image-gran-espresso.png'

        },
        {
            name: 'Planalto',
            description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
            src: '/coffee-roasters-website/assets/home/desktop/image-planalto.png'
        },
        {   
            name: 'Piccollo',
            description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
            src: '/coffee-roasters-website/assets/home/desktop/image-piccollo.png'
        },
        {
            name: 'Danche',
            description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
            src: '/coffee-roasters-website/assets/home/desktop/image-danche.png'
        }
    ];

    const chooseUsCards = [
        {
            name: 'Best quality',
            description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
            src: '/coffee-roasters-website/assets/home/desktop/icon-coffee-bean.svg'
        },
        {
            name: 'Exclusive benefits',
            description: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
            src: '/coffee-roasters-website/assets/home/desktop/icon-gift.svg'
        },
        {
            name: 'Free shipping',
            description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
            src: '/coffee-roasters-website/assets/home/desktop/icon-truck.svg'
        }
    ];

    const hero = {
        mobileImg: '/coffee-roasters-website/assets/home/mobile/image-hero-coffeepress.jpg',
        tabletImg: '/coffee-roasters-website/assets/home/tablet/image-hero-coffeepress.jpg',
        desktopImg: '/coffee-roasters-website/assets/home/desktop/image-hero-coffeepress.jpg',
        alt: 'coffeepress',
        title: 'Great coffee made simple.',
        description: 'Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.'
    }

 return (
    <div>
        <Hero hero={hero} />

        {/* coffee */}
        <div className="container">
            <h2 className="collection-heading big-heading">our collection</h2>
            <div className="coffee-types cards">
                { <Cards cards={coffeeTypes} /> }
            </div>
        </div>

        {/* why choose us */}
        <div className="container choose-us">
            <div className="container-description">
                <h2>Why choose us?</h2>
                <p>A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
            </div>
            <div className="bg"></div>
            <div className="choose-us-cards cards">
                { <Cards cards={chooseUsCards} />}
            </div>
        </div>

        {/* how it works: steps */}
        <div className="container how-it-works">
            <h3 className="gray-heading">How it works</h3>
            <Steps />
            <Link to="/create-a-plan"><Button text="Create your plan" /></Link>
        </div>
    </div>
    
 )
}