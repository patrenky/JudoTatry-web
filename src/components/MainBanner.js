import React from "react";
import { scroller } from "react-scroll";
import { compose, withState, lifecycle, withHandlers } from "recompose";

import LogoImage from "../assets/img/banner-img.png";

const Banner = ({ countdownTime, scrollTo }) => (
  <div className="banner">
    <img className="image" src={LogoImage} alt="" />
    <p className="text">Už iba</p>
    <p className="text time">{countdownTime}</p>
    <p className="text">do prvého tréningu!</p>
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
  withState("countdownTime", "setTime", undefined),
  lifecycle({
    componentDidMount() {
      const countDownDate = new Date("Oct 2, 2017 16:30").getTime();
      window.bannerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        this.props.setTime(countdownTime);
      }, 1000);
    },
    componentWillUnmount() {
      clearInterval(window.bannerInterval);
    }
  }),
  withHandlers({
    scrollTo: () => name => {
      scroller.scrollTo(name, {
        duration: 1000,
        delay: 100,
        offset: -48,
        smooth: true
      });
    }
  })
)(Banner);
