import Banner from "../components/Home/Banner";
import BannerBottom from "../components/Home/BannerBottom";
import PopularProduct from "../components/Home/PopularProduct";

const Home = () => {
  return (
    <div className="my-6">
      <Banner />
      <BannerBottom />
      <PopularProduct />
    </div>
  );
};

export default Home;
