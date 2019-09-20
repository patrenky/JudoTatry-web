import React from "react";
import { withRouter } from "react-router-dom";
import { animateScroll } from "react-scroll";

import Logo from "../assets/img/logo-footer.png";

const Footer = ({ history }) => (
  <div className="footer">
    <div className="container footer-content">
      <div className="footer-copyright">
        <img className="logo" src={Logo} alt="logo" />
        <p className="text">Copyright © 2017 | Patrik Michalák</p>
      </div>
      <div className="footer-sitemap">
        <p onClick={() => history.push("/")}>Domov</p>
        <p onClick={() => history.push("/aktuality")}>Aktuality</p>
        <p onClick={() => history.push("/judo")}>Judo</p>
        <p onClick={() => history.push("/kontakt")}>Kontakt</p>
        <p onClick={() => history.push("/podporte-nas")}>Podporte nás</p>
        <p onClick={() => history.push("/admin")}>Admin</p>
        <p
          onClick={() =>
            animateScroll.scrollToTop({
              duration: 1000,
              delay: 100,
              smooth: true
            })}
        >
          Hore
          <i className="fa fa-angle-up" />
        </p>
      </div>
    </div>
  </div>
);

export default withRouter(Footer);
