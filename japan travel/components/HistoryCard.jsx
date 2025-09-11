const HistoryCard = ({ title, paragraph }) => {
  return (
    <div className="historical-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-paragraph">{paragraph}</p>
    </div>
  );
};

export default HistoryCard;
