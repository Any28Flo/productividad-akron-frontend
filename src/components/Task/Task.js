import React from 'react';
import {useHistory} from 'react-router-dom';
import {faPencilAlt, } from "@fortawesome/free-solid-svg-icons";

import Button from './../ui/Button';
const Task = ({task}) =>{
    const {status,taskName, _id} = task;
    const history = useHistory()
    const handleRedirect = () =>{
        history.push(`/dashboard/task/${_id}`)
    }
    const handleDelete = () =>{

    }

    return(
        <tr>
           <th>{status}</th>
           <th>{taskName}</th>
           <th>
               <Button clickHandler={handleDelete} icon={faPencilAlt}/>
            </th>
            <th>
                <Button clickHandler={handleRedirect} icon={faPencilAlt}/>
            </th>
        </tr>
    )
}
export default Task;