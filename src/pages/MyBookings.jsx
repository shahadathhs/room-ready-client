import { Helmet, HelmetProvider } from "react-helmet-async";

const MyBookings = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>My Bookings | RoomReady</title>
        </Helmet>
        <div>
          This is My Bookings
        </div>
      </div>
    </HelmetProvider>
  );
};

export default MyBookings;