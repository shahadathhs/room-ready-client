import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaCartPlus } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from "sweetalert2";

const BookingUpdate = () => { 
  const updateBooking = useLoaderData()

  const [startDate, setStartDate] = useState(new Date())

  // navigation systems
  const navigate = useNavigate();
  const from = "/myBookings";

  console.log(updateBooking)

  const handleScheduleUpdate = id => {
    fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({schedule: startDate})
    })
      .then(res => res.json())
      .then(data => {
      console.log('Booking Schedule Updated', data);
      Swal.fire({
        title: 'Successful!',
        text: 'Booking Schedule Updated',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    })
    
    navigate(from);
  }


  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Update Schedule | RoomReady</title>
        </Helmet>
        <div>
          {/* banner */}
          <div className="text-center max-w-md mx-auto sm:text-xl space-y-3 p-3">
            <p>You can Update booking date only.</p>
            <p>To cancel the booking, go to My Booking Page.</p>
            <Link to="/myBookings" className="dark:text-gray-100 btn btn-outline">
              <FaCartPlus />Your Bookings
            </Link>
            <p>Room Name:{updateBooking.roomName} </p>
            <p>Current Schedule: {updateBooking.schedule} </p>
          </div>
          {/* update form */}
          <form className="space-y-8 p-4 border-[1px] rounded-md shadow-md" onSubmit ={()=> handleScheduleUpdate(updateBooking._id)} >
            <div className="space-y-4">
               {/* date */}
               <label className="input input-bordered flex items-center gap-2" >
                Schedule:
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </label>
            </div>
            {/* submit */}
            <input type="submit" value="Update" 
            className="w-full px-8 py-3 font-bold rounded-md btn btn-outline text-blue-600" />
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default BookingUpdate;