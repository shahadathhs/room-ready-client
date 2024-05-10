import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Home | RoomReady</title>
        </Helmet>
        <div>
          <Banner />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;