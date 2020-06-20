import React from 'react';
import { Route, Link } from 'react-router-dom';

const ToggleLink = props => (
  <Route path={props.to}
    exact={props.exact}
    children={(routeProps) => {
      const baseClasses = props.className || 'm-2 btn btn-block';
      const activeClass = props.activeClass || 'btn-primary';
      const inActiveClass = props.inActiveClass || 'btn-secondary';

      const combinedClasses = `${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`;

      return (
        <Link to={props.to} className={combinedClasses}>
          {props.children}
        </Link>
      );
    }}
  />
);

export default ToggleLink;
