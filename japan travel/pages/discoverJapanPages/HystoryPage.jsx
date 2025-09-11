import history from "../../data/discoverJapanPage/history";
import HistoryCard from "../../components/HistoryCard";

const HistoryPage = () => {
  return (
    <main>
      {history.map((period) => (
        <HistoryCard
          key={period.title}
          title={period.title}
          paragraph={period.paragraph}
        />
      ))}
    </main>
  );
};

export default HistoryPage;
