import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const BookingUpdate = () => { 
  const updateBooking = useLoaderData()
  console.log(updateBooking)

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Update Schedule | RoomReady</title>
        </Helmet>
        <div>
          This is update
        </div>
      </div>
    </HelmetProvider>
  );
};

export default BookingUpdate;