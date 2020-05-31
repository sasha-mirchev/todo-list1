import React, {useState} from 'react';

import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";

const initialTodos = [
    {id: 1, name: 'Alex', done: false},
    {id: 2, name: 'Vasilisa', done: false},
    {id: 3, name: 'Nazar', done: false},
    {id: 4, name: 'Aya', done: true},
]


function App() {
const [todos, setTodos] = useState(initialTodos)
    const onTaskCreate = task => {
console.log('APP - '+task)
const updateTodos = [...todos];
updateTodos.push({id: Math.random(), name: task, done: false})
        setTodos(updateTodos);
    }


    return (
        <div >

<TodoCreateForm onTaskCreate = {onTaskCreate}/>
            <TodoList todos ={todos}/>


        </div>
    );
}

export default App;
