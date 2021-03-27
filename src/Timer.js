import { useState, useEffect } from 'react';

let time = 0;

const Timer = ({tick}) => {

    if (tick.change) time += tick.value;

    // setMins is an array of integers representing minute values timer can be set to
    const getSetButtons = (setMins) => {
        const result = [];
        setMins.forEach(min => {
            result.push(
                <li key={min}><button className="btn-set">{min}</button></li>
            );
        });
        return <ul>{result}</ul>;
    }

    return (
        <div className="timer">
            <h1 className="display">{time}</h1>
            <button className="btn-startpause">start/pause</button>
            {getSetButtons([1, 5, 10, 15, 25, 30])}
        </div>
    );
}

export default Timer;
