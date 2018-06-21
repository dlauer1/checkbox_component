import React from 'react';

const Checkbox = (props) =>
    <div>
        <input type="checkbox" checked={props.isChecked} onClick={(e) => { props.clicked(e)}} id={props.id} />
    </div>
export default Checkbox;