import React from "react";
import Waypoint from "react-waypoint";
import { Element } from "react-scroll";
import { compose, withState } from "recompose";

import Header from "../components/Header";
import Banner from "../components/Banner";
import InfoBar from "../components/InfoBar";
import Table from "../components/Table";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Main = ({ pinnedHeader, pinHeader }) => (
  <div>
    <Header pinned={pinnedHeader} />
    <Waypoint
      scrollableAncestor={window}
      onPositionChange={e => pinHeader(e.currentPosition === "above")}
      topOffset={-100}
    />
    <Banner />
    <Element name="content" />
    <InfoBar />
    <Element name="trainings" />
    <div className="container">
      <h2>Tréningy</h2>
      <Table />
    </div>
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

export default compose(withState("pinnedHeader", "pinHeader", false))(Main);
