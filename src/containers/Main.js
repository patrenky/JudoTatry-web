import React from "react";
import { Element } from "react-scroll";

import MainBanner from "../components/main/MainBanner";
import InfoBar from "../components/main/InfoBar";
import News from "../components/main/News";
import Table from "../components/contact/Table";
import Links from "../components/main/Links";
import GoogleMap from "../components/contact/GoogleMap";
import Infos from "../components/contact/Infos";
import Footer from "../components/Footer";

const Main = () => (
  <div>
    <MainBanner />
    <Element name="content" />
    <InfoBar />
    <Links />
    <Element name="trainings" />
    <div className="container">
      <h2>Začíname trénovať od 1.októbra 2020 v Kultúrnom dome, na ulici Priečna 2 v Podskalke</h2>
      <Table />
    </div>
    <News />
    <div className="container">
      {/* <h2>Kontakt</h2> */}
      <Element name="contact" />
      <div className="contact">
        <div className="contact-left">
          <GoogleMap />
        </div>
        <Infos />
      </div>
    </div>
    <Footer />
  </div>
);

export default Main;
