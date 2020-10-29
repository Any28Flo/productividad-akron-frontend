import React from 'react';
import {Switch, Route} from 'react-router-dom'
function App() {
  const Login = () =>(
      <h2>Login </h2>
  )
  return (
    <div className="App">
      <Switch>
          <Route path={`/`} component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
