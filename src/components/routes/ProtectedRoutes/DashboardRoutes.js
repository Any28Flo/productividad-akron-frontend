import React from 'react';
import {Route} from 'react-router-dom';
import TaskPage from "../../pages/Task/TaskPage";
import ChartPage from "../../pages/Chart/ChartPage";
const DashboardRoutes = ({path}) =>{
    return(
        <>
            <Route  path={`${path}/tasks`} component={TaskPage}/>
            <Route  path={`${path}/chart`} component={ChartPage}/>

        </>
    )
}
export default DashboardRoutes;