import { Helmet, HelmetProvider } from "react-helmet-async";

const Rooms = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Rooms | RoomReady</title>
        </Helmet>
        <div>
          This is Rooms
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Rooms;