import React from 'react';

function Input(props) {
   return(
       <input
        value={props.value} 
       onChange={e => {
            props.change(e.target.value);
       }} type="text"></input>
   ) 
}

export default Input;