import React, { Component } from 'react';
import { ThemeButton } from "./ThemeButton";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Ready",
      counter: 0,
      theme: "secondary",
    }
    this.handleEvent = this.handleEvent.bind(this);
  }

  selectTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
      message: `Theme: ${newTheme}`
    });
  }

  //handleEvent = () => {
  //  console.log("handleEvent method invoked");
  //  this.setState({ message: "Clicked!" });
  //}

  handleEvent(event) {
    event.persist();
    this.setState({
      counter: this.state.counter + 1,
      theme: event.target.innerText === "Normal" ? "primary" : "danger",
    }, () => this.setState({ message: `${event.type}: ${this.state.counter}` }));
  }

  toggleCheckBox = (event) => {
    if (this.state.counter === 0) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="m-2">
        <div className="form-check">
          <input className="form-check-input" type="checkbox"
            onClick={this.toggleCheckBox} />
          <label>This is a checkbox</label>
        </div>
        <div className={`h4 bg-${this.state.theme} text-white text-center p-2`}>
          {this.state.message}
        </div>
        <div className="text-center">
          <button className="btn btn-primary"
            onClick={this.handleEvent} >
            Normal
          </button>
          <button className="btn btn-danger m-1"
            onClick={this.handleEvent} >
            Danger
          </button>
        </div>
      </div>
    )
  }
}
