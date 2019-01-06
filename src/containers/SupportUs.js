import React from "react";

import Banner from "../components/Banner";
import Footer from "../components/Footer";

import Vyhlasenie from "../assets/doc/vyhlasenie.pdf";
import Potvrdenie from "../assets/doc/potvrdenie-zamestnavatela.pdf";

const SupportUs = () => (
    <div>
        <Banner />
        <div className="container">
            <div className="news-row">
                <h2>Venujte nám % z dane</h2>
                <div className="news-text">
                    <p>Milí rodičia, rodinní príslušníci, priatelia našich zverencov a priaznivci džuda!
                    Prosíme Vás o poskytnutie podielu zaplatenej dane z príjmu. Vás to nič viac nestojí,
                    štát z Vami zaplatenej dane poukáže príslušné % pre náš klub. Klub tieto prostriedky
                    použije výhradne pre účely správneho a zdravého vývoja detí - na cvičebné pomôcky,
                    regeneráciu a športové sústredenia. Vopred Vám ďakujeme.</p>
                    <p>Údaje potrebné pre Vyhlásenie o poukázaní podielu ( podnikatelia tieto údaje vypĺňajú
                    priamo v daňových priznaniach):</p>
                    <p>Obchodné meno (názov): <strong>JUDO &amp; TATRY, o.z.</strong></p>
                    <p>IČO: <strong>50590723</strong></p>
                    <p>Sídlo: <strong>P. Jilemnického 839/39, 059 21 Svit</strong></p>
                    <p>Právna forma: <strong>občianske združenie</strong></p>
                    <div className="flex-row flex-centered">
                        <a className="reg-link" rel="noopener noreferrer" target='_blank' href={Vyhlasenie}>
                            <i className="fa fa-file-text-o" />Vyhlásenie
                        </a>
                    </div>
                    <br />
                    <div className="flex-row flex-centered">
                        <a className="reg-link" rel="noopener noreferrer" target='_blank' href={Potvrdenie}>
                            <i className="fa fa-file-text-o" />Potvrdenie zamestnávateľa
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default SupportUs;
