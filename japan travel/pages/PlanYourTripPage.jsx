import planYourTrip from "../data/planYourTripPage/planYourTrip";
import DiscoverCard from "../components/DiscoverCard";

const PlanYourTripPage = () => {
  return (
    <main>
      {planYourTrip.map((data) => (
        <DiscoverCard key={data.title} info={data} />
      ))}
    </main>
  );
};

export default PlanYourTripPage;
