import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router ,Route,Switch, Redirect} from 'react-router-dom';
import Header from "./layout/Header";
import {Provider as AlertProvider} from 'react-alert';

import Dashboard from "./leads/Dashboard";
import Alerts from './layout/Alerts.js';
import Login from './accounts/Login.js';
import Register from './accounts/Register.js';
import {Provider} from 'react-redux';
import  store from '../store';
import AlertTemplate from 'react-alert-template-basic';
import PrivateRoute from './common/PrivateRoutes.js';
import {loadUser} from '../actions/auth'


const alertOptions ={
  timeout : 3000,
  position: "top center"
}



class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser);
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Router>
      <Fragment>
        <Header />
       <Alerts />
        <div className="container">
        <Switch>
          <PrivateRoute exact path="/" component = {Dashboard} />
          <Route exact path="/login" component = {Login} />
          <Route exact path="/register" component = {Register} />

        </Switch>
        </div>
      </Fragment>
      </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));