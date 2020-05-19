import React from 'react';

function List(props) {
    return(
        <div align="ul">
        <ul>
            {props.Item.map((e, i)=>
            <li key={i}>{e}</li>
            )}
        </ul>
        </div>
    )
}

export default List;