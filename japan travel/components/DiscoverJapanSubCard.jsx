const CultureCard = ({ item, id, isOpen, onToggle }) => {
  const handleClick = () => {
    onToggle(id); // Chiama la funzione passata dal genitore con il proprio ID
  };

  return (
    <div className="custom-accordion-item">
      <div className="custom-accordion-header">
        <button
          className={`custom-accordion-button ${
            isOpen ? "expanded" : "collapsed"
          }`}
          type="button"
          onClick={handleClick}
          aria-expanded={isOpen}
        >
          {item.name}
        </button>
      </div>
      <div className={`custom-accordion-content ${isOpen ? "show" : ""}`}>
        <div className="custom-accordion-body">
          <div className="d-flex justify-content-left">
            {item.isTraditional !== undefined && (
              <>
                {item.isTraditional ? (
                  <p className="me-2">Tradizione</p>
                ) : (
                  <p className="me-2">Cultura</p>
                )}
                <p>|</p>
                <p className="ms-2">{item.historicalPeriod}</p>
              </>
            )}
          </div>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CultureCard;
