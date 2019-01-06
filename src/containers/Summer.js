import React from "react";

import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

import img1 from "../assets/img/summer/1.jpg";
import img2 from "../assets/img/summer/2.jpg";
import img3 from "../assets/img/summer/3.jpg";
import img4 from "../assets/img/summer/4.jpg";
import img5 from "../assets/img/summer/5.jpg";
import img6 from "../assets/img/summer/6.jpg";
import img7 from "../assets/img/summer/7.jpg";
import img8 from "../assets/img/summer/8.jpg";
import img9 from "../assets/img/summer/9.jpg";
import img10 from "../assets/img/summer/10.jpg";
import img11 from "../assets/img/summer/11.jpg";
import img12 from "../assets/img/summer/12.jpg";
import img13 from "../assets/img/summer/13.jpg";
import img14 from "../assets/img/summer/14.jpg";
import img15 from "../assets/img/summer/15.jpg";
import img16 from "../assets/img/summer/16.jpg";
import img17 from "../assets/img/summer/17.jpg";
import img18 from "../assets/img/summer/18.jpg";
import img19 from "../assets/img/summer/19.jpg";
import img20 from "../assets/img/summer/20.jpg";
import img21 from "../assets/img/summer/21.jpg";
import img22 from "../assets/img/summer/22.jpg";
import img23 from "../assets/img/summer/23.jpg";

import doc0 from "../assets/doc/co-zbalit.pdf";

const SummerSlider = () =>
  <Carousel>
    <img alt="" src={img1} className="carousel-image" />
    <img alt="" src={img2} className="carousel-image" />
    <img alt="" src={img3} className="carousel-image" />
    <img alt="" src={img4} className="carousel-image" />
    <img alt="" src={img5} className="carousel-image" />
    <img alt="" src={img6} className="carousel-image" />
    <img alt="" src={img7} className="carousel-image" />
    <img alt="" src={img8} className="carousel-image" />
    <img alt="" src={img9} className="carousel-image" />
    <img alt="" src={img10} className="carousel-image" />
    <img alt="" src={img11} className="carousel-image" />
    <img alt="" src={img12} className="carousel-image" />
    <img alt="" src={img13} className="carousel-image" />
    <img alt="" src={img14} className="carousel-image" />
    <img alt="" src={img15} className="carousel-image" />
    <img alt="" src={img16} className="carousel-image" />
    <img alt="" src={img17} className="carousel-image" />
    <img alt="" src={img18} className="carousel-image" />
    <img alt="" src={img19} className="carousel-image" />
    <img alt="" src={img20} className="carousel-image" />
    <img alt="" src={img21} className="carousel-image" />
    <img alt="" src={img22} className="carousel-image" />
    <img alt="" src={img23} className="carousel-image" />
  </Carousel>

const About = () => (
  <div>
    <Banner />
    <div className="container about">
      <div className="news-row">
        <div className="news-text">
          <h2>Otvorené športové letné sústredenie</h2>
          <h2 style={{ marginTop: "-0.6em", fontSize: "1.2em" }}>nielen pre naších judistov</h2>

          <br /><br />
          <div className="flex-row flex-centered">
            <a className="reg-link" rel="noopener noreferrer" target='_blank' href={doc0}>
              <i className="fa fa-file-text-o" />
              Čo zbaliť na sústredenie?
            </a>
          </div>      
          <br />

          <p>Milí rodičia!</p>
          <p>
            Dožičte svojim deťom nezabudnuteľné prázdniny plné pohybu, humoru, nových skúseností
            a priateľstiev! Tieto letné prázdniny organizujeme spoločne s našimi partnerskými slovenskými
            a poľskými klubmi medzinárodné sústredenie – v Bartkowej (Gródek nad Dunajcem) nad Rožňovským
            jazerom (PL).
          </p>
          <div className="flex-col flex-centered">
            <h3>od 19.8. do 29.8.2019</h3>
          </div>
          <p>
            Pre deti je zabezpečené: ubytovanie (pozri{" "}
            <a rel="noopener noreferrer" target='_blank' href="http://stalownik.com.pl/">stalownik.com.pl</a>
            ) v 3-posteľových až 6-posteľových izbách s vlastným WC a kúpeľňou,
            strava - plná penzia + pitný režim + ovocie, jazero kontrolované plavčíkmi - pre plavcov i neplavcov,
            športové ihriská, tréningy - v telocvični i v prírode, turistika, súťaže...a veľa ďalšieho...
            Všetko pod dohľadom trénerov, plavčíkov a lekára. Aj teraz, ako po minulé roky, budú pre deti pripravené
            super zážitky v podobe lanovej dráhy pod dohľadom skúseného horolezca, plavba výletnou loďou,
            plavby na kajakoch a člnoch, nové tréningové skúsenosti čerpané od rôznych skúsených slovenských
            a poľských trénerov...<br />
            a samozrejme nové priateľstvá...
          </p>
          <div className="flex-col flex-centered">
            <p>....v cene <b>250 €</b> za celý pobyt dieťaťa.</p>
            <SummerSlider />
          </div>
          <br />
          <ul>
            <li>počet miest obmedzený</li>
            <li>predbežné prihlášky do 31.03.2019 + záloha 25%</li>
            <li>záväzné prihlášky do 15.06.2019 + doplatok do 100% ceny</li>
            <li>prihlášky a informácie u trénerky</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
