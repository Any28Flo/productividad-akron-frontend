import React, {useState, useCallback, useEffect} from 'react';
import {Container, Row, Col, Card, Form, FormGroup, FormText, Input, Button, CardBody, Label,CardFooter, Spinner} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from "../../store/userDuck";
import SweetAlert from './../ui/SweetAlert';
const LogIn = () =>{
    const history = useHistory();
    const {loading, error} = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({
        userName: '',
        password: '',
    });
    const sendForm = useCallback(async (formState)=>{
        try {
            await dispatch(loginAction(formState))
            history.push('/dashboard')
        }catch (e) {
            console.log(e)
        }
    }, []);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    };
    const handleFormSubmit = e =>{
        e.preventDefault();
        sendForm(formState)
    }
    useEffect(() => {
        error && SweetAlert({ icon: 'error', title: 'Error!', text: error });
    }, [error]);

    return(
        <Container fluid className='text-center h-100 mt-5'>
            <Row>
                <Col sm='9' md='7' lg='5' className='mx-auto mt-50'>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <Card className='login-form'>
                            <CardBody>
                                <Form onSubmit={handleFormSubmit} className=''>
                                    <FormGroup>
                                        <Label>Usuario</Label>
                                        <Input
                                            type='email'
                                            name='userName'
                                            placeholder='Usuario'
                                            value={formState.userName}
                                            onChange={handleChange}
                                            required
                                        />
                                        <FormText>
                                            Tu nombre de usuario debe de ser tu correo electronico.
                                        </FormText>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>Contraseña</Label>
                                        <Input
                                            type='password'
                                            name='password'
                                            placeholder='Contraseña'
                                            value={formState.password}
                                            onChange={(e) => handleChange(e)}
                                            required
                                        />
                                    </FormGroup>
                                    <Button className='login-button' type='submit'>
                                        Iniciar
                                    </Button>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                No tienes cuenta?
                                <Link to='/registro_usuario'>
                                    <span className='green ml-2'>Registro</span>
                                </Link>
                            </CardFooter>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    )
}
export default LogIn;