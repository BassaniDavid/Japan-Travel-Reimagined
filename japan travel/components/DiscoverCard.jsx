import { Link } from "react-router-dom";

const DiscoverCard = ({ info }) => {
  return (
    <Link to={info.path} className="discover-card-link">
      <div className="discover-card">
        <img src={info.image} alt="" />
        <h3 className="card-title">{info.title}</h3>
        <p className="card-text">{info.text}</p>
      </div>
    </Link>
  );
};

export default DiscoverCard;
