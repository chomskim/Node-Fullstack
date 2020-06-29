import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

const Header = props => {
  const {
    title = 'Welcome to HUFS React',
    url = 'http://localhost:3000'
  } = props;

  return (
    <div className="App-header">
      <a href={url}>
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <h1 className="App-title">{title}</h1>
    </div>
  );
}

// Even with Functional Components we are able to validate our 
// PropTypes.
Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Header;
