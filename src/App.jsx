import React from 'react';
import LoginPage from "./components/Auth/Login/LoginPage";
import RegisterPage from "./components/Auth/Register/RegisterPage";
import HomePage from "./components/Homepage/HomePage";
import AddMealManually from "./components/AddMealsPage/AddMealManually"
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/Utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <div className="header">Grackel</div>
      <Switch>
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={RegisterPage}/>
        <PrivateRoute path="/meal/manual" component={AddMealManually}/>

        <PrivateRoute exact path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
