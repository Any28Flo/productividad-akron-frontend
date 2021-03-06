import React , {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Table } from 'reactstrap';
import {Spinner} from 'reactstrap';

import {fetchTasksAction} from "../../store/taskDuck";
import Task from "./Task";
const Tasks = () =>{
    const dispatch= useDispatch();
   const {loading,listTask, msg} = useSelector(state => state.task);

    const fetchTask = useCallback(async()=>{
        try{
            await dispatch(fetchTasksAction())
        }catch (e) {}
    },[dispatch])

    useEffect(() =>{
        fetchTask()
    }, [dispatch, msg])

    if (!listTask|| listTask.length === 0) return <h2>Sin tareas aún registradas </h2>
    if(loading) return <Spinner/>
    return(
        <Table striped>
            <thead>
            <tr>
                <th>Status</th>
                <th>Name</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                listTask.map((task, index) => <Task key={index} task={task}  />)
            }
            </tbody>
        </Table>
    )
}
export default Tasks;