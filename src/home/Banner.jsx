// Import images
import room1 from "../assets/images/slider/room1.jpg";
import room2 from "../assets/images/slider/room2.avif";
import room3 from "../assets/images/slider/room3.jpg";
import room4 from "../assets/images/slider/room4.webp";
import room5 from "../assets/images/slider/room5.jpg";
import room6 from "../assets/images/slider/room6.jpg";
import room7 from "../assets/images/slider/room7.webp";
import room8 from "../assets/images/slider/room8.avif";
import room9 from "../assets/images/slider/room9.jpg";
import room10 from "../assets/images/slider/room10.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// aos import
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  const rooms = [
    {
        id: 1,
        image: room1,
        name: "Luxury Suite",
        description: "Discover a sanctuary of serenity where every detail is designed for your comfort."
    },
    {
        id: 2,
        image: room2,
        name: "Skyline View Room",
        description: "Unwind in style with breathtaking views of the city skyline from your room."
    },
    {
        id: 3,
        image: room3,
        name: "Comfort Deluxe",
        description: "Indulge in comfort and relaxation with plush furnishings and modern amenities."
    },
    {
        id: 4,
        image: room4,
        name: "Boutique Charm",
        description: "Feel at home away from home with personalized service and attention to detail."
    },
    {
        id: 5,
        image: room5,
        name: "Executive Suite",
        description: "Immerse yourself in the ultimate retreat with our luxurious and well-appointed accommodations."
    },
    {
        id: 6,
        image: room6,
        name: "Tranquil Haven",
        description: "Wake up refreshed in a cozy bed surrounded by tranquil décor and natural light."
    },
    {
        id: 7,
        image: room7,
        name: "Sophisticated Retreat",
        description: "Escape to a world of sophistication and charm with our meticulously crafted rooms."
    },
    {
        id: 8,
        image: room8,
        name: "Premium Comfort",
        description: "Experience luxury at its finest in our spacious and elegantly designed suites."
    },
    {
        id: 9,
        image: room9,
        name: "Elite Accommodation",
        description: "Elevate your stay with unparalleled comfort and style in our premium rooms."
    },
    {
        id: 10,
        image: room10,
        name: "Refined Elegance",
        description: "Experience the epitome of elegance and refinement in our exquisitely designed rooms."
    }
  ];

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div data-aos="zoom-in-up" className='p-2'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true} 
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        {
          rooms.map(room => 
            <SwiperSlide key={room.id}>
              <div className="hero">
                <img 
                className='h-[500px] mx-auto rounded-xl' 
                src={room.image} 
                />
                <div className="hero-content bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg flex flex-col">
                  <h2 className="sm:text-xl text-white">{room.name} </h2>
                  <p className="max-w-md text-center font-bold sm:text-lg text-white  mx-4 rounded-xl">
                  {room.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
};

export default Banner;