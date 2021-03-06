import React from 'react';
import {Route} from 'react-router-dom';
import TaskPage from '../../pages/Task/TaskPage';
import ChartPage from '../../pages/Chart/ChartPage';
import AddTask from "../../Task/AddTask";
import DetailTask from "../../Task/DetailTask";
const DashboardRoutes = ({path}) =>{
    return(
        <>
            <Route  path={`${path}/add-task`} component={AddTask}/>
            <Route  path={`${path}/task/:idTask`} component={DetailTask}/>
            <Route  path={`${path}/tasks`} component={TaskPage}/>
            <Route  path={`${path}/chart`} component={ChartPage}/>
        </>
    )
}
export default DashboardRoutes;