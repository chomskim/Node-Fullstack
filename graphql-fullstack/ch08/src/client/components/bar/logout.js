import React, { Component } from 'react';
import { withApollo } from "react-apollo";

class Logout extends Component {
  logout = () => {
    this.props.logout().then(() => {
      localStorage.removeItem('jwt');
      this.props.client.resetStore();
    });
  }

  render() {
    return (
      <button className="logout" onClick={this.logout}>Logout</button>
    );
  }
}

export default withApollo(Logout);
