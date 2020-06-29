import React, { Component } from 'react';
import { Message } from "./Message";
import { ActionButton } from './ActionButton';
import { ThemeSelector } from './ThemeSelector';
import { GeneralList } from './GeneralList';
import { SortedList } from "./SortedList";
import { ProFeature } from "./ProFeature";
import { ProController } from "./ProController";
import { LogToConsole } from "./LogToConsole";
import { ProModeContext } from './ProModeContext';
import { ProModeToggle } from './ProModeToggle';

const ProList = ProController(LogToConsole(SortedList, "Sorted", true, true, true));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      names: ["Zoe", "Bob", "Alice", "Dora", "Joe"],
      cities: ["London", "New York", "Paris", "Milan", "Boston"],
      //proMode: false,
      proContextData: {
        proMode: false,
        toggleProMode: this.toggleProMode,
      },
      superProContextData: {
        proMode: false,
        toggleProMode: this.toggleSuperMode
      },
    }
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  toggleProMode = () => {
    this.setState(state => state.proContextData.proMode
      = !state.proContextData.proMode);
  }

  toggleSuperMode = () => {
    this.setState(state => state.superProContextData.proMode
      = !state.superProContextData.proMode);
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
          <ProModeContext.Provider value={this.state.proContextData}>
            <div className="row">
              <div className="col-12 text-center p-2">
                <ProModeToggle label="Pro Mode" />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <GeneralList list={this.state.names}
                  theme="primary" />
              </div>
              <div className="col-4">
                <ProFeature pro={this.state.proMode}
                  render={() => <SortedList list={this.state.names} />}
                />
              </div>
              <div className="col-4">
                  <SortedList list={this.state.names} />
              </div>
            </div>
          </ProModeContext.Provider>
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
