import React from "react";

import Banner from "../components/Banner";
import Table from "../components/contact/Table";
import GoogleMap from "../components/contact/GoogleMap";
import Infos from "../components/contact/Infos";
import Footer from "../components/Footer";

import Dojo from "../assets/img/dojo.jpg";

const Contact = () => (
  <div>
    <Banner />
    <div className="container">
      <h2>Kontakt</h2>
      <div className="contact">
        <div className="contact-left">
          <img src={Dojo} alt="dojo" />
        </div>
        <Infos />
      </div>
      <br />
      <Table />
      <br />
      <br />
      <GoogleMap />
    </div>
    <Footer />
  </div>
);

export default Contact;
