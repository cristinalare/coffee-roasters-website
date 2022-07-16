import React, { useState } from "react";


export default function Options ({options}) {
    const [selected, setSelected] = useState();
    return (
        <div className="options">
        {options.map((option, index) => (
            <div onClick={() => setSelected(index)} className={selected === index ? 'option selected' : 'option'} key={index}>
                <h3>{option.name}</h3>
                <p>{option.description}</p>
                <p>{selected}</p>
            </div>
        ))}
        </div>
    )
}