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
        return <ul className='reset-btns'>{result}</ul>;
    }

    const getTimerColor = () => {
        if (app.timer.getRunning()) return 'green';
        else return 'red';
    }

    const currentTaskData = () => {
        let name = ' ';
        let time = ' ';
        const task = app.tasks.getCurrentTask();
        if (task !== undefined) {
            name = task.name;
            time = timeDisplay(task.time);
        }
        return(
            [
                <h4 key='name' className='timer-task-name'>{name}</h4>,
                <h5 key='time' className='timer-task-time'>{time}</h5>
            ]
        );
    }

    return (
        <div className="timer" style={{background: getTimerColor()}}>
            <h1 className="timer-display">{timeDisplay(app.timer.timeRemaining)}</h1>
            {currentTaskData()}
            <button onClick={() => app.startTimer()}>start/pause</button>
            {getSetButtons([1, 5, 10, 15, 25, 30])}
        </div>
    );
}

 export default Pomodoro;
