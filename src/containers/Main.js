import React from "react";
import { Element } from "react-scroll";

import MainBanner from "../components/MainBanner";
import InfoBar from "../components/InfoBar";
import Table from "../components/Table";
import RegDoc from "../components/RegDoc";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Main = () => (
  <div>
    <MainBanner />
    <Element name="content" />
    <InfoBar />
    <Element name="trainings" />
    <div className="container">
      <h2>Tréningy</h2>
      <Table />
    </div>
    <RegDoc />
    {/* <div className="container">
      <h2>Aktuality</h2>
    </div> */}
    <div className="container">
      <h2>Kontakt</h2>
      <Element name="contact" />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default Main;
