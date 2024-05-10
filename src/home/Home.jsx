import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Home | RoomReady</title>
        </Helmet>
        <div>
          This is Home
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;