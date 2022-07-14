import './Steps.css';
import bar from './bar-icon.svg';

export default function Steps () {
    const steps = [
        {
            no: '01',
            name: 'Pick your coffee',
            description: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
        },
        {
            no: '02',
            name: 'Choose the frequency',
            description: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
        },
        {
            no: '03',
            name: 'Receive and enjoy!',
            description: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
        }
    ];

    const notMobile = window.matchMedia("(min-width: 37.5rem)").matches;

    return (
        <div>
            {notMobile && <img className="bar" src={bar} alt="progress bar" />}
            <div className="steps">
            {steps.map(step => (
                <div className="step" key={step.no}>
                    <h4>{step.no}</h4>
                    <h2>{step.name}</h2>
                    <p>{step.description}</p>
                </div>
            ))}
            </div>
        </div>
    );
}