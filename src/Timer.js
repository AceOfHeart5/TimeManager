import { useState, useEffect } from 'react';

let time = 0;

const Timer = ({tick}) => {

    const [counting, setCounting] = useState(false);
    if (tick.change && counting) {
        time -= tick.value;
        if (time < 0) time = 0;
    }

    // newMins is the new time to set the time in minutes
    const setTimer = (newMins) => {
        setCounting(false);
        time = newMins * 60 * 1000;
    }

    useEffect(() => {
        setTimer(25);
    }, [])

    // setMins is an array of integers representing minute values timer can be set to
    const getSetButtons = (setMins) => {
        const result = [];
        setMins.forEach(min => {
            result.push(
                <li key={min}><button onClick={() => setTimer(min)} className="btn-set">{min}</button></li>
            );
        });
        return <ul>{result}</ul>;
    }

    const toggleAccumulate = () => {
        setCounting(!counting);
    }

    return (
        <div className="timer">
            <h1 className="display">{time}</h1>
            <button onClick={toggleAccumulate} className="btn-startpause">start/pause</button>
            {getSetButtons([1, 5, 10, 15, 25, 30])}
        </div>
    );
}

export default Timer;
