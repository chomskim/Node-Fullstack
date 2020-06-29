import React from 'react';
import PropTypes from 'prop-types';

const Content = props => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
}


Content.propTypes = {
  children: PropTypes.element.isRequired
};

export default Content;
