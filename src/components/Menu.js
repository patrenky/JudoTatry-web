import React from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import { compose, withState, withHandlers } from "recompose";

import Logo from "../assets/img/logo.png";

const getActiveName = active => {
  switch (active) {
    case "/":
      return "Domov";
    case "/aktuality":
      return "Aktuality";
    case "/judo":
      return "Judo";
    case "/kontakt":
      return "Kontakt";
    default:
      return "";
  }
};

const Menu = ({ changeRoute, location, pinned, isCollapsed, collapseMenu }) => {
  const active = location.pathname;
  return (
    <header className={classNames("header", { "header-pinned": pinned })}>
      <div className="header-content">
        <img className="logo" src={Logo} alt="logo" onClick={() => changeRoute("/")} />
        <div className="menu">
          <p
            className={classNames("menu-item", { active: active === "/" })}
            onClick={() => changeRoute("/")}
          >
            Domov
          </p>
          <p
            className={classNames("menu-item", { active: active === "/aktuality" })}
            onClick={() => changeRoute("/aktuality")}
          >
            Aktuality
          </p>
          <p
            className={classNames("menu-item", { active: active === "/judo" })}
            onClick={() => changeRoute("/judo")}
          >
            Judo
          </p>
          <p
            className={classNames("menu-item", { active: active === "/kontakt" })}
            onClick={() => changeRoute("/kontakt")}
          >
            Kontakt
          </p>
        </div>
        <div className="mobile-menu">
          <p className="mobile-menu-selected" onClick={() => collapseMenu(!isCollapsed)}>
            {getActiveName(active)}
          </p>
          <i className="fa fa-bars" onClick={() => collapseMenu(!isCollapsed)} />
          <div className={classNames("mobile-menu-items", { collapsed: isCollapsed })}>
            {active !== "/" && (
              <p className="mobile-menu-item" onClick={() => changeRoute("/")}>
                Domov
              </p>
            )}
            {active !== "/aktuality" && (
              <p className="mobile-menu-item" onClick={() => changeRoute("/aktuality")}>
                Aktuality
              </p>
            )}
            {active !== "/judo" && (
              <p className="mobile-menu-item" onClick={() => changeRoute("/judo")}>
                Judo
              </p>
            )}
            {active !== "/kontakt" && (
              <p className="mobile-menu-item" onClick={() => changeRoute("/kontakt")}>
                Kontakt
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

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
