import React from 'react';
import {useDispatch, useState} from 'react-redux';
import { Table } from 'reactstrap';

const Tasks = () =>{
  //  const {loading,task} = useState(state => state.task)
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