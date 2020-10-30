import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/LogIn/LogIn';
import RegisterUser from "./components/RegisterUser/RegisterUser";
function App() {

  return (
    <div className="App">
      <Switch>
          <Route path={`/registro_usuario`} component={RegisterUser}/>

          <Route path={`/`} component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
