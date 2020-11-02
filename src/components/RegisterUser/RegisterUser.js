import React, {useCallback, useState, useEffect} from 'react';
import {Button, Card, CardBody, CardFooter, Col, Container, Form, FormGroup, FormText, Input, Label, Row, Spinner} from "reactstrap";
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {registerUserAction} from '../../store/userDuck';
import SweetAlert from './../ui/SweetAlert'
const RegisterUser = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const {loading, error} = useSelector(state => state.user)

    const [formState, setFormState] = useState({
        userName: '',
        password: '',
    });

    const userRegister = useCallback( async(formState) =>{
        try {
            await dispatch(registerUserAction(formState))
            history.push('/dashboard')
        }catch (e) {}
    }, [dispatch])

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    };
    const handleSubmit= e =>{
        e.preventDefault();
        userRegister(formState);
    }
    useEffect(() => {
        error && SweetAlert({ icon: 'error', title: 'Error!', text: error });
    }, [error]);

    if(loading) return <Spinner/>
    return(
        <Container fluid className='text-center h-100 mt-5'>
            <Row>
                <Col sm='9' md='7' lg='5' className='mx-auto mt-50'>
                        <Card className='login-form'>
                            <CardBody>
                                <Form  onSubmit={handleSubmit}>
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
                </Col>
            </Row>
        </Container>
    )
}
export default RegisterUser;