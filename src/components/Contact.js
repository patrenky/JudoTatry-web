import React from "react";
import FacebookProvider, { Page } from "react-facebook";

const Contact = () => (
  <div className="contact">
    <div className="contact-map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJUTJUSXklPkcRdWDiqA_cPdA&key=AIzaSyD67irEzqEOUk7cN_Z1E9g9xl-ojKUooQk"
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </div>
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
        <span className="title">IČO:</span>
        <span className="text">50 590 723</span>
      </p>
      <p className="contact-row">
        <span className="title">DIČ:</span>
        <span className="text">-</span>
      </p>
      <p className="contact-row">
        <span className="title">Č. účtu:</span>
        <span className="text">-</span>
      </p>
      <p className="contact-row">
        <span className="title">IBAN:</span>
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
  </div>
);

export default Contact;
