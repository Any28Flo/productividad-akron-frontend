import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {Button, Form, FormGroup, Input, Label, Spinner} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';

import {detailTaskAction} from "../../store/taskDuck";

const DetailTask = ({match}) =>{
    const dispatch = useDispatch();
    const {params: { idTask }} = match;
    const {loading, task, edit} = useSelector( state => state.task);
    const {taskName, description,duration} = task;

    let disabled = !edit ? { 'disabled': 'disabled' } : {};

    const [newTask, setNewTask]=useState({
        taskName:'',
        description :'',
        duration: 0
    })

    const fetchDetails = useCallback(async(idTask)=>{
        try {
            await dispatch(detailTaskAction(idTask));
        }catch (e) {}
    }, [dispatch])
    useEffect(()=>{
        fetchDetails(idTask)
        setNewTask(newTask)
    }, [dispatch])
    const handleChange = ({target}) =>{
        const {name,value} = target;
        setNewTask(Object.assign({}, newTask, {[name]: value}));
    }

    if(loading || !task) return (<Spinner/>)


    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <Form>
                        <FormGroup>
                            <Label for="taskName">Nombre de la tarea</Label>
                            <Input type="text" name="taskName" id="taskName" placeholder="Bañar al perro" disabled value={taskName} onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Descripcion</Label>
                            <Input type="text" name="description" id="description" placeholder="Con jabon pupy"  {...disabled} value={description} onChange={handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="duration">Duración`</Label>
                            <input type="text" name="duration" id="duration" {...disabled}  value={duration} onChange={handleChange} />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default DetailTask;