import React from 'react';
import LoginPage from "./components/Auth/Login/LoginPage"
import AddPage from "./components/Homepage/AddPage"
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/Utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <div className="header">Grackel</div>
      <Switch>
        <Route path="/login" component={LoginPage}/>
        <PrivateRoute exact path="/" component={AddPage}/>
      </Switch>
    </div>
  );
}

export default App;
