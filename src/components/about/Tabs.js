import React from "react";
import classNames from "classnames";
import { withState } from "recompose";

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="about-tabs">
    <div className="tab">
      <div className="tab-title" onClick={() => setActiveTab(activeTab === 1 ? null : 1)}>
        <p>Prečo je judo vhodné pre vaše deti</p>
        {activeTab === 1 ? <i className="fa fa-caret-up" /> : <i className="fa fa-caret-down" />}
      </div>
      <div className={classNames("tab-text", { active: activeTab === 1 })}>
        <p>
          Judo kladne vplýva na charakter a harmonický rozvoj osobnosti. Všestranne rozvíja všetky
          telesné partie a napomáha zdravému telesnému a duševnému vývoju celého organizmu. Judo učí
          sebaovládaniu, zvládaniu prekážok za účelom dosiahnutia cieľov. Je to síce individuálny
          šport, ale keďže tréningy sú realizované kolektívne, cvičenec pravidelne rozvíja aj svoje
          sociálne zručnosti (tímový duch, dobrá schopnosť adaptovať sa na nové prostredie, dobré
          komunikačné schopnosti). Judo je vynikajúcim spôsobom odreagovania sa a eliminácie
          nadbytočnej energie, či agresivity a je teda veľmi vhodnou voľnočasovou aktivitou aj pre
          hyperaktívne deti. Nezanedbateľnou výhodou hovoriacou v prospech juda je aj nízka finančná
          náročnosť tohto športu, kvalitné tréningové podmienky a možnosť zúčastňovať sa domácich i
          zahraničných turnajov a sústredení.
        </p>
        <p>Judo je šport vhodný tak pre chlapcov, ako aj pre dievčatá.</p>
      </div>
    </div>

    <div className="tab">
      <div className="tab-title" onClick={() => setActiveTab(activeTab === 2 ? null : 2)}>
        <p>Správane sa na tréningu</p>
        {activeTab === 2 ? <i className="fa fa-caret-up" /> : <i className="fa fa-caret-down" />}
      </div>
      <div className={classNames("tab-text", { active: activeTab === 2 })}>
        <ul>
          <li>
            Judista sa pred vstupom do dojo (telocvičňa) a na tatami (žinenka) vždy ukloní. Taktiež
            vždy pri ich opustení.
          </li>
          <li>
            Judista sa vždy pokloní súperovi, s ktorým začína alebo končí zápas, alebo nácvik
            techník.
          </li>
          <li>
            Judista počas tréningu nikdy bezdôvodne neopúšťa dojo. V prípade nutnosti opustiť dojo
            si pýta uvoľnenie od trénera.
          </li>
          <li>Judista nevstupuje na tatami v obuvi.</li>
          <li>Judista vstupuje do dojo oblečený a upravený v kimone so zaviazaným opaskom.</li>
          <li>
            Judista nesmie mať na sebe počas tréningu žiadne kovové, alebo tvrdé predmety
            (náhrdelníky, retiazky, náušnice, náramky, hodinky, sponky...), aby nedošlo predovšetkým
            k zraneniu.
          </li>
          <li>
            Judista dodržiava poriadok a disciplínu a počúva pokyny trénera alebo trénerom určeného
            judistu. Nesmie vykrikovať, či inak narušovať tréning.
          </li>
          <li>
            Judista po dokončení cviku a pri výklade trénera neleží na zemi, sedí len ak to tréner
            povolí.
          </li>
          <li>
            Judista prichádza na tréning včas (min. 15 minút pred začatím tréningu) a neopúšťa
            tréning predčasne, ak sa tak nedohodne s trénerom.
          </li>
          <li>
            Judista počas tréningu nekonzumuje žiadne potraviny. Žuvačky sú počas tréningu zakázané.
            Na tréning si môže priniesť iba nealkoholický nápoj (vhodná je čistá vody, nie sladený,
            či sýtený nápoj), ktorý si prichystá na určené miesto v dojo. Pije sa iba na pokyn
            trénera!
          </li>
          <li>
            Judista nenosí na tréning cenné veci, ak so sebou má niečo cenné, nenecháva to v šatni,
            ale položí na určené miesto pre takéto veci. Mobilný telefón si vypne, alebo nastaví na
            tichý režim.
          </li>
        </ul>
      </div>
    </div>

    <div className="tab">
      <div className="tab-title" onClick={() => setActiveTab(activeTab === 3 ? null : 3)}>
        <p>Čo potrebuje vaše dieťa na tréning</p>
        {activeTab === 3 ? <i className="fa fa-caret-up" /> : <i className="fa fa-caret-down" />}
      </div>
      <div className={classNames("tab-text", { active: activeTab === 3 })}>
        <p>
          Kým tréner, po konzultácii s rodičmi neodporučí kimono, dieťa nosí na prezlečenie tričko s
          dlhými rukávmi (tenké, nie mikinu), tepláky, šlapky a pitie (čistá voda alebo nesladený
          nápoj). Odporúčame staršie oblečenie, ktoré Vám nebude ľúto ak sa rozťahá a potrhá. Keď
          bude dieťa trénovať v kimone, pod kimono tričko s krátkym rukávom, taktiež odporúčame
          staršie. Dieťa nikdy nesmie cvičiť v oblečení, v ktorom prišiel na tréning, ani v
          tréningovom oblečení nesmie odchádzať domov (hygiena, riziko prechladnutia). Dieťa cvičí
          bosé. Akékoľvek šperky - retiazky, prstene, náušnice, sponky, čelenky, piercingy...sú na
          tréningu zakázané (riziko úrazu seba a spolucvičiacich). V prípade, ak sú náušnice a
          piercingy uzamknuté a teda je problematické ich pred tréningom odložiť, zalepte ich
          dieťaťu leukaplastom. Dlhé vlásky musia byť stiahnuté gumičkou, najlepšie bavlnenou.
        </p>
        <p>Všetko pre bezpečnosť vašich detí!</p>
      </div>
    </div>

    <div className="tab">
      <div className="tab-title" onClick={() => setActiveTab(activeTab === 4 ? null : 4)}>
        <p>Rodičia na tréningoch</p>
        {activeTab === 4 ? <i className="fa fa-caret-up" /> : <i className="fa fa-caret-down" />}
      </div>
      <div className={classNames("tab-text", { active: activeTab === 4 })}>
        <p>
          Rodičia a diváci môžu sledovať priebeh tréningov vo vyhradenom priestore telocvične a len
          so súhlasom trénera. Ak tréner uzná, že prítomnosť rodičov je pre bezproblémový priebeh
          tréningov nežiadúca, má právo požiadať rodičov o opustenie dojo počas tréningu.V žiadnom
          prípade rodičia nesmú zasahovať do tréningu – napomínať svoje, či ostatné deti, hlasno
          povzbudzovať, klásť otázky trénerovi, upravovať kimono a opasok dieťaťa atď... Je
          štatisticky dokázané, že ak deti trénujú v prítomnosti rodičov, pri každom menšom
          buchnutí, či zanedbateľnom úraze zveličujú a utekajú k rodičom, či odmietajú plne
          rešpektovať trénera. Ak tréner súhlasí s prítomnosťou rodičov na tréningu, rodičia či
          diváci by nemali medzi sebou komunikovať, aby nerušili tréning. Judo je „jemná cesta“ a ak
          Vaše dieťa bude disciplinované a bude rešpektovať pokyny trénera, či určeného
          skúsenejšieho judistu, nemalo by dôjsť k vážnemu zraneniu.
        </p>
      </div>
    </div>

    <div className="tab">
      <div className="tab-title" onClick={() => setActiveTab(activeTab === 5 ? null : 5)}>
        <p>Čo potrebuje vaše dieťa na súťaž</p>
        {activeTab === 5 ? <i className="fa fa-caret-up" /> : <i className="fa fa-caret-down" />}
      </div>
      <div className={classNames("tab-text", { active: activeTab === 5 })}>
        <ol>
          <li>
            Preukaz SZJ (uschovaný u trénera), kartu poistenca, občiansky preukaz – pri ceste do
            zahraničia u detí, ktoré nemajú občiansky preukaz, je potrebný pas.
          </li>
          <li>
            Judogi (kimono) – vrchný odev, nohavice, opasok (dievčatá musia mať biele nepriesvitné
            tričko). Vhodné je aj ďalšie, rezervné tričko.
          </li>
          <li>
            Prezuvky (ponožky, ani topánky v ktorých chodíte po vonku nie sú prezuvky!). Odporúčame
            šľapky so svetlou podrážkou.
          </li>
          <li>Nápoj (odporúča sa čistá voda, nie sladený ani sýtený nápoj).</li>
          <li>
            Ľahko stráviteľné jedlo (na súťaž) vhodné je ovocie, cereálie, čokoláda atď. Teda jedlo,
            ktoré sa rýchlo premieňa na využiteľnú energiu.
          </li>
          <li>
            Zbaliť dostatok jedla aj na cestu. Ľahko stráviteľného, ktoré zbytočne pri trávení
            nekvasí, ale naopak dodá energiu.
          </li>
          <li>Hotovosť (na úhradu štartovného + menšiu hotovosť na osobné výdavky).</li>
          <li>
            V prípade cesty do zahraničia: pas, európsky preukaz zdravotného poistenia, hotovosť
            (štartovné, cestovné, príp. ubytovanie, stravné – podľa pokynov trénera), hygienické
            potreby, vhodné a náhradné oblečenie a obuv.
          </li>
        </ol>
        <p>Ďalšie informácie poskytuje tréner vždy na tréningoch, pred odchodom na súťaž.</p>
      </div>
    </div>

    <div className="tab">
      <div className="tab-title" onClick={() => setActiveTab(activeTab === 6 ? null : 6)}>
        <p>Rodičia na súťažiach</p>
        {activeTab === 6 ? <i className="fa fa-caret-up" /> : <i className="fa fa-caret-down" />}
      </div>
      <div className={classNames("tab-text", { active: activeTab === 6 })}>
        <p>
          Neodporúča sa účasť rodičov ani na súťažiach, či pretekoch. Ak sa však na účasti dohodnete
          s trénerom, dbajte na dodržiavanie týchto odporúčaní:
        </p>
        <ol>
          <li>
            Pretekár sa musí od prvého momentu príchodu na súťaž zdržiavať len v prítomnosti trénera
            a ostatných judistov (zápis, váženie, rozdelenie do skupín, čakanie na nástup v súťaži,
            hodnotenie).
          </li>
          <li>Nevytrhávajte pretekára z kolektívu kamarátov judistov.</li>
          <li>
            Organizáciu a riadenie času počas preteku prenechajte trénerovi, alebo sa riaďte podľa
            jeho pokynov.
          </li>
          <li>
            Nepolemizujte a nespochybňujte verdikty rozhodcov. Čo povie rozhodca, to sa nedá zmeniť.
          </li>
          <li>
            Ak je to možné a tréner s tým súhlasí, pomôžte trénerovi s dohliadaním na judistov
            svojho klubu, prípadne mu ponúknite pomoc pri organizačných záležitostiach.
          </li>
          <li>Neopúšťajte s pretekárom, bez vedomia a súhlasu trénera, dojo.</li>
          <li>
            Pri prípadných zraneniach nezasahujte, nechajte lekára súťaže nech dieťa prezrie a
            ošetrí.
          </li>
        </ol>
      </div>
    </div>
  </div>
);

export default withState("activeTab", "setActiveTab", null)(Tabs);
