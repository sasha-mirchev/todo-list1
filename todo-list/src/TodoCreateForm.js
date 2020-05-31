import React, {useState} from 'react';
import './App.css';






function TodoCreateForm(props) {



    const [task, setTask] = useState('')
    const addTask = () => {
        console.log('todocreate - '+task)
    setTask('')
        props.onTaskCreate(task)
    }

    return (
        <div >

            <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
            <button onClick={addTask}>Add task</button>
<hr/>


        </div>
    );
}

export default TodoCreateForm;
