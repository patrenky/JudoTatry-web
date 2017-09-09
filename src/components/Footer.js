import React from "react";

import Logo from "../assets/img/logo.png";

const Footer = () => (
  <div className="footer">
    <div className="container footer-content">
      <div className="footer-copyright">
        <img className="logo" src={Logo} alt="logo" />
        <p className="text">Copyright © 2017. | Patrik Michalák</p>
      </div>
      <div className="footer-sitemap">
        <p>Domov</p>
        <p>Aktuality</p>
        <p>Judo</p>
        <p>Kontakt</p>
        <p>Admin</p>
      </div>
    </div>
  </div>
);

export default Footer;
