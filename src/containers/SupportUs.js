import React from "react";

import Banner from "../components/Banner";
import Footer from "../components/Footer";

import Vyhlasenie from "../assets/doc/Vyhlasenie.pdf";
import Potvrdenie from "../assets/doc/Potvrdenie-mzdoveho-oddelenia.pdf";

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
                    <p><a rel="noopener noreferrer" target='_blank' href={Vyhlasenie}>Vyhlásenie</a></p>
                    <p><a rel="noopener noreferrer" target='_blank' href={Potvrdenie}>Potvrdenie mzdového oddelenia</a></p>
                </div>
            </div>
        </div>
        <div className="container support">
            <div className="news-row">
                <h2>Zbierka pre Vikiho</h2>
                <div className="news-text">
                    <p>Milí priatelia (nielen priaznivci džuda),</p>
                    <p>viem, že každý z nás má svoje starosti, problémy a strasti... Viem, že výziev na pomoc je
                    veľa... No ak môžte, pomôžte:</p><p>Maličký súrodenec jedného z našich džudistov sa narodil
                        s vážnym telesným postihnutím. Svitla im však nádej v podobe operácie v Rakúsku.
                        Operáciu však budú musieť zaplatiť sami rodičia, ako to už na Slovensku býva...</p>
                    <p>Skúšam teda aj ja s našim klubom pomôcť aspoň takto. Mená a bližšie informácie zámerne
                    pre ochranu rodiny neuvádzam.&nbsp;</p>
                    <p>Ako najlepšie a najtransparentnejšie riešenie sa mi vidí zbierka na našom klubovom účte,
                    o ktorom sa riadne účtuje a je možnosť spätnej kontroly pre verejnosť.</p>
                    <p>Ak teda máte možnosť, pomôžte:</p>
                    <p>I<strong>BAN: &nbsp;SK51 8330 0000 0023 0130 6133&nbsp;</strong></p>
                    <p><strong>Do poznámky prosím uveďte: Zbierka pre Vikiho</strong></p>
                    <p>Ďakujeme!</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default SupportUs;
