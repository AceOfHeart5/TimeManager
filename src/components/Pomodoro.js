import TimeSetter from './TimeSetter';
import AddTask from './AddTask';
import { timeDisplay } from '../util/Utility';

const Pomodoro = ({app}) => {

    const getTimerColor = () => {
        if (app.timer.getRunning()) return 'green';
        else return 'red';
    }

    const currentTaskData = () => {
        let name = 'Add task and select it.';
        let time = 'Click the timer to start.';
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

    return (
        <div className="timer" style={{background: getTimerColor()}}>
            <h1 className="timer-display" onClick={() => app.startTimer()}>{timeDisplay(app.timer.timeRemaining)}</h1>
            {currentTaskData()}
            <TimeSetter app={app}></TimeSetter>
            {getAddTask()}
        </div>
    );
}

 export default Pomodoro;
