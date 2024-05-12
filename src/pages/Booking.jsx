import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import checkout from "../assets/lottie/checkout.json";
import Lottie from "lottie-react";
import { FaCartPlus, FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Booking = () => {
  const { user } = useAuth();

  const room = useLoaderData();

  const [startDate, setStartDate] = useState()

  const handleBookingConfirm = event => {
    event.preventDefault();

    const form = event.target;

    const previousID = room._id;
    const name = user.displayName;
    const phone = form.phone.value;
    const email = user.email;
    const roomName = room.roomName;
    const pricePerNight = room.pricePerNight;
    const roomImage = room.roomImages[0];
    const schedule = startDate;
    const message = form.message.value;

    const Booking = { previousID, name, phone, email, roomName, pricePerNight, roomImage, schedule, message}

    console.table(Booking)

      Swal.fire({
        title: `${Booking.roomName}`,
        text: `Prize Per Night: ${Booking.pricePerNight}`,
        icon: "info",
        html: `
          Booking Date: ${Booking.schedule} <br> <br>
          User Name: ${Booking.name} <br> <br>
          User Phone: ${Booking.phone}
        `,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Book this!"
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
            method: "POST",
            headers: {
              "content-type" : "application/json"
            },
            body: JSON.stringify(Booking)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.insertedId){
              Swal.fire({
                title: 'Successful!',
                text: 'Booking Successful Added',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              fetch(`${import.meta.env.VITE_API_URL}/rooms/${room._id}`, {
                method: 'PATCH',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify({availability: "No"})
              })
                .then(res => res.json())
                .then(data => {
                console.log('Room availability Updated', data);
              })
            }
          })
        }
      })
    form.reset();
  }

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Booking Confirm | RoomReady</title>
        </Helmet>
        <div className="mx-auto p-4 text-center">
          {/* banner */}
          <div className="text-center text-2xl mx-auto p-4 flex flex-col md:flex-row justify-center items-center gap-16">
            <Lottie className="h-[300px]" animationData={checkout} loop={true} />
            <div className="text-center space-y-3">
              <Link to={`/roomsDetails/${room._id}`} className="dark:text-gray-100 btn btn-outline">
              <FaRegHandPointLeft />Room Details
              </Link>
              <br />
              <Link to="/myBookings" className="dark:text-gray-100 btn btn-outline">
                <FaCartPlus />Your Bookings
              </Link>
              <br />
              <Link to="/rooms" className="dark:text-gray-100 btn btn-outline">
                All Rooms<FaRegHandPointRight />
              </Link>
            </div>
          </div>
          {/* form */}
          <div className="text-center space-y-3 p-4 overflow-hidden">
            <p className="text-2xl text-indigo-600">Booking Form</p>
            <form onSubmit={handleBookingConfirm}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {/* name */}
              <label className="input input-bordered flex items-center gap-2" >
                Name:
                <input type="text" className="glow w-full" name="name" placeholder={user.displayName} disabled />
              </label>
              {/* email */}
              <label className="input input-bordered flex items-center gap-2">
                Email:
                <input type="email" className="glow w-full" name="email"  placeholder={user.email} disabled />
              </label>
              {/* Room Name */}
              <label className="input input-bordered flex items-center gap-2">
                Room Name:
                <input type="text" className="glow" name="servicesName" placeholder={room.roomName} disabled />
              </label>
              {/* Price Per Night */}
              <label className="input input-bordered flex items-center gap-2" >
                Price Per Night:
                <input type="number" className="glow " name="servicePrice"  placeholder={room.pricePerNight} disabled />
              </label>
              {/* photo */}
              <label className="input input-bordered flex items-center gap-2" >
                Photo:
                <input type="text" className="glow w-full" name="photo"  placeholder={room.roomImages[0]} disabled />
              </label>
              {/* Number */}
              <label className="input input-bordered flex items-center gap-2" >
                Phone:
                <input type="number" className="glow w-full" name="phone"  placeholder="Enter your phone number" required />
              </label>
              {/* customer message/note */}
              <textarea placeholder="Message for us" name="message"
              className="textarea textarea-bordered textarea-lg w-full" required ></textarea>
              {/* date */}
              <label className="input input-bordered flex items-center gap-2" >
                Schedule:
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </label>
              {/* confirm button */}
              <input type="submit" value="Book Now" className="btn btn-outline text-indigo-600 w-1/2 mx-auto md:col-span-2" />
            </form>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Booking;