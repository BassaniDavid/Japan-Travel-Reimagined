import discoverJapan from "../data/discoverJapanPage/discoverJapan";
import DiscoverCard from "../components/DiscoverCard";

const DiscoverJapanPage = () => {
  return (
    <main>
      {discoverJapan.map((data) => (
        <DiscoverCard key={data.title} info={data} />
      ))}
    </main>
  );
};

export default DiscoverJapanPage;
