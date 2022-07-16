import './Summary.css';

export default function Summary ({order}) {
    return (
        <div className="summary container">
            <p>order summary</p>
            <p className="body-m">
                “I drink my coffee as <span className='cyan'>{order[0] || '____'}</span>, with 
                a <span className='cyan'>{order[1] || '____'}</span> type of 
                bean. <span className='cyan'>{order[2] || '____'}</span> ground 
                ala <span className='cyan'>{order[3] || '____'}</span>, sent
                 to me <span className='cyan'>{order[4] || '____'}</span>.”
            </p>
        </div>
    );
}