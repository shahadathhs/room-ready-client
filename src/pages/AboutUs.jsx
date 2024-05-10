import { Helmet, HelmetProvider } from "react-helmet-async";

const AboutUs = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>About Us | RoomReady</title>
        </Helmet>
        <div>
          This is About Us
        </div>
      </div>
    </HelmetProvider>
  );
};

export default AboutUs;