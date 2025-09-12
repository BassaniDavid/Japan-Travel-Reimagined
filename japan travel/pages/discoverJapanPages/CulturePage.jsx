import { useState } from "react";
import culture from "../../data/discoverJapanPage/culture";
import CultureCard from "../../components/CultureCard";

const CulturePage = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const handleCardClick = (id) => {
    setOpenCardId(id === openCardId ? null : id);
  };

  return (
    <main className="culturePage">
      <div className="accordion">
        {culture.map((culture, index) => (
          <CultureCard
            key={index}
            name={culture.name}
            description={culture.description}
            isTraditional={culture.isTraditional}
            historicalPeriod={culture.historicalPeriod}
            id={index} // Passa l'ID al componente figlio
            isOpen={openCardId === index} // Verifica se la tendina è quella aperta
            onToggle={handleCardClick} // Passa la funzione per gestire il click
          />
        ))}
      </div>
    </main>
  );
};

export default CulturePage;
