import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
//import LeftHand from './LeftHand'
//import RightHand from "./RightHand";

function App() {

    const [count, setCount] = useState(15);


    const clickHandler = () => {
       setCount(count+1);}
       const clickMinus = () => {
           setCount (count-1);

    }

return (
    <div className="App">

        <button onClick={clickHandler}>+</button>
        <p>{count}</p>
        <button onClick={clickMinus}>-</button>


    </div>
);
}

export default App;
