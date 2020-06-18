import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../../assets/css/style.css';
import Feed from './Feed';
import Chats from './Chats';
import { withApollo } from "react-apollo";
import Router from './router';

class App extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = props.client.onResetStore(
      () => this.changeLoginState(false)
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
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
        <Router loggedIn={this.state.loggedIn} changeLoginState={this.changeLoginState}/>
      </div>
    )
  }
}

export default withApollo(App)
