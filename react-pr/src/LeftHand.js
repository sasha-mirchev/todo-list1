import React from 'react';
import logo from './logo.svg';
import './App.css';

function LeftHand(props) {
    const clicked = () => {
        props.leftData();
    }

  return (
    <div className="App">

<button onClick={clicked}>Click</button>


    </div>
  );
}

export default LeftHand;
