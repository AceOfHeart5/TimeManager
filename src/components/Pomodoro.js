import { useState, useEffect } from 'react';

let tickPrevID = null;

const Pomodoro = ({ tick, timer }) => {
    const [time, setTime] = useState(0);

    console.log("pomodoro re-rendered: " + time);

    // newMins is the new time to set the time in minutes
    const setTimer = (newMins) => {
        setTime(newMins * 60 * 1000);
    }

    useEffect(() => {
        console.log(`setting time to 25 minutes`);
        setTimer(25);
    }, []);

    /*
    When the pomodoro is re-rendered, we need to check if the tick value 
    changed. We can be sure it's changed if the ID of the tick is 
    different.
    */
    if (tick.id !== tickPrevID) {
        tickPrevID = tick.id;
        console.log(`Setting time to: ${time - tick.timePassed}`);
        setTime(time - tick.timePassed);
    }

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

    const toggleTimer = () => {
        timer.startToggle();
    }

    const getDisplay = () => {
        console.log(`Rendering time: ${time}`);
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
            <button onClick={toggleTimer} className="btn-startpause">start/pause</button>
            {getSetButtons([1, 5, 10, 15, 25, 30])}
        </div>
    );
}

export default Pomodoro;
