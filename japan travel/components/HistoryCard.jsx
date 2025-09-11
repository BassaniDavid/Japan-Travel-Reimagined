const HistoryCard = ({ title, paragraph }) => {
  return (
    <div className="historical-card">
      <h2 className="card-title">{title}</h2>
      <p className="card-paragraph">{paragraph}</p>
    </div>
  );
};

export default HistoryCard;
