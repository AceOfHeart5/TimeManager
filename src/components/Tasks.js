const Tasks = ({ app }) => {

    const getTasksList = () => {
        const result = [];
        app.tasks.taskList.forEach((task, i) => {
            result.push(
                <li key={i}>{task.name} <button onClick={() => app.deleteTask(i)}>Delete</button> </li>
            );
        });
        return result;
    }

    return(
        <div className="tasks">
            <button>Add Task</button>
            <input type="text"/>
            <h1>Tasks:</h1>
            <ul>{getTasksList()}</ul>
        </div>
    )
}

export default Tasks;
