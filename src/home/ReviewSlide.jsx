import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ReviewSlide = () => {
  const [reviews, setReviews] = useState([]);
  //console.log(reviews)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/reviews`)
      .then(res => res.json())
      .then((data) => {
        // Sort reviews by timestamp in descending order
        const descendingReviews = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setReviews(descendingReviews);
      })
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="my-4 border-2 rounded-lg bg-base-300">
      {/* banner */}
      <div className="hero ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold">Customer Reviews and Ratings</h1>
            <p className="py-6">Discover what our guests have to say about their experiences.</p>
          </div>
        </div>
      </div>
      {/* reviews */}
      <div className='max-w-lg mx-auto'>
        <Slider {...settings}>
          {
            reviews.map(review =>
              <div key={review._id} className="container flex flex-col w-full max-w-xl p-6 pt-0 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
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
          }
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSlide;