import './Plan.css';
import '../../components/Hero/Hero';
import Hero from '../../components/Hero/Hero';
import Steps from '../../components/Steps/Steps';

export default function Plan () {
    const hero = {
        mobileImg: '/assets/plan/mobile/image-hero-blackcup.jpg',
        tabletImg: '/assets/plan/tablet/image-hero-blackcup.jpg',
        desktopImg: '/assets/plan/desktop/image-hero-blackcup.jpg',
        alt: 'blackcup',
        title: 'Create a plan',
        description: 'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'
    };

    return (
        <div>
            <Hero hero={hero} />
            <div className="container">
                <Steps />
            </div>
        </div>

    )
}