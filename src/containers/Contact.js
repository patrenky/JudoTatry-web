import React from "react";

import Banner from "../components/Banner";
import Table from "../components/Table";
import ContactTmp from "../components/Contact";
import Footer from "../components/Footer";

const Contact = () => (
  <div>
    <Banner />
    <div className="container">
      <h2>Kontakt</h2>
      <ContactTmp />
      <h2>Tréningy</h2>
      <Table />
    </div>
    <Footer />
  </div>
);

// new contact page:
// img dojo | info + fb
// treningy
// mapa

export default Contact;
