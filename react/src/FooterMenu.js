import React from 'react';
import MenuItem from "./MenuItem";
//import './FooterHeader.css'

function FooterMenu(props) {
return (
    <div className='menu'>

        <hr/>
        <ul>
            {props.footermenu.map(el => <MenuItem key={el} item={el}/>)}
        </ul>
        <hr/>
                </div>
);
}
export default FooterMenu;