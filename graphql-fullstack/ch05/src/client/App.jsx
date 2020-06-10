import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../../assets/css/style.css';
import Feed from './Feed';
import Chats from './Chats';
import { UserProvider } from './components/context/user';
import Bar from './components/bar';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Graphbook - Feed</title>
          <meta name="description" content="Newsfeed of all your friends on Graphbook" />
        </Helmet>
        <UserProvider>
          <Bar />
          <Feed />
          <Chats />
        </UserProvider>
      </div>
    )
  }
}