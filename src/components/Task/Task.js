import React from 'react';

const Task = ({status,name,icon}) =>{
    return(
        <tr>
            <td>{status}</td>
            <td>{name}</td>
            <td>{icon}</td>
        </tr>
    )
}
export default Task;