// v2 of optionsCard

import { InView } from 'react-intersection-observer';

export default function OptionsCard ({selectedArr, setSelectedArr, id, options, setInViewQuestion}) {

    const handleSelect = (e) => {
        const option = e.currentTarget.id;
        const newArr = selectedArr;
        newArr[id] = option;
        setSelectedArr([...newArr]);
    }

    const newInView = useMemo
    const handleInView = (inView, entry) => {
        if(inView === true) {
            setInViewQuestion(id);
        } 
    }

    return (
        <InView as="div" threshold="0.8" onChange={handleInView} id={id} className="options">
        {options.map(option => (
            <div onClick={handleSelect} className={selectedArr[id] === option.name ? 'option selected' : 'option'} id={option.name} key={option.name}>
                <h3>{option.name}</h3>
                <p>{option.description}</p>
            </div>
        ))}
        </InView>
    )
}