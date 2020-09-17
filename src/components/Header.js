import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="headerContent">
      <div className="headerMenu">
        <h1 className="header__title">Todo app</h1>
        <NavLink
          to="/"
          activeClassName="is-active"
          exact={true}
          className="linkElement"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/create"
          activeClassName="is-active"
          exact={true}
          className="linkElement"
        >
          Create todo
        </NavLink>
        <NavLink
          to="/help"
          activeClassName="is-active"
          exact={true}
          className="linkElement"
        >
          Help
        </NavLink>
      </div>
      <button onClick={startLogout} className="buttonLogout">
        Logout
      </button>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
