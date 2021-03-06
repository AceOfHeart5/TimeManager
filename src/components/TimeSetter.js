import { useState } from 'react';

export default function TimeSetter({app}) {

    // time set value is stored as a string to make custom times easier
    const [time, setTime] = useState('25') ;
    const [lastValid, setLastValid] = useState('25');

    const adjustTime = (value) => {
        const number = Number.parseInt(time);
        if (isNaN(number) || (number + value) < 1) {
            setTime(lastValid);
        } else {
            const newTime = number + value;
            setTime(newTime.toString());
            setLastValid(newTime.toString());
        }
    }

    const setTimer = (e) => {
        e.preventDefault();
        const number = Number.parseInt(time);
        if (isNaN(number) || number < 1) {
            setTime(lastValid);
        } else {
            app.setTime(number);
            setLastValid(number.toString());
        }
    }

    return (
        <form onSubmit={setTimer} className='timer-setter'>
            <button type='button' onClick={() => adjustTime(-1)}>-</button>
            <input value={time} onChange={e => setTime(e.target.value)} type="text"/>
            <button type='button' onClick={() => adjustTime(1)}>+</button>
            <button type='submit' onClick={setTimer}>set minutes</button>
        </form>
    );
}