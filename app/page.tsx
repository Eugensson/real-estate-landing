import { Banner } from "@/components/banner";
import { HouseList } from "@/components/house-list";

const Home = () => {
  return (
    <section className="min-h-300">
      <Banner />
      <HouseList />
    </section>
  );
};

export default Home;
