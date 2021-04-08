import TimeSetter from './TimeSetter';
import AddTask from './AddTask';
import { timeDisplay } from '../util/Utility';

const Pomodoro = ({app}) => {

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

    const getAddTask = () => {
        if (window.innerWidth < 800) {
            return (<AddTask app={app}></AddTask>);
        }
    }

    const getStartPause = () => {
        if (app.timer.getRunning()) return 'PAUSE';
        return 'START';
    }

    return (
        <div className="timer" style={{background: getTimerColor()}}>
            <h1 className="timer-display">{timeDisplay(app.timer.timeRemaining)}</h1>
            {currentTaskData()}
            <button className='btn-timer' onClick={() => app.startTimer()}>{getStartPause()}</button>
            <TimeSetter app={app}></TimeSetter>
            {getAddTask()}
        </div>
    );
}

 export default Pomodoro;
