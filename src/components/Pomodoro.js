import { useState, useEffect } from 'react';

let tickPrevID = null;

const Pomodoro = ({tick, count}) => {

    console.log("timer function ran");
    const counting = count.counting;
    const setCounting = count.setCounting;
    const [time, setTime] = useState(0);
    if (tick.id !== tickPrevID && counting) {
        tickPrevID = tick.id;
        console.log(time);
        if (tick.value >= time) {
            setTime(0);
        } else {
            setTime(time - tick.value);
        }
    }

    // newMins is the new time to set the time in minutes
    const setTimer = (newMins) => {
        setCounting(false);
        setTime(newMins * 60 * 1000);
    }

    useEffect(() => {
        setTimer(25);
    }, []);

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

    const getDisplay = () => {
        let temp = time;
        let minutes = Math.floor(temp / 1000 / 60);
        temp -= (minutes * 60 * 1000);
        let seconds = Math.floor(temp / 1000);
        temp -= (seconds * 1000);
        let milliseconds = temp;
        minutes = minutes.toLocaleString('en-US', {
            minimumIntegerDigits: 2
        });
        seconds = seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2
        });
        milliseconds = milliseconds.toLocaleString('en-US', {
            minimumIntegerDigits: 3
        })
        return `${minutes}:${seconds}.${milliseconds}`;
    }

    return (
        <div className="timer">
            <h1 className="display">{getDisplay()}</h1>
            <button onClick={toggleAccumulate} className="btn-startpause">start/pause</button>
            {getSetButtons([1, 5, 10, 15, 25, 30])}
        </div>
    );
}

export default Pomodoro;
