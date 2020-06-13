import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ,
  document.getElementById('root'));
  