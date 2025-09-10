import { NavLink, Link } from "react-router-dom";

const Homepage = () => {
  return (
    <main>
      <section className="homepage DiscoverJapanPage">
        <div className=" p-5">
          <Link to="/">
            <h1 className="mb-5">scopri il Giappone</h1>
            <p>
              Il Giappone è una terra di contrasti affascinanti, dove l'antica
              tradizione dei templi e dei giardini zen si fonde con la modernità
              frenetica delle metropoli. Dai ciliegi in fiore ai grattacieli
              futuristici, ogni dettaglio racconta una storia unica.
              <br />
              <span className="fw-bold">Per saperne di più</span>
            </p>
          </Link>
        </div>
        <img
          id="flower-1"
          className="flower"
          src="../img/homepage/flower-1.svg"
          alt="flower"
        />
        <img
          id="flower-2"
          className="flower"
          src="../img/homepage/flower-2.svg"
          alt="flower"
        />
        <img className="" src="../img/homepage/japan.webp" alt="" />
      </section>
      <section className="homepage PlanYourTripPage">
        <img className="" src="../img/homepage/japan.webp" alt="" />
        <div className=" p-5">
          <Link to="/">
            <h1 className="mb-5">Programma il tuo viaggio</h1>
            <p>
              Pronto a partire per il Giappone? Qui troverai tutti gli strumenti
              e le informazioni necessarie per pianificare il tuo itinerario
              ideale. Dalle mete imperdibili ai consigli pratici, ogni dettaglio
              è pensato per rendere la tua esperienza indimenticabile.
              <br />
              <span className="fw-bold">Per saperne di più</span>
            </p>
          </Link>
        </div>
        <img
          id="airplane"
          src="../img/homepage/airplane-3.svg"
          alt="airplane"
        />
        <img
          id="cloud-1"
          className="cloud"
          src="../img/homepage/cloud-1.svg"
          alt="cloud"
        />
        <img
          id="cloud-2"
          className="cloud"
          src="../img/homepage/cloud-1.svg"
          alt="cloud"
        />
        <img
          id="cloud-3"
          className="cloud"
          src="../img/homepage/cloud-1.svg"
          alt="cloud"
        />
      </section>
      <section className="homepage RegionPage"></section>
    </main>
  );
};

export default Homepage;
