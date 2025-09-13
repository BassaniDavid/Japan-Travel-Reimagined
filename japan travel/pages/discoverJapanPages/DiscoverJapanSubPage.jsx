import { useState } from "react";
import { useLocation } from "react-router-dom";
import culture from "../../data/discoverJapanPage/culture";
import behavior from "../../data/discoverJapanPage/behavior";
import food from "../../data/discoverJapanPage/food";
import popCulture from "../../data/discoverJapanPage/popCulture";
import MainCard from "../../components/DiscoverJapanSubCard";

const DiscoverJapanSubPage = () => {
  const pageData = {
    "/Japan-Travel-Reimagined/scopri-giappone/cultura": culture,
    "/Japan-Travel-Reimagined/scopri-giappone/comportamento": behavior,
    "/Japan-Travel-Reimagined/scopri-giappone/cibo": food,
    "/Japan-Travel-Reimagined/scopri-giappone/popculture": popCulture,
  };

  const data = pageData[location.pathname] || [];

  const [openCardId, setOpenCardId] = useState(null);
  const handleCardClick = (id) => {
    setOpenCardId(id === openCardId ? null : id);
  };

  return (
    <main className="DiscoverJapanSubPage">
      <div className="accordion">
        {data.map((item, index) => (
          <MainCard
            key={index}
            item={item}
            id={index} // Passa l'ID al componente figlio
            isOpen={openCardId === index} // Verifica se la tendina è quella aperta
            onToggle={handleCardClick} // Passa la funzione per gestire il click
          />
        ))}
      </div>
    </main>
  );
};

export default DiscoverJapanSubPage;
