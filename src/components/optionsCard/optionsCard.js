import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const OptionsCard = React.memo(({selectedArr, setSelectedArr, id, options, setInViewQuestion}) => {
    const { ref, inView } = useInView({ root: document.querySelector('#questions'), threshold: [0.8], });

    useEffect(() => {
        if (inView === true) {
            setInViewQuestion(id);
        }
    }, [inView, id]);

    const handleSelect = (e) => {
        const option = e.currentTarget.id;
        const newArr = selectedArr;
        newArr[id] = option;
        setSelectedArr([...newArr]);
    }

    return (
        <div ref={ref} id={id} className="options">
        {options.map(option => (
            <div onClick={handleSelect} className={selectedArr[id] === option.name ? 'option selected' : 'option'} id={option.name} key={option.name}>
                <h3>{option.name}</h3>
                <p>{option.description}</p>
            </div>
        ))}
        </div>
    )
});

export default OptionsCard;