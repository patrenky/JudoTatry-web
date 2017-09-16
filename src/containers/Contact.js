import React from "react";

import Banner from "../components/Banner";
import Table from "../components/contact/Table";
import GoogleMap from "../components/contact/GoogleMap";
import Infos from "../components/contact/Infos";
import Footer from "../components/Footer";

const Contact = () => (
  <div>
    <Banner />
    <div className="container">
      {/* <h2>Kontakt</h2> */}
      <div className="contact">
        <div className="contact-left">
          {/* <img alt="dojo" width="100%" height="100%" style={{ border: "solid 1px" }} /> */}
          <GoogleMap />
        </div>
        <Infos />
      </div>
      <h2>Tréningy</h2>
      <Table />
      {/* <GoogleMap /> */}
    </div>
    <Footer />
  </div>
);

export default Contact;
