import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const RoomsDetails = () => {
  const room = useLoaderData();
  console.log(room)

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>{room.roomName} | RoomReady</title>
        </Helmet>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-xl p-2 py-12 mx-auto space-y-6 lg:px-8 lg:max-w-7xl">
            {/* banner */}
            <div className="hero">
              <img src={room.roomImages[0]} className="w-full object-cover h-[400px] rounded-lg" alt="" />
              <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
              <div className="hero-content text-center text-white rounded-lg">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">{room.roomName}</h1>
                  <p className="mb-5 text-2xl">Price Per Night: {room.pricePerNight} BDT</p>
                  <Link to={`/booking/${room._id}`} className="btn btn-outline text-white border-2">Book Now</Link>
                </div>
              </div>
            </div>
            {/* first block */}
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mt-3 text-lg p-4 italic text-center dark:text-gray-400">
                  {room.roomDescription}
                </p>
              </div>
              <div aria-hidden="true" className="mt-10 lg:mt-0">
                <img src={room.roomImages[1]} alt="" className="mx-auto w-full rounded-lg shadow-lg dark:bg-gray-500" />
              </div>
            </div>
            {/* second block */}
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-blue-400 dark:text-gray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Available: {room.availability}</h4>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-blue-400 dark:text-gray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Area: {room.roomSize}</h4>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-blue-400 dark:text-gray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Total Review: {room.reviews.length}</h4>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-blue-400 dark:text-gray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Offers: {room.specialOffers}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <img src={room.roomImages[2]} alt="" className="mx-auto w-full rounded-lg shadow-lg dark:bg-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default RoomsDetails;