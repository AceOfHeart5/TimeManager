const Pomodoro = ({app}) => {

    // setMins is an array of integers representing minute values timer can be set to
    const getSetButtons = (setMins) => {
        const result = [];
        setMins.forEach(min => {
            result.push(
                <li key={min}><button onClick={() => app.setTime(min)} className="btn-set">{min}</button></li>
            );
        });
        return <ul>{result}</ul>;
    }

    const getDisplay = () => {
        let temp = app.timer.timeRemaining;
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

    const getTimerColor = () => {
        if (app.timer.getRunning()) return 'green';
        else return 'red';
    }

    return (
        <div className="timer" style={{background: getTimerColor()}}>
            <h1 className="display">{getDisplay()}</h1>
            <button onClick={() => app.startTimer()} className="btn-startpause">start/pause</button>
            {getSetButtons([1, 5, 10, 15, 25, 30])}
        </div>
    );
}

 export default Pomodoro;
