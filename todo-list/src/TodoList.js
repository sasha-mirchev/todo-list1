import React from 'react';
import './App.css';
import App from "./App";


function TodoList(props) {
    const dell = (id) => {
        console.log('udalim' + id)
        props.onTaskDelete(id)
    }

    return (
        <div>
            {
                props.todos.map(el =>
                    <table width='30%' >
                    <tr>

             <td      key={el.id}> {el.name}

             </td>
                        <td align='right'>

                            <button type="button" className="btn btn-dark" onClick={() => dell(el.id)}>Delete</button>
                    </td>


</tr>
                </table>

    )

                }
                List

                </div>
                );
                }

                export default TodoList;
