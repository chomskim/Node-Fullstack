import React, { Component } from 'react';
import LoginRegisterForm from './components/loginregister';
import Main from './Main';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


export default class Routing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/app" component={() => <Main changeLoginState=
            {this.props.changeLoginState} />} />
        </Switch>
      </Router>
    )
  }
}
