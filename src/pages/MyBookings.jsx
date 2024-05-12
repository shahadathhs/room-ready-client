import { Helmet, HelmetProvider } from "react-helmet-async";
import useAuth from './../hooks/useAuth';
import useAxiosSecure from './../hooks/useAxiosSecure';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import cartList from "../assets/lottie/list.json"
import Lottie from "lottie-react";
import { FaRegHandPointRight } from "react-icons/fa";
import { MdDeleteForever, MdRateReview, MdOutlineUpdate } from "react-icons/md";

const MyBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [bookings, setBookings] = useState([]);

  const url = `/bookings?email=${user.email}`

  useEffect(()=> {
    axiosSecure.get(url)
      .then(res => {
        setBookings(res.data)
      })

  }, [url, axiosSecure])

  
  const handleBookingDelete = ( bookingID, previousID, scheduledDate) => {
    const today = new Date();
    const scheduled = new Date(scheduledDate);
    // Check if it's at least one day before the scheduled date
    if (scheduled.getTime() - today.getTime() > 24 * 60 * 60 * 1000) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Cancel it!"
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`${import.meta.env.VITE_API_URL}/bookings/${bookingID}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log('delete Booking', data);
              /* Print a message that indicates whether the operation deleted a document */
              if (data.deletedCount === 1) {
                console.log("Successfully Canceled one booking.");
                Swal.fire({
                  title: "Canceled!",
                  text: "Booking has been canceled.",
                  icon: "success"
                });
                fetch(`${import.meta.env.VITE_API_URL}/rooms/${previousID}`, {
                  method: 'PATCH',
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify({availability: "Yes"})
                })
                  .then(res => res.json())
                  .then(data => {
                  console.log('Room availability Updated', data);
                })
                const remaining = bookings.filter(booking => booking._id !== bookingID)
                setBookings(remaining)
              } else {
                console.log("No Booking matched the query. Canceled 0 Booking.");
              }
            })
            .catch(error => console.log(error))
        }
      })
    } else {
      Swal.fire({
        title: "Cancellation not allowed",
        text: "You cannot cancel this booking as it's less than one day away from the scheduled date.",
        icon: "error"
      });
    }
  }


  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>My Bookings | RoomReady</title>
        </Helmet>
        <div>
          {/* banner */}
          <div className="text-center text-2xl mx-auto p-4 flex flex-col md:flex-row justify-center items-center gap-16">
            <Lottie className="h-[400px]" animationData={cartList} loop={true} />
            <div className="text-center">
              <Link to="/rooms" className="dark:text-gray-100 btn btn-outline">
                Add More<FaRegHandPointRight />
              </Link>
            </div>
          </div>
          {/* carts */}
          <div className="flex flex-col max-w-3xl p-3 mx-auto space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold text-center">Your Booking List</h2>
            <ul className="flex flex-col divide-y dark:divide-gray-700">
              {/* single cart */}
              {
                bookings.map(booking => 
                  <li key={booking._id} className="flex flex-col py-6 m-2 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4 items-center gap-2">
                      <img src={booking.roomImage} className="flex-shrink-0 object-cover w-24 h-24 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"  alt="Polaroid camera" />
                      <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{booking.roomName}</h3>
                            <p className="text-sm dark:text-gray-400">Schedule: {booking.schedule.slice(0,10)}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold">Price:{booking.pricePerNight}</p>
                            <p className="text-sm line-through dark:text-gray-600">
                              {parseFloat(booking.pricePerNight)+ parseFloat(booking.pricePerNight/5)}
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center text-sm ">
                          {/* Cancel button */}
                          <button onClick={() => handleBookingDelete( booking._id , booking.previousID, booking.schedule)} 
                            type="button" className="flex items-center space-x-1 mx-auto btn btn-outline text-blue-600">
                            <div className="text-xl"><MdDeleteForever /></div>
                            <span>Cancel</span>
                          </button>
                          {/* Cancel button */}
                          <Link to={`/bookingUpdate/${booking._id}`} 
                            type="button" className="flex items-center space-x-1 mx-auto btn btn-outline text-blue-600">
                            <div className="text-xl"><MdOutlineUpdate /></div>
                            <span>Update</span>
                          </Link>
                          {/* review */}
                          <Link to={`/review/${booking.previousID}`} type="button" 
                            className="flex items-center btn btn-outline text-blue-600 space-x-1 mx-auto col-span-2 md:col-span-1">
                            <div className="text-xl"><MdRateReview /></div>
                            <span>Review</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              }
            </ul>
            <div className="space-y-1 text-right">
              <p>Total amount:
                <span className="font-semibold">
                {bookings.reduce((total, booking) => {
                    // Parse total and cart.price only if they are valid integers in string format
                    let parsedTotal = isNaN(parseFloat(total)) ? 0 : parseFloat(total);
                    let parsedPrice = isNaN(parseFloat(booking.pricePerNight)) ? 0 : parseFloat(booking.pricePerNight);
                    return parsedTotal + parsedPrice;
                }, 0)}
                </span>
              </p>
              <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default MyBookings;