import React from 'react';
import {Route} from 'react-router-dom';
import Task from "../../pages/Task/Task";
const DashboardRoutes = ({path}) =>{
    return(
        <>
            <Route  path={`${path}/tasks`} component={Task}/>
        </>
    )
}
export default DashboardRoutes;