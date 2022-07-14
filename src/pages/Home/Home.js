import './Home.css';
import Cards from '../../components/Cards/Cards';

export default function Home () {
    const coffeeTypes = [
        {
            name: 'Gran Espresso',
            description: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
            src: '/assets/home/desktop/image-gran-espresso.png'

        },
        {
            name: 'Planalto',
            description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
            src: '/assets/home/desktop/image-planalto.png'
        },
        {   
            name: 'Piccollo',
            description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
            src: '/assets/home/desktop/image-piccollo.png'
        },
        {
            name: 'Danche',
            description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
            src: '/assets/home/desktop/image-danche.png'
        }
    ];

    const chooseUsCards = [
        {
            name: 'Best quality',
            description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
            src: '/assets/home/desktop/icon-coffee-bean.svg'
        },
        {
            name: 'Exclusive benefits',
            description: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
            src: '/assets/home/desktop/icon-gift.svg'
        },
        {
            name: 'Free shipping',
            description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
            src: '/assets/home/desktop/icon-truck.svg'
        }
    ];

 return (
    <div>
        <div className="hero container">
            <picture>
                <source media="(min-width: 68rem)" srcSet="/assets/home/desktop/image-hero-coffeepress.jpg" />
                <source media="(min-width: 37.5rem)" srcSet="/assets/home/tablet/image-hero-coffeepress.jpg" />
                <img className="hero-img" src="/assets/home/mobile/image-hero-coffeepress.jpg" alt="coffeepress"/>
            </picture>
            <div className="hero-content">
                <h1>Great coffee made simple.</h1>
                <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <button>Create your plan</button>
            </div>
        </div>

        {/* coffee */}
        <div className="container">
            <h2 className="collection-heading">our collection</h2>
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

        <div className="container">
            <h3>How it works</h3>
        </div>
    </div>
    
 )
}