import React, {useState, useRef, useEffect} from 'react';
import './Plan.css';
import Hero from '../../components/Hero/Hero';
import Steps from '../../components/Steps/Steps';
import Summary from '../../components/Summary/Summary';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import QuestionsMenu from '../../components/QuestionsMenu/QuestionsMenu';
import OptionsCard from '../../components/optionsCard/optionsCard';
import useWindowDimensions from '../../components/useWindowDimensions';

export default function Plan () {
    const [showModal, setShowModal] = useState(false);
    const [inViewQuestion, setInViewQuestion] = useState(0);
    const [selectedArr, setSelectedArr] = useState([]);

    // questions menu links 
    let refs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
    
    // display the questions menu when on desktop only
    const { height, width } = useWindowDimensions();
    const [onDesktop, setOnDesktop] = useState(false);
    useEffect(() => {
        window.matchMedia("(min-width: 72.5rem)").matches ? setOnDesktop(true) : setOnDesktop(false);
    }, [width]);


    const hero = {
        mobileImg: '/assets/plan/mobile/image-hero-blackcup.jpg',
        tabletImg: '/assets/plan/tablet/image-hero-blackcup.jpg',
        desktopImg: '/assets/plan/desktop/image-hero-blackcup.jpg',
        alt: 'blackcup',
        title: 'Create a plan',
        description: 'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'
    };

    const questions = [
        {
            name: 'How do you drink your coffee?',
            options: [
                { name: 'Capsule', description: 'Compatible with Nespresso systems and similar brewers'},
                { name: 'Filter', description: 'For pour over or drip methods like Aeropress, Chemex, and V60'},
                { name: 'Espresso', description: 'Dense and finely ground beans for an intense, flavorful experience'}
            ]
        },
        {
            name: 'What type of coffee?',
            options: [
                { name: 'Single Origin', description: 'Distinct, high quality coffee from a specific family-owned farm'},
                { name: 'Decaf', description: 'Just like regular coffee, except the caffeine has been removed'},
                { name: 'Blended', description: 'Combination of two or three dark roasted beans of organic coffees'}
            ]
        },
        {
            name: 'How much would you like?',
            options: [
                { name: '250g', description: 'Perfect for the solo drinker. Yields about 12 delicious cups.'},
                { name: '500g', description: 'Perfect option for a couple. Yields about 40 delectable cups.'},
                { name: '1000g', description: 'Perfect for offices and events. Yields about 90 delightful cups.'}
            ]
        },
        {
            name: 'Want us to grind them?',
            options: [
                { name: 'Wholebean', description: 'Best choice if you cherish the full sensory experience'},
                { name: 'Filter', description: 'For drip or pour-over coffee methods such as V60 or Aeropress'},
                { name: 'Cafetiére', description: 'Course ground beans specially suited for french press coffee'}
            ]
        },
        {
            name: 'How often should we deliver?',
            options: [
                { name: 'Every week', description: '$7.20 per shipment. Includes free first-class shipping.'},
                { name: 'Every 2 weeks', description: '$9.60 per shipment. Includes free priority shipping.'},
                { name: 'Every month', description: '$12.00 per shipment. Includes free priority shipping.'}
            ]
        }
    ];

    return (
        <div className="plan-section">
            <Hero hero={hero} />
            {/* steps */}
            <div className="container how-it-works">
                <Steps />
            </div>
            {/* form */}
            <div className="container questions-section">
                { onDesktop && 
                <QuestionsMenu refs={refs} selectedArr={selectedArr} inViewQuestion={inViewQuestion} /> }
                <div className="questions">
                    {questions.map((question, index) => (
                        <div ref={refs.current[index]} className="question" key={index} id={index}>
                            <h3 className="gray-heading question-name">{question.name}</h3>
                            <OptionsCard selectedArr={selectedArr} setSelectedArr={setSelectedArr} id={index} options={question.options} setInViewQuestion={setInViewQuestion} />
                        </div>
                    ))}
                    <div>
                        <Summary order={selectedArr} />
                        <div className="submit-btn"><Button text="Create my plan!" onClick={ () => setShowModal(true) } /></div>
                    </div>
                </div>
            </div>
            
            <Modal show={showModal} setShow={setShowModal} order={selectedArr} />
        </div>
    )
}