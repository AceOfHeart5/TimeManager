import { useState } from 'react';
import { timeDisplay } from '../util/Utility';

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
                <li key={i} style={{background: getTaskColor(i)}}>
                    <span onClick={() => app.setCurrentTask(i)}>{task.name} : {timeDisplay(task.time)}</span>
                    <button onClick={() => app.setTaskTime(0, i)}>Reset</button>
                    <button onClick={() => app.deleteTask(i)}>Delete</button> 
                </li>
            );
        });
        return result;
    }

    return(
        <div className="tasks">
            <h1>Tasks:</h1>
            <form onSubmit={addTask}>
                <button>Add Task</button>
                <input type="text" value={newTaskName} onChange={e => setNewTaskName(e.target.value)} placeholder='new task name...'/>
            </form>
            <ul>{getTasksList()}</ul>
        </div>
    )
}

export default Tasks;
