import { Link } from "react-router-dom";

const DiscoverCard = ({ info }) => {
  return (
    <Link to={info.path} className="discover-card-link">
      <div className="discover-card">
        <div className="discover-content">
          <h2 className="mb-4">{info.title}</h2>
          <p>{info.text}</p>
          <button className="fw-bold">Per saperne di più</button>
        </div>
        <div className="image-container">
          <img src={info.image} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default DiscoverCard;
