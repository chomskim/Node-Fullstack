import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { SportsStoreDataStore } from './data/DataStore';
import { ShopConnector } from './shop/ShopConnector';

export default class App extends Component {
  render() {
    return (
      <Provider store={SportsStoreDataStore}>
        <Router>
          <Switch>
            <Route path="/shop" component={ShopConnector} />
            <Redirect to="/shop" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
