import './About.css';
import Hero from '../../components/Hero/Hero';
import Cards from '../../components/Cards/Cards';

export default function About() {
    const hero = {
        mobileImg: '/coffee-roasters-website/assets/about/mobile/image-hero-whitecup.jpg',
        tabletImg: '/coffee-roasters-website/assets/about/tablet/image-hero-whitecup.jpg',
        desktopImg: '/coffee-roasters-website/assets/about/desktop/image-hero-whitecup.jpg',
        alt: 'whitecup',
        title: 'About Us',
        description: 'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.'
    }

    const commitmentCard = {
        title: 'Our commitment',
        description: 'We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.',
        mobileImg: '/coffee-roasters-website/assets/about/mobile/image-commitment.jpg',
        tabletImg: '/coffee-roasters-website/assets/about/tablet/image-commitment.jpg',
        desktopImg: '/coffee-roasters-website/assets/about/desktop/image-commitment.jpg',
        alt: 'making coffee'
    };

    const qualityCard = {
        title: 'Uncompromising quality',
        description: 'Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.',
        mobileImg: '/coffee-roasters-website/assets/about/mobile/image-quality.jpg',
        tabletImg: '/coffee-roasters-website/assets/about/tablet/image-quality.jpg',
        desktopImg: '/coffee-roasters-website/assets/about/desktop/image-quality.jpg',
        alt: 'cup of coffee'
    };

    const headquarters = [
        {
            name: 'United Kingdom',
            description: `68  Asfordby Rd \n
                Alcaston \n
                SY6 1YA \n
                +44 1241 918425`,
            src: '/coffee-roasters-website/assets/about/desktop/illustration-uk.svg'
        },
        {
            name: 'Canada',
            description: `1528  Eglinton Avenue \n
                Toronto \n
                Ontario M4P 1A6 \n
                +1 416 485 2997`,
            src: '/coffee-roasters-website/assets/about/desktop/illustration-canada.svg'
        },
        {
            name: 'Australia',
            description: `36 Swanston Street \n
                Kewell \n
                Victoria \n
                +61 4 9928 3629`,
            src: '/coffee-roasters-website/assets/about/desktop/illustration-australia.svg'
        }
    ];

    return (
        <div className="about-page">
            <Hero hero={hero} />

            {/* // commitment */}
            <div className="commitment container">
                <picture>
                    <source media="(min-width: 68rem)" srcSet={commitmentCard.desktopImg} />
                    <source media="(min-width: 37.5rem)" srcSet={commitmentCard.tabletImg} />
                    <img src={commitmentCard.mobileImg} alt={commitmentCard.alt}/>
                </picture>
                <div className="commitment-content">
                    <h2>{commitmentCard.title}</h2>
                    <p>{commitmentCard.description}</p>
                </div>
            </div>

            {/* // quality */}
            <div className="quality container">
                <picture>
                    <source media="(min-width: 68rem)" srcSet={qualityCard.desktopImg} />
                    <source media="(min-width: 37.5rem)" srcSet={qualityCard.tabletImg} />
                    <img src={qualityCard.mobileImg} alt={qualityCard.alt}/>
                </picture>
                <div className="quality-content">
                    <h2>{qualityCard.title}</h2>
                    <p>{qualityCard.description}</p>
                </div>
            </div>

            {/* // headquarters */}
            <div className="headquarters container">
                <h3 className="gray-heading">Our headquarters</h3>
                <div className="headquarters-cards">
                    <Cards cards={headquarters} />
                </div>
            </div>
        </div>
    );
}