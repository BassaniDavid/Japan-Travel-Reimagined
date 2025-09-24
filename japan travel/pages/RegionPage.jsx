import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import hokkaido from "../data/region/hokkaido";
import tohoku from "../data/region/tohoku";
import kanto from "../data/region/kanto";
import chubu from "../data/region/chubu";
import kansai from "../data/region/kansai";
import chugoku from "../data/region/chugoku";
import shikoku from "../data/region/shikoku";
import kyushu from "../data/region/kyushu";
import Okinawa from "../data/region/Okinawa";

const RegionPage = () => {
  const navigate = useNavigate();

  const pageData = {
    "/hokkaido": hokkaido,
    "/tohoku": tohoku,
    "/kanto": kanto,
    "/chubu": chubu,
    "/kansai": kansai,
    "/chugoku": chugoku,
    "/shikoku": shikoku,
    "/kyushu": kyushu,
    "/okinawa": Okinawa,
  };

  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(pageData[location.pathname.toLowerCase()]);
  }, [location.pathname]);
  console.log(data);

  return (
    <main className="container regionPage">
      <h1>{location.pathname.split("/").pop().toUpperCase()}</h1>
      {data && data.length > 0 ? (
        data.map((sezione, index) => (
          <section key={index} className="mb-5">
            <h2>{sezione.categoria}</h2>

            {/* Contenuto semplice */}
            {Array.isArray(sezione.contenuto) &&
              sezione.contenuto.map((item, i) =>
                typeof item === "string" ? (
                  <ul className="fs-4">
                    <li className="mb-1" key={i}>
                      {item}
                    </li>
                  </ul>
                ) : (
                  <div key={i} style={{ marginLeft: "1rem" }}>
                    <h3 className="fs-1">{item.nome}</h3>
                    <p className="fs-3 mb-1">{item.descrizione}</p>
                    <ul className="fs-4">
                      {item.puntiInteresse.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}

            {/* SottoCategorie */}
            {sezione.sottoCategorie &&
              sezione.sottoCategorie.map((sub, k) => (
                <div key={k} style={{ marginTop: "1rem", marginLeft: "1rem" }}>
                  <h3 className="fs-2">{sub.tipo}</h3>
                  <ul className="fs-4">
                    {sub.attivita.map((att, l) => (
                      <li key={l}>{att}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </section>
        ))
      ) : (
        <p>Nessun dato disponibile</p>
      )}
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="px-auto py-2 mb-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Torna indietro
      </button>
    </main>
  );
};

export default RegionPage;
