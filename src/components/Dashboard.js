import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Navbar from './layout/Navbar';
import routes from './routes/routes'
const Dashboard = (props) =>{
    return(
        <Container fluid>
            <Row>
                <Col lg={3}>
                    <Navbar {...props}  routes={routes}/>
                </Col>
                <Col lg={9}>

                </Col>
            </Row>
        </Container>
    )
}
export default Dashboard