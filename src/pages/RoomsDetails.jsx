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
            <div className="p-4 border-2 rounded-lg space-y-3">
              <h1 className="text-center font-bold text-2xl">Review Section</h1>
              {
                room.reviews.length>0 
                ?
                  room.reviews.map(review =>
                    <div key={review._id} className="container flex flex-col w-full border-2 max-w-xl p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                      <div className="flex justify-between p-4 pt-0">
                        <div className="flex space-x-4">
                          <div>
                            <img src={review.userPhoto} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                          </div>
                          <div>
                            <h4 className="font-bold">{review.userName}</h4>
                            <span className="text-xs dark:text-gray-400">{review.timestamp}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-300">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                          </svg>
                          <span className="text-xl font-bold">{review.rating}</span>
                        </div>
                      </div>
                      
                      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <p>About: <span className='text-xl font-bold'>{review.roomName}</span> </p>
                        <p>{review.review}</p>
                      </div>
                    </div>
                  )
                :
                <div className="text-center">
                  <p className="font-bold">Be the First to Review!</p>
                  <p>No reviews yet. Share your experience and help others make informed decisions.</p>
                  <p>You can give review after booking</p>
                </div>
              }
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default RoomsDetails;