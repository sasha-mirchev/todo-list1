import React, {useState} from 'react';
import App from './App';
import homework_img_1 from "./homework_img_1.png";

function Usestate() {
    // Объявляем новую переменную состояния "count"
    const [count, setCount = [<input type="text"/>] ] = useState(1);

//let count = <input type="text"/>
    return (
        <div>
            <p>Вы нажали {count} раз</p>
                       <input id="const.count" type="text" placeholder="Enter a new Task..."/>

            <button onClick={() => setCount(count + 1)}>
                Добавить задачу

            </button>


        </div>
    );
}




export default Usestate;