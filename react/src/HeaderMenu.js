import React from 'react';
import MenuItem from "./MenuItem";
import './FooterHeader.css'

function HeaderMenu(props) {
return (
    <div className='Style-menu'>

        <hr/>
        <ul>
            {props.topmenu.map(el => <MenuItem key={el} item={el}/>)}
        </ul>
        <hr/>
                </div>
);
}
export default HeaderMenu;