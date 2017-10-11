import React from "react";

import FacebookProvider, { Page } from "react-facebook";

const Infos = () => (
  <div className="contact-info">
    <p className="contact-row">
      <i className="fa fa-user" />
      Mgr. Silvia Sedláčková<br />
      tréner I. stupňa, I. dan
    </p>
    <p className="contact-row">
      <i className="fa fa-map-marker" />
      P. Jilemnického 839/39<br />
      059 21, Svit
    </p>
    <p className="contact-row">
      <i className="fa fa-phone" />
      0905 977 765
    </p>
    <p className="contact-row">
      <i className="fa fa-envelope-o" />
      ssedlackova.silvia@gmail.com
    </p>
    <p className="contact-row">
      <i className="fa fa-credit-card" />
      Fio banka, a.s.
    </p>
    <p className="contact-row">
      <span className="title">Č. účtu:</span>
      <span className="text">SK51 8330 0000 0023 0130 6133</span>
    </p>
    <p className="contact-row">
      <span className="title">IČO:</span>
      <span className="text">50 590 723</span>
    </p>
    <p className="contact-row">
      <span className="title">DIČ:</span>
      <span className="text">-</span>
    </p>
    <FacebookProvider appId="1914498592142320">
      <Page
        href="https://www.facebook.com/judotatry"
        className="contact-fb"
        width={320}
        tabs={null}
      />
    </FacebookProvider>
  </div>
);

export default Infos;
