import { useState } from 'react';

export default function AddTask({app}) {
    
    const [field, setField] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        app.addTask(field);
        setField('');        
    }

    return (
        <form onSubmit={addTask} className='task-add'>
            <button>Add Task</button>
            <input value={field} onChange={(e) => setField(e.target.value)} placeholder='task name...' type="text"/>
        </form>
    );
}