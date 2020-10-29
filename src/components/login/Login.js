import React, {useState} from 'react';
import {Container, Row, Col, Card, Form, FormGroup, FormText, Input, Button, CardBody, Label,CardFooter} from 'reactstrap';
import {Link} from 'react-router-dom';

const Login = () =>{
    const [formState, setFormState] = useState({
        usuario: '',
        contrasena: '',
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    };
    const handleFormSubmit = e =>{
        e.preventDefault();
        console.log("hola")
    }
    return(
        <Container fluid className='text-center h-100'>
            <Row>
                <Col sm='9' md='7' lg='5' className='mx-auto mt-50'>
                    {loading ? (
                        <Spiner />
                    ) : (
                        <Card className='login-form'>
                            <CardBody>
                                <Form onSubmit={handleFormSubmit} className=''>
                                    <FormGroup>
                                        <Label>Usuario</Label>
                                        <Input
                                            type='email'
                                            name='usuario'
                                            placeholder='Usuario'
                                            value={formState.usuario}
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
                                            name='contrasena'
                                            placeholder='Contraseña'
                                            value={formState.contrasena}
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
export default Login;