import './QuestionsMenu.css';

export default function QuestionsMenu ({refs, selectedArr, inViewQuestion}) {

    // questions menu links 
    const handleClick = (e) => {
        const i = e.currentTarget.id;
        window.scrollTo({
            top: refs.current[i].current.offsetTop - 90,
            left: 0,
            behavior: "smooth"
          });
    };

    const getClasses = (index) => {
        const selectedClass = selectedArr[index] ? 'completed' : '';
        const inViewClass = inViewQuestion === index ? 'active' : '';
        return `${selectedClass} ${inViewClass}`;
    }

    const menuItems = [
        { no: '01', name: 'Preferences' },
        { no: '02', name: 'Bean Type' },
        { no: '03', name: 'Quantity' },
        { no: '04', name: 'Grind Option' },
        { no: '05', name: 'Deliveries' }
    ];
    
    return (
        <ul className="body-m gray questions-menu">
            { menuItems.map((item, index ) => (
                <li className={getClasses(index)} id={index} onClick={handleClick} key={index}>
                    <span>{item.no}</span>
                    {item.name}
                </li>
            ))}
        </ul>
    );
}