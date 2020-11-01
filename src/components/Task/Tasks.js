import React , {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Table } from 'reactstrap';
import {fetchTasksAction} from "../../store/taskDuck";

const Tasks = () =>{
    const dispatch= useDispatch();
   const {loading,listTaks} = useSelector(state => state.task);

    const fetchTask = useCallback(async()=>{
        try{
            await dispatch(fetchTasksAction())
        }catch (e) {}
    },[dispatch])

    useEffect(() =>{
        fetchTask()
    }, [dispatch])

    if (!listTaks|| listTaks.length === 0) return <h2>Sin tareas aún registradas </h2>

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
            <tr>
                <td>Pending</td>
                <td>Task 1</td>
                <td>IconTrash</td>
            </tr>
            <tr>
                <td>Pending</td>
                <td>Task 1</td>
                <td>IconTrash</td>
            </tr>

            </tbody>
        </Table>
    )
}
export default Tasks;