import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
import { useEffect, useState } from "react";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = (minPrice, maxPrice) => {
    let url = `${import.meta.env.VITE_API_URL}/rooms`;
    if (minPrice && maxPrice) {
      url += `?minPrice=${minPrice}&maxPrice=${maxPrice}`;
    } else if (minPrice) {
      url += `?minPrice=${minPrice}`;
    } else if (maxPrice) {
      url += `?maxPrice=${maxPrice}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setRooms(data))
      .catch(error => console.error('Error fetching rooms:', error));
  };

  const handleRoomsFilter = filter => {
    if (filter === 'all') {
      fetchRooms();
    } else if (filter === '<=150') {
      fetchRooms(null, 150);
    } else if (filter === '151-250') {
      fetchRooms(151, 250);
    } else if (filter === '<=250') {
      fetchRooms(null, 250);
    } else if (filter === '>250') {
      fetchRooms(251);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Rooms | RoomReady</title>
        </Helmet>
        <div className="p-2">
          {/* banner */}
          <div className="hero my-3">
            <img src={banner} className="h-full w-full sm:h-[400px] object-cover rounded-xl" alt="" />
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="text-3xl pb-6">Welcome to Our Room Collection</h1>
                <p className="text-lg">Explore our collection of luxurious rooms and suites, meticulously designed to
                 provide unparalleled comfort and style. Whether you are seeking a tranquil escape or a vibrant city 
                 stay, our hotel offers a range of accommodations to suit every travelers needs. From spacious suites
                  with stunning views to cozy rooms with modern amenities, find your ideal retreat with us. Start 
                  planning your unforgettable stay today.
                </p>
                {/* filter dropdown */}
                <div className="dropdown mt-4">
                  <div tabIndex={0} role="button" className="btn m-1 text-blue-600 border-2 btn-outline">Filter Rooms by Price</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 space-y-2 shadow bg-base-100 rounded-box w-52">
                    <li><a className="btn btn-sm btn-outline" onClick={() => handleRoomsFilter('all')}>All</a></li>
                    <li><a className="btn btn-sm btn-outline" onClick={() => handleRoomsFilter('<=150')}>Less or equal to 150</a></li>
                    <li><a className="btn btn-sm btn-outline" onClick={() => handleRoomsFilter('151-250')}>151 to 250</a></li>
                    <li><a className="btn btn-sm btn-outline" onClick={() => handleRoomsFilter('<=250')}>Less or equal to 250</a></li>
                    <li><a className="btn btn-sm btn-outline" onClick={() => handleRoomsFilter('>250')}>More than 250 BDT</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* rooms */}
          <div  className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            {
              rooms.map(room => 
              <div key={room._id} className="border-2 mx-auto rounded-lg shadow-lg max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                  <Link to={`/roomsDetails/${room._id}`}>
                  <img src={room.roomImages[0]} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                  </Link>
                </div>
                <div className="flex flex-col space-y-4">
                  <div>
                    <h2 className="text-2xl font-semibold">{room.roomName}</h2>
                    <span className="text-sm dark:text-gray-400">Price Per Night: {room.pricePerNight} BDT</span>
                  </div>
                  <div className="space-y-1">
                    <span className="flex items-center space-x-2">
                      <span className="dark:text-gray-400">Available: {room.availability}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <span className="dark:text-gray-400">Total Reviews: {room.reviewCount}</span>
                    </span>
                  </div>
                </div>
              </div>
              )
            }
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Rooms;