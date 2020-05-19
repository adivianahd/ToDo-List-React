import React from 'react';

function Button(props) {
    return(
        <div>
        <button onClick={props.click}>Add item</button>
        <button onClick={props.clear}>Clear List</button>
        </div>
    )
}

export default Button;