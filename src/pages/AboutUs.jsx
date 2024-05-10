import Lottie from "lottie-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import aboutUs from "../assets/lottie/aboutUs.json";
import aboutUs2 from "../assets/lottie/aboutUs2.json";

const AboutUs = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>About Us | RoomReady</title>
        </Helmet>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              {/* lottie */}
              <div className="text-center">
                <Lottie  animationData={aboutUs} loop={true} className="h-[400px]" />
              </div>
              {/* banner */}
              <div className="hero">
                <div className="hero-content text-center">
                  <div className="max-w-lg">
                    <h1 className="text-3xl font-bold">Welcome to RoomReady</h1>
                    <p className="py-6">
                    Here we are passionate about providing travelers with seamless booking experiences and unforgettable stays. Our mission is to revolutionize the way people book accommodations, making it easier, more convenient, and more enjoyable than ever before.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero">
              <div className="hero-content">
                <div className="max-w-lg">
                  <p className="py-6 text-left">
                  At RoomReady, we understand that every journey is unique, and every traveler has their own preferences and needs. That is why we have created a platform that offers a diverse range of accommodations, from luxurious resorts to cozy bed and breakfasts, ensuring that there is something for everyone.
                  </p>
                  <hr />
                  <p className="py-6 text-right">
                  Driven by innovation and fueled by our commitment to excellence, our team works tirelessly to deliver cutting-edge technology and unparalleled customer service. Whether you are planning a weekend getaway, a business trip, or a once-in-a-lifetime adventure, we are here to help you find the perfect place to stay.
                  </p>
                  <hr />
                  <p className="py-6 text-left">
                  With a user-centric approach, we strive to make the booking process as simple and intuitive as possible. From browsing through listings to making reservations and managing bookings, we are with you every step of the way, ensuring that your experience is smooth, stress-free, and truly memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-center">
              <Lottie  animationData={aboutUs2} loop={true} className="h-[400px]" />
            </div>
            {/* banner */}
            <div className="hero">
              <div className="hero-content">
                <div className="max-w-lg">
                  <p className="py-6">
                  But our dedication does not stop there. We are also committed to supporting our partners in the hospitality industry, working closely with hotels, resorts, and property owners to showcase their properties and attract travelers from around the world.
                  </p>
                  <hr />
                  <p className="py-6 text-right">
                  Whether you are a seasoned globetrotter or a first-time traveler, we invite you to join us on this journey. Discover new destinations, explore hidden gems, and create lasting memories with RoomReady.
                  </p>
                  <hr />
                  <p className="py-6">
                  Thank you for choosing RoomReady. We look forward to being a part of your next adventure!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default AboutUs;