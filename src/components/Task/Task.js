import React, {useCallback, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {faPencilAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {editBtn} from "../../store/taskDuck";
import Button from './../ui/Button';
import {deleteTaskAction} from "../../store/taskDuck";
import SweetAlert from "../ui/SweetAlert";

const Task = ({task}) =>{
    const {msg} = useSelector(state => state.task)

    const {status,taskName, _id} = task;
    const dispatch = useDispatch();
    const history = useHistory()
    const handleRedirect = () =>{
        history.push(`/dashboard/task/${_id}`)
        dispatch(editBtn());
    }
    const deleteTask = useCallback(async(idTask)=>{
        try {
            await dispatch(deleteTaskAction(idTask))
        }catch (e) {
            console.log(e)
        }
    }, [dispatch])

    const handleDelete = () =>{
        deleteTask(_id)
    }
    useEffect(() => {
        msg && SweetAlert({ icon: 'success', title: 'Exito!', text: msg });
    }, [msg]);
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