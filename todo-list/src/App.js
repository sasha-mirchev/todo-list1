import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    const [todo, setTodo] = useState({id: 1, name: 'ww'});

    return (
        <div className="App">
            <h1>Список задач! </h1>

            <ul>
                <li>
                    {todo.id} - {todo.name}
                </li>
            </ul>


            <form className="add-tasks">
                <input type='text' placeholder="Задачи на сегодня"/>
                <button onClick={() => setTodo(todo.name,  todo.id + 1)}>
                    Добавить задачу
                </button>
            </form>

        </div>
    );
}

export default App;
