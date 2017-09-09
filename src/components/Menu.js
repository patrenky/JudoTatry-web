import React from "react";
import classNames from "classnames";
import { compose, withState, withHandlers } from "recompose";
import { withRouter } from "react-router-dom";

import Logo from "../assets/img/logo.png";

const Menu = ({ changeRoute, match, pinned, isCollapsed, collapseMenu }) => (
  <header className={classNames("header", { "header-pinned": pinned })}>
    <div className="header-content">
      <img className="logo" src={Logo} alt="logo" onClick={() => changeRoute("/")} />
      <div className="menu">
        <p className="menu-item active">Domov</p>
        <p className="menu-item">Aktuality</p>
        <p className="menu-item">Judo</p>
        <p className="menu-item">Kontakt</p>
      </div>
      <div className="mobile-menu">
        <p className="mobile-menu-selected" onClick={() => collapseMenu(!isCollapsed)}>
          Domov
        </p>
        <i className="fa fa-bars" onClick={() => collapseMenu(!isCollapsed)} />
        <div className={classNames("mobile-menu-items", { collapsed: isCollapsed })}>
          <p className="mobile-menu-item">Domov</p>
          <p className="mobile-menu-item">Aktuality</p>
          <p className="mobile-menu-item">Judo</p>
          <p className="mobile-menu-item">Kontakt</p>
        </div>
      </div>
    </div>
  </header>
);

export default compose(
  withRouter,
  withState("isCollapsed", "collapseMenu", false),
  withHandlers({
    changeRoute: ({ history, collapseMenu }) => route => {
      collapseMenu(false);
      history.push(route);
    }
  })
)(Menu);
