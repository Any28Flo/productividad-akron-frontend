import React, {useState} from 'react';
import {Form, FormGroup, Label,Input, Button} from 'reactstrap';
import useDropdown from '../../hooks/useDropdown';
import durationOptions from "../../constans/duration";
const AddTask = () =>{
    const [duration, DurationDropdown] = useDropdown("Duración", '',)
    const [newTask, setNewTask]=useState({
        taskName:'',
        description :'',
        status:'',
        duration :0,

    })
    const handleChange = ({target}) =>{
        const {name,value} = target;

    }

    return (
        <Form>
            <FormGroup>
                <Label for="taskName">Nombre de la tarea</Label>
                <Input type="text" name="taskName" id="taskName" placeholder="Bañar al perro" />
            </FormGroup>
            <FormGroup>
                <Label for="description">Descripcion</Label>
                <Input type="text" name="description" id="description" placeholder="Con jabon pupy" />
            </FormGroup>
            <DurationDropdown/>

            <Button>Submit</Button>

        </Form>
    )
}