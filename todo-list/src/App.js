import React, {useState} from 'react';

import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";
import textFile from './bd.txt';


const initialTodos = [
    {id: 1, name: 'Alex', done: false},
    {id: 2, name: 'Vasilisa', done: false},
    {id: 3, name: 'Nazar', done: false},
    {id: 4, name: 'Aya', done: true},
]


function App() {
const [todos, setTodos] = useState(initialTodos)
    const onTaskCreate = task => {
console.log('APP - ')
const updateTodos = [...todos];
updateTodos.push({id: Math.random(), name: task, done: false})
        setTodos(updateTodos);
    }
const onTaskDelete = (id) => {
const updateTodos = todos.filter(el => el.id !== id);
setTodos (updateTodos);

}

    return (
        <div >

<TodoCreateForm onTaskCreate = {onTaskCreate}/>
            <TodoList todos ={todos} onTaskDelete={onTaskDelete}/>

        </div>
    );
}

export default App;
