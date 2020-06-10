import React, { Component, createContext } from 'react';
const { Provider, Consumer } = createContext();
export class UserProvider extends Component {
  render() {
    const { children } = this.props;
    const user = {
      username: "Test User",
      avatar: "/uploads/avatar1.png"
    };
    return (
      <Provider value={user}>
        {children}
      </Provider>
    );
  }
}export class UserConsumer extends Component {
  render() {
    const { children } = this.props;
    return (
      <Consumer>
        {user => React.Children.map(children, function(child){
          return React.cloneElement(child, { user });
        })}
      </Consumer>
    )
  }
}