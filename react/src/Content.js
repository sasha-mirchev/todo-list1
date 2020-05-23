import React from 'react';
import homework_img_1 from './homework_img_1.png';
import  './Content.css';


function Content () {
    let size = 400;
    let add = () =>
           console.log('add')

return (
    <div className="Content-content">

        <h1>Homework -1 </h1>
        <img src={homework_img_1} alt='homework_img_1' width={size}  />
        <button onClick={add}>Увеличить картику</button>
    </div>



)
}

export default Content;