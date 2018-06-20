import React from 'react';

const Checkbox = (props) => 
    <input type="checkbox" checked={props.isChecked} onClick={(e) => { props.clicked(e)}} id={props.id} />

export default Checkbox;