import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {Container, Row, Col,Button, Form, FormGroup, Input, Label, Spinner} from 'reactstrap';


import {detailTaskAction, editTaskAction} from "../../store/taskDuck";
import useDropdown from "../../hooks/useDropdown";
import durationOptions from "../../constans/duration";
import SweetAlert from "../ui/SweetAlert";
import ClockArkon from "../ClockArkon/ClockArkon";
const DetailTask = ({match}) =>{
    const dispatch = useDispatch();
    const {params: { idTask }} = match;

    const [newTask, setNewTask]=useState({
        _id:'',
        taskName:'',
        description :'',
        duration: 0
    })

    const {loading, task, edit, msg} = useSelector( state => state.task);

    let disabled = !edit ? { 'disabled': 'disabled' } : {};


    //const [durationDrop, DurationDropdown] = useDropdown("duration", duration, durationOptions)

    const fetchDetails = useCallback(async(idTask)=>{
        try {
            await dispatch(detailTaskAction(idTask));
        }catch (e) {}
    }, [dispatch])

    useEffect(()=>{
        fetchDetails(idTask)
    }, [dispatch])

    useEffect(()=>{
        setNewTask(task)

    }, [task])
    const{taskName, description, duration} = newTask;
    const handleChange = (e) =>{
        setNewTask({
                ...newTask,
                [e.target.name]: e.target.value
            }
        )
    }
    const editTask = useCallback(async (objTask) =>{
        try{
            await dispatch(editTaskAction(objTask))
        }catch (e) {

        }
    },[dispatch])

    const handleSubmit = (e) =>{
        e.preventDefault();
        editTask(newTask)
    }
    useEffect(() => {
        msg && SweetAlert({ icon: 'success', title: 'Exito ', text: msg});
    }, [msg]);
    if(loading || !task) return (<Spinner/>)


    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="taskName">Nombre de la tarea</Label>
                            <Input type="text" name="taskName" id="taskName" placeholder="Bañar al perro" disabled value={taskName} onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Descripción</Label>
                            <Input type="text" name="description" id="description" placeholder="Con jabon pupy"  {...disabled} value={description} onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="duration">Duración`</Label>
                            <input type="text" name="duration" id="duration" {...disabled}  value={duration} onChange={handleChange} />
                        </FormGroup>
                        <ClockArkon/>

                        {
                            edit ? <Button>Editar</Button> : null
                        }

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default DetailTask;