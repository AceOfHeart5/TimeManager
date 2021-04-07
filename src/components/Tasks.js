import { useState } from 'react';
import { timeDisplay } from '../util/Utility';
import AddTask from './AddTask';

const Tasks = ({ app }) => {

    const [newTaskName, setNewTaskName] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        app.addTask(newTaskName);
        setNewTaskName('');
    }

    const getTaskColor = (index) => {
        if (index !== app.tasks.currentTask) return 'grey';
        if (app.timer.getRunning()) return 'green';
        return 'red';
    }

    const getTasksList = () => {
        const result = [];
        app.tasks.taskList.forEach((task, i) => {
            result.push(
                <li className='task' key={i} style={{background: getTaskColor(i)}}>
                    <span className='task-name' onClick={() => app.setCurrentTask(i)}>{task.name} : {timeDisplay(task.time)}</span>
                    <button onClick={() => app.setTaskTime(0, i)}>Reset</button>
                    <button onClick={() => app.deleteTask(i)}>Delete</button> 
                </li>
            );
        });
        return result;
    }

    const getTitle = () => {
        if (window.innerWidth >= 800) {
            return (
                <h1>Tasks:</h1>
            );
        }
    }

    return(
        <div className="tasks">
            {getTitle()}
            <AddTask app={app}></AddTask>
            <ul>{getTasksList()}</ul>
        </div>
    )
}

export default Tasks;
