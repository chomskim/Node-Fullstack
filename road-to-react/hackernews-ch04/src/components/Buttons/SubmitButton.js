
import React, { Component } from 'react';

class SubmitButton extends Component {
  render() {
    const {
      onClick,
      className = '',
      children,
    } = this.props;

    return (
      <button
        onClick={onClick}
        className={className}
        type="submit"
      >
        {children}
      </button>
    );
  }
}

export default SubmitButton;
