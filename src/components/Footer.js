import React from "react";
import { withRouter } from "react-router-dom";

import Logo from "../assets/img/logo-footer.png";

const Footer = ({ history }) => (
  <div className="footer">
    <div className="container footer-content">
      <div className="footer-copyright">
        <img className="logo" src={Logo} alt="logo" />
        <p className="text">Copyright © 2017 | Patrik Michalák</p>
      </div>
      <div className="footer-sitemap">
        <p onClick={() => history.push('/')}>Domov</p>
        <p onClick={() => history.push('/aktuality')}>Aktuality</p>
        <p onClick={() => history.push('/judo')}>Judo</p>
        <p onClick={() => history.push('/kontakt')}>Kontakt</p>
        <p onClick={() => history.push('/admin')}>Admin</p>
      </div>
    </div>
  </div>
);

export default withRouter(Footer);
