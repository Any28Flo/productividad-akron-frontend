import React, {useState, useCallback, useEffect} from 'react';
import {Form, FormGroup, Label,Input, Button} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import {Spinner} from 'reactstrap';
import {useHistory} from 'react-router-dom';
import useDropdown from '../../hooks/useDropdown';
import durationOptions from "../../constans/duration";
import {createTaskAction} from "../../store/taskDuck";
import SweetAlert from "../ui/SweetAlert";
const AddTask = () =>{
    const dispatch= useDispatch();
    const history = useHistory();
    const {loading, error, msg} = useSelector(state => state.task);
    const [duration, DurationDropdown] = useDropdown("duration", '', durationOptions)
    const [newTask, setNewTask]=useState({
        taskName:'',
        description :'',
        duration: 0
    })
    const handleChange = ({target}) =>{
        const {name,value} = target;
        setNewTask(Object.assign({}, newTask, {[name]: value}));
    }
    const createTask= useCallback(async(newTask)=>{
        try {
          await  dispatch(createTaskAction(newTask))
          await SweetAlert({ icon: 'success', title: 'Exito ', text: msg});
            history.push('/dashboard/tasks')
        }catch(e){
            console.log(e)
        }
    }, [dispatch])

    const handleSubmit = e =>{
        e.preventDefault();
        createTask(newTask)
    }
    useEffect(() => {
        error && SweetAlert({ icon: 'error', title: 'Error!', text: error });
    }, [error]);
    
    if(loading) return <Spinner/>

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="taskName">Nombre de la tarea</Label>
                <Input type="text" name="taskName" id="taskName" placeholder="Bañar al perro" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Descripcion</Label>
                <Input type="text" name="description" id="description" placeholder="Con jabon pupy" onChange={handleChange} />
            </FormGroup>
            <DurationDropdown/>
            <FormGroup>
                <Label for="duration">Duración`</Label>
                <input type="text" name="duration" id="duration" value={duration}  onChange={handleChange} />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    )
}
export default AddTask;