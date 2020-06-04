import React from 'react';
import './App.css';
import App from "./App";


function TodoList(props) {
    const dell = (id) => {
        props.onTaskDelete(id);
    };

    return (
        <div>
            {

                props.todos.map(el => ( <li key={el.id}>{el.name}

                        < button type="button" className="btn btn-dark" onClick={() => dell(el.id)}>Delete</button>
                    </li>)
                )
            }
        </div>
    );
}

export default TodoList;
