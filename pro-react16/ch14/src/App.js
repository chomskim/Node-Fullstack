import React, { Component } from 'react';
import { Message } from "./Message";
import { ActionButton } from './ActionButton';
import { ThemeSelector } from './ThemeSelector';
import { GeneralList } from './GeneralList';
import { SortedList } from "./SortedList";
import { ProFeature } from "./ProFeature";
import { ProController } from "./ProController";
import { LogToConsole } from "./LogToConsole";

const ProList = ProController(LogToConsole(SortedList, "Sorted", true, true, true));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      names: ["Zoe", "Bob", "Alice", "Dora", "Joe"],
      cities: ["London", "New York", "Paris", "Milan", "Boston"],
      proMode: false,
    }
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  toggleProMode = () => {
    this.setState({ proMode: !this.state.proMode });
  }

  render() {
    return (
      <React.Fragment>
        <div className="m-2 text-center">
          <ThemeSelector>
            <Message theme="primary"
              message={`Counter: ${this.state.counter}`} />
            <ActionButton theme="secondary"
              text="Increment" callback={this.incrementCounter} />
          </ThemeSelector>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center p-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input"
                  value={this.state.proMode}
                  onChange={this.toggleProMode} />
                <label className="form-check-label">Pro Mode</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <GeneralList list={this.state.names}
                theme="primary" />
            </div>
            <div className="col-6">
              <ProFeature pro={this.state.proMode}
                render={() => <SortedList list={this.state.names} />}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <GeneralList list={this.state.names} theme="primary" />
            </div>
            <div className="col-3">
              <ProList list={this.state.names} />
            </div>
            <div className="col-3">
              <GeneralList list={this.state.cities} theme="secondary" />
            </div>
            <div className="col-3">
              <ProList list={this.state.cities} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
