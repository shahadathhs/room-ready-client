import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./Banner";
import Map from "./Map";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Home | RoomReady</title>
        </Helmet>
        <div className="py-6 space-y-3">
          <Banner></Banner>
          <Map></Map>
          <NewsLetter></NewsLetter>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;