import { Link } from "react-router-dom";

const RegionMapCard = ({ details, onPrevClick, onNextClick }) => {
  return (
    <div className="region-card">
      <div className="card-controls">
        <h2>esplora le regioni</h2>
      </div>

      {details ? (
        <div>
          <button onClick={onPrevClick}>&lt;</button>
          <Link to={`/regioni/${details.title}`}>
            <img src={details.image} alt="" />
          </Link>
          <button onClick={onNextClick}>&gt;</button>
          <Link to={`/regioni/${details.title}`}>
            <p>{details.description}</p>
          </Link>
        </div>
      ) : (
        <p>Passa il mouse su una regione per scoprire di più</p>
      )}
    </div>
  );
};

export default RegionMapCard;
