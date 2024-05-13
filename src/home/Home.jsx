import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./Banner";
import Map from "./Map";
import NewsLetter from "./NewsLetter";
import ReviewSlide from "./ReviewSlide";
import Modal from "react-modal";
import { useState } from "react";
import featuredImage from "../assets/images/slider/room10.jpg"
import { Link } from "react-router-dom";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Home | RoomReady</title>
        </Helmet>
        <div className="py-6 space-y-3">
          <Banner></Banner>
          <Map></Map>
          <NewsLetter></NewsLetter>
          <ReviewSlide></ReviewSlide>
        </div>
        {/* Modal for special offers */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Special Offers"
        ariaHideApp={false} // Disable app element for accessibility
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            borderRadius: "10px",
            padding: "0",
            maxWidth: "300px",
          },
        }}
      >
        <div className="relative">
          <button
            onClick={handleCloseModal}
            className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 rounded-full p-2"
          >
            &times;
          </button>
          {/* <img src={featuredImage} alt="Special Offer" className="w-full rounded-t-md" /> */}
          <div className="hero">
            <img src={featuredImage} alt="Special Offer" className="w-full rounded-t-md" />
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-xl font-bold text-white">Price Per Night: 100 BDT</h1>
              </div>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4">
            Click below to explore our rooms and book your stay today.
            </p>
            <Link to="/rooms" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
              Explore Rooms
            </Link>
          </div>
        </div>
      </Modal>
      </div>
    </HelmetProvider>
  );
};

export default Home;