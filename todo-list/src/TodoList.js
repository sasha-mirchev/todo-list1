import React from 'react';
import './App.css';
import App from "./App";






function TodoList(props) {
    const dell = (id) => {
        console.log('udalim'+ id)
            }

       return (
        <div >
            {
                props.todos.map(el =>  <li key={el.id}>{el.name + '    '}
<button onClick={() => dell(el.id)}>  Del</button>

                </li>)
            }
        List

        </div>
    );
}

export default TodoList;
