import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {faPencilAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {editBtn} from "../../store/taskDuck";
import Button from './../ui/Button';
const Task = ({task}) =>{
    const {status,taskName, _id} = task;
    const dispatch = useDispatch();
    const history = useHistory()
    const handleRedirect = () =>{
        history.push(`/dashboard/task/${_id}`)
        dispatch(editBtn());
    }
    const handleDelete = () =>{

    }
    return(
        <tr>
           <th>{status}</th>
           <th>{taskName}</th>
            <th>
                <Button clickHandler={handleRedirect} icon={faPencilAlt}/>
            </th>
            <th>
                <Button clickHandler={handleDelete} icon={faTrashAlt}/>
            </th>
        </tr>
    )
}
export default Task;