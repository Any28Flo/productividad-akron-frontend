import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Navbar from './layout/Navbar';
import routes from './routes/routes'
import DashboardRoutes from "./routes/ProtectedRoutes/DashboardRoutes";

const Dashboard = (props) =>{
    const {match}= props;
    return(
        <Container fluid>
            <Row>
                <Col lg={3}>
                    <Navbar {...props}  routes={routes}/>
                </Col>
                <Col lg={9}>
                    <DashboardRoutes path={match.path}/>
                </Col>
            </Row>
        </Container>
    )
}
export default Dashboard