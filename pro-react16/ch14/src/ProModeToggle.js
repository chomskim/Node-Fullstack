import React, { Component } from "react";
import { ProModeContext } from "./ProModeContext";

export class ProModeToggle extends Component {
  render() {
    return (
      <ProModeContext.Consumer>
        {contextData => (
          <div className="form-check">
            <input type="checkbox" className="form-check-input"
              value={contextData.proMode}
              onChange={contextData.toggleProMode} />
            <label className="form-check-label">
              {this.props.label}
            </label>
          </div>
          )
        }
      </ProModeContext.Consumer>
    )
  }
}
