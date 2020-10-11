import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="top-bar">
    <div className="container d-flex justify-content-end">
      <div className="top-bar-links">
        <NavLink
          className="link-item"
          exact={true}
          activeClassName="text-info"
          to="/"
        >
          Home
        </NavLink>

      </div>
        <div className="top-bar-links">
          <NavLink
            to="/pizza/make"
            className="link-item"
          >
            Make Pizza
          </NavLink>{' '}
        </div>
    </div>
  </div>
);
export default withRouter(Header);
