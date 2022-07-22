import React, {useState, useRef, useEffect, Suspense} from 'react';
import './Plan.css';
import Hero from '../../components/Hero/Hero';
import Steps from '../../components/Steps/Steps';
import Summary from '../../components/Summary/Summary';
import Button from '../../components/Button/Button';
import QuestionsMenu from '../../components/QuestionsMenu/QuestionsMenu';
import OptionsCard from '../../components/optionsCard/optionsCard';
import useWindowDimensions from '../../components/useWindowDimensions';
import {questionsData, heroData} from './Data';
// import Modal from '../../components/Modal/Modal';

const Modal = React.lazy(() => import('../../components/Modal/Modal'));

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


    
    return (
        <div className="plan-section">
            <Hero hero={heroData} />
            {/* steps */}
            <div className="container how-it-works">
                <Steps />
            </div>
            {/* form */}
            <div className="container questions-section">
                { onDesktop && 
                <QuestionsMenu refs={refs} selectedArr={selectedArr} inViewQuestion={inViewQuestion} /> }
                <div className="questions">
                    {questionsData.map((question, index) => (
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
            <Suspense fallback="<></>">
                <Modal show={showModal} setShow={setShowModal} order={selectedArr} />
            </Suspense>
        </div>
    )
}