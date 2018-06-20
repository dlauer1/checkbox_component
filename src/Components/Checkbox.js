import React from 'react';
import Pic from '../drinkpic.png'

const Checkbox = (props) =>
    <div>
        <img src={Pic} />
        <input type="checkbox" checked={props.isChecked} onClick={(e) => { props.clicked(e)}} id={props.id} />
    </div>
export default Checkbox;