import React from 'react';
import {Row, Col, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import Tasks from '../../Task/Tasks';
const TaskPage = () =>{
    return (
        <>
            <Row>

            </Row>
            <Row>
                <Col lg={2}>
                    <Link to={'/dashboard/add-task'}>
                        <Button >Agregar</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Tasks/>
                </Col>
            </Row>
        </>

    )
}
export default TaskPage;