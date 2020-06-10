import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../../assets/css/style.css';
import Feed from './Feed';
import Chats from './Chats';
import './components/fontawesome';
import Bar from './components/bar';
import LoginRegisterForm from './components/loginregister';

export default class App extends Component {

  state = {
    loggedIn: false
  }
  componentWillMount() {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.setState({ loggedIn: true });
    }
  }
  changeLoginState = (loggedIn) => {
    this.setState({ loggedIn });
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Graphbook - Feed</title>
          <meta name="description" content="Newsfeed of all your friends on Graphbook" />
        </Helmet>
        {this.state.loggedIn ?
          <div>
            <Bar />
            <Feed />
            <Chats />
          </div>
          : <LoginRegisterForm changeLoginState={this.changeLoginState} />
        }
      </div>
    )
  }
}