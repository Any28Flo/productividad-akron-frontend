import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/LogIn/LogIn';
import RegisterUser from "./components/RegisterUser/RegisterUser";
import ProtectedRoutes from "./components/routes/ProtectedRoutes/ProtectedRoutes";
import Dashboard from "./components/Dashboard";
function App() {

  return (
    <div className="App">
      <Switch>
          <Route exact path={`/registro_usuario`}>
              <RegisterUser/>
          </Route>
          <Route exact path={`/`}>
              <Login/>
          </Route>
          <ProtectedRoutes path={'/dashboard'} component={Dashboard}/>


      </Switch>
    </div>
  );
}

export default App;
