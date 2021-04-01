import { useState } from 'react';

const Tasks = ({ app }) => {

    const [newTaskName, setNewTaskName] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        console.log(`Add task: ${newTaskName}`);
        app.addTask(newTaskName);
        setNewTaskName('');
    }

    const getTaskColor = (index) => {
        if (index !== app.tasks.currentTask) return 'grey';
        return 'red';
    }

    const getTasksList = () => {
        const result = [];
        app.tasks.taskList.forEach((task, i) => {
            result.push(
                <li key={i} style={{background: getTaskColor(i)}}>
                    {task.name} : {task.time}
                    <button onClick={() => app.deleteTask(i)}>Delete</button> 
                </li>
            );
        });
        return result;
    }

    return(
        <div className="tasks">
            <form onSubmit={addTask}>
                <button>Add Task</button>
                <input type="text" value={newTaskName} onChange={e => setNewTaskName(e.target.value)} placeholder='new task name...'/>
            </form>
            <h1>Tasks:</h1>
            <ul>{getTasksList()}</ul>
        </div>
    )
}

export default Tasks;
