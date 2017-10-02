import React from "react";
import { scroller } from "react-scroll";
import { compose, withHandlers } from "recompose";

import LogoImage from "../../assets/img/banner-img.png";

const Banner = ({ scrollTo }) => (
  <div className="banner">
    <img className="image" src={LogoImage} alt="" />
    <p className="text time">Judo & Tatry</p>
    <p className="text"></p>
    <div className="flex-row flex-centered">
      <div className="btn" onClick={() => scrollTo("trainings")}>
        Tréningy
      </div>
      <div className="btn" onClick={() => scrollTo("contact")}>
        Kontakt
      </div>
    </div>
    <i className="fa fa-arrow-circle-down" onClick={() => scrollTo("content")} />
  </div>
);

export default compose(
  withHandlers({
    scrollTo: () => name => {
      scroller.scrollTo(name, {
        duration: 1000,
        delay: 100,
        offset: -46,
        smooth: true
      });
    }
  })
)(Banner);
