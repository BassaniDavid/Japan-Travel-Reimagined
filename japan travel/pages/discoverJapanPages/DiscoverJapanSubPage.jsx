import { useState } from "react";
import { useLocation } from "react-router-dom";
import culture from "../../data/discoverJapanPage/culture";
import behavior from "../../data/discoverJapanPage/behavior";
import food from "../../data/discoverJapanPage/food";
import popCulture from "../../data/discoverJapanPage/popCulture";
import accommodations from "../../data/planYourTripPage/accomodation";
import budget from "../../data/planYourTripPage/bugdet";
import documents from "../../data/planYourTripPage/documents";
import transportation from "../../data/planYourTripPage/transportation";
import usefulTips from "../../data/planYourTripPage/usefulTips";

import MainCard from "../../components/DiscoverJapanSubCard";

const DiscoverJapanSubPage = () => {
  // Dichiarazione dell'oggetto pageData
  const pageData = {
    "/Japan-Travel-Reimagined/scopri-giappone/cultura": culture,
    "/Japan-Travel-Reimagined/scopri-giappone/comportamento": behavior,
    "/Japan-Travel-Reimagined/scopri-giappone/cibo": food,
    "/Japan-Travel-Reimagined/organizza-viaggio/popculture": popCulture,
    "/Japan-Travel-Reimagined/organizza-viaggio/alloggi": accommodations,
    "/Japan-Travel-Reimagined/organizza-viaggio/trasporti": transportation,
    "/Japan-Travel-Reimagined/organizza-viaggio/visti-e-documenti": documents,
    "/Japan-Travel-Reimagined/organizza-viaggio/budget": budget,
    "/Japan-Travel-Reimagined/organizza-viaggio/consigli-utili": usefulTips,
  };

  const location = useLocation();
  console.log(location.pathname);

  const data = pageData[location.pathname] || [];

  const [openCardId, setOpenCardId] = useState(null);
  const handleCardClick = (id) => {
    setOpenCardId(id === openCardId ? null : id);
  };

  return (
    <main className="DiscoverJapanSubPage">
      <div className="accordion">
        {data.length > 0 ? (
          data.map((item, index) => (
            <MainCard
              key={index}
              item={item}
              id={index}
              isOpen={openCardId === index}
              onToggle={handleCardClick}
            />
          ))
        ) : (
          <div>Contenuto non trovato per questo percorso.</div>
        )}
      </div>
    </main>
  );
};

export default DiscoverJapanSubPage;
