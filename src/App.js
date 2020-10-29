import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/login/Login';

function App() {

  return (
    <div className="App">
      <Switch>
          <Route path={`/`} component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
