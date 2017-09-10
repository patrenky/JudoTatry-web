import React from "react";

import Banner from "../components/Banner";
import Texts from "../components/about/Texts";
import Tabs from "../components/about/Tabs";
import Dictionary from "../components/about/Dictionary";
import Footer from "../components/Footer";

const About = () => (
  <div>
    <Banner />
    <div className="container about">
      <h2>O jude</h2>
      <Texts />
      <Tabs />
      <h2>Slovníček</h2>
      <Dictionary />
    </div>
    <Footer />
  </div>
);

export default About;
