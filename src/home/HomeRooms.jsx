import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomeRooms = () => {
  const [rooms, setRooms] = useState([]);
  console.log(rooms)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/rooms`)
      .then(res => res.json())
      .then((data) => {
        // Filter out rooms with availability set to "No"
        const filteredRooms = data.filter(room => room.availability === 'Yes');
        // Slice the first five rooms
        const firstFourRooms = filteredRooms.slice(0, 4);
        setRooms(firstFourRooms);
      })
      .catch(error => console.error('Error fetching rooms:', error));
  }, [])

  return (
    <div className="py-6">
      {/* banner */}
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-2xl font-bold">Welcome to Our Featured Rooms</h1>
            <p className="py-6">Discover the epitome of comfort and luxury with our handpicked selection of featured rooms. Each room is meticulously designed to provide you with a memorable stay, blending modern amenities with timeless elegance.</p>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          rooms.map(room=>
            <div key={room._id} className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 border-2 mx-auto dark:text-gray-50">
              <img src={room.roomImages[1]} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-400">{room.pricePerNight} BDT</span>
                <h2 className="text-xl font-semibold tracking-wide">{room.roomName}</h2>
              </div>
              <p title={room.roomDescription} className="dark:text-gray-100">{room.roomDescription.slice(0,100)}...</p>
              <Link to={`/booking/${room._id}`} className="btn btn-outline text-white border-2">Book Now</Link>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default HomeRooms;