import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Review = () => {
  const reviewRoom = useLoaderData();
  console.log(reviewRoom)

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Add Review | RoomReady</title>
        </Helmet>
        <div>
          This is Review
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Review;