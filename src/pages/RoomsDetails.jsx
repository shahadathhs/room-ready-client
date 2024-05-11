import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const RoomsDetails = () => {
  const room = useLoaderData();
  console.log(room)

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>{room.roomName} | RoomReady</title>
        </Helmet>
        <div>
          {room.roomName}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default RoomsDetails;