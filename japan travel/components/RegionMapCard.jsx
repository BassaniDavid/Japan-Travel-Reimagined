const RegionMapCard = ({ details, onPrevClick, onNextClick }) => {
  return (
    <div className="region-card">
      <div className="card-controls">
        <h2>esplora le regioni</h2>
      </div>

      {details ? (
        <div>
          <button onClick={onPrevClick}>&lt;</button>
          <img src={details.image} alt="" />
          <button onClick={onNextClick}>&gt;</button>
          <p>{details.description}</p>
        </div>
      ) : (
        <p>Passa il mouse su una regione per scoprire di più</p>
      )}
    </div>
  );
};

export default RegionMapCard;
