import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from './../hooks/useAuth';
import Swal from "sweetalert2";

const Review = () => {
  const reviewRoom = useLoaderData();

  const {user} = useAuth();

  // navigation systems
  const navigate = useNavigate();
  const to = "/myBookings";

  const handleReview = event => {
    event.preventDefault();

    const form = event.target;

    const userName = user.displayName;
    const userEmail = user.email;
    const userPhoto = user.photoURL;
    const roomName = reviewRoom.roomName;
    const rating = form.rating.value;
    if (rating<1 || rating>5) {
      Swal.fire({
        title: 'Unsuccessful!',
        text: 'Invalid Rating',
        icon: "error",
      })
    }else{
      console.log(rating)
    }
    const timestamp = new Date();
    const review = form.review.value;

    const reviewForm = {userName, userEmail, userPhoto, roomName, timestamp, rating, review}
    console.table(reviewForm);

    form.reset();
    navigate(to)
  }

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Add Review | RoomReady</title>
        </Helmet>
        <div className="p-2">
          <div className="m-3">
            <h2 className="text-center border-2 rounded-lg p-2 w-[200px] mx-auto shadow-md">Share Your Experience</h2>
          </div>
          {/* review form */}
          <form onSubmit={handleReview}
          className="space-y-3 md:w-3/4 mx-auto">
            {/* <label className="input input-bordered flex items-center gap-2">
              Name:
              <input type="text" name="name" className="grow" placeholder={user.displayName} disabled />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email:
              <input type="email" name="email" className="grow" placeholder={user.email} disabled />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Photo:
              <input type="text" name="photo" className="grow" placeholder={user.photoURL} disabled />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Room Name:
              <input type="text" name="roomName" className="grow" placeholder={reviewRoom.roomName} disabled />
            </label> */}
            {/* timestamp */}
            {/* <label className="input input-bordered flex items-center gap-2" >
              Timestamp:
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} disabled />
            </label> */}
            {/* rating select */}
            <label className="input input-bordered flex items-center gap-2">
              Rating:
              <input type="number" name="rating" className="grow" placeholder="1-5 range" required />
            </label>
            {/* review */}
            <textarea placeholder="Your Review" name="review"
              className="textarea textarea-bordered textarea-lg w-full" required >
            </textarea>
            {/* submit button */}
            <input type="submit" value="Submit" className="btn btn-outline text-indigo-600 w-full" />
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Review;