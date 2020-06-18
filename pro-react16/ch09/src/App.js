import React, { Component } from "react";
import { Display } from "./Display";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "London"
    }
  }

  changeCity = () => {
    // debugger
    this.setState({ city: this.state.city === "London" ? "New York" : "London" })
  }

  render = () => (
    <Display value={this.state.city} callback={this.changeCity} />
  );
  // React.createElement("h4",
  // { className: "bg-primary text-white text-center p-3" },
  // "This is an HTML element");
}
