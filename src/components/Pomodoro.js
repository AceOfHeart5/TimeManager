import { timeDisplay } from '../util/Utility';

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

    const getTimerColor = () => {
        if (app.timer.getRunning()) return 'green';
        else return 'red';
    }

    return (
        <div className="timer" style={{background: getTimerColor()}}>
            <h1 className="display">{timeDisplay(app.timer.timeRemaining)}</h1>
            <h4>{window.innerWidth}</h4>
            <button onClick={() => app.startTimer()}>start/pause</button>
            {getSetButtons([1, 5, 10, 15, 25, 30])}
        </div>
    );
}

 export default Pomodoro;
