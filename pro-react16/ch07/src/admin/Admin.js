import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { GraphQlUrl } from '../data/Urls';
import { OrdersConnector } from './OrdersConnector'
import { Route, Redirect, Switch } from 'react-router-dom';
import ToggleLink from '../ToggleLink';
import { ConnectedProducts } from './ProductsConnector';
import { ProductEditor } from './ProductEditor';
import { ProductCreator } from './ProductCreator';

const graphQlClient = new ApolloClient({
  uri: GraphQlUrl
});

export class Admin extends Component {
  render() {
    return (
      <ApolloProvider client={graphQlClient}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 p-2">
              <ToggleLink to="/admin/orders">Orders</ToggleLink>
              <ToggleLink to="/admin/products">Products</ToggleLink>
            </div>
            <div className="col-9 p-2">
              <Switch>
                <Route path="/admin/orders" component={OrdersConnector} />
                <Route path="/admin/products/create" component={ProductCreator} />
                <Route path="/admin/products/:id" component={ProductEditor} />
                <Route path="/admin/products" component={ConnectedProducts} />
                <Redirect to="/admin/orders" />
              </Switch>
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
