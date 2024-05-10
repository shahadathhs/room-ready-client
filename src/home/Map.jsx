import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Lottie from "lottie-react";
import map from "../assets/lottie/map.json";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";

// aos import
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// create custom icon
const customIcon = new Icon({
  iconUrl: "/placeholder_684908.png",
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

const Map = () => {
  const location_coordinate = [22.3569, 91.7832];

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5 p-6'>
      
      <div data-aos="zoom-in-up" className="hero col-span-1 md:col-span-2">
          <h1 className="text-2xl md:text-4xl font-bold z-20 text-black text-center">Find Us on the Map</h1>
          <Lottie  animationData={map} loop={true} className='h-[300px] md:h-[400px] rotate-90' />
      </div>
      
      <div data-aos="fade-right">
        <p className="py-6 max-w-md text-center md:text-right mx-auto">
          Locate our hotel in the heart of Chattogram, Bangladesh, with our interactive map. Situated amidst the city s vibrant culture and bustling attractions, our hotel offers a prime location for both business and leisure travelers. Use our map to explore nearby landmarks, dining options, and points of interest, ensuring you make the most of your stay. Whether you are arriving from near or far, our convenient location makes it easy to access all that Chattogram has to offer. Start planning your journey with us today.
        </p>
      </div>

      <div data-aos="fade-left">
        <MapContainer
          className="h-[500px] rounded-3xl" 
          center={location_coordinate} zoom={13} scrollWheelZoom={false}
        >
          {/* OPEN STREET MAPS TILES */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
            <Marker position={location_coordinate} icon={customIcon}>
              <Popup>RoomReady</Popup>
            </Marker>
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;

Map.propTypes = {
  estate: PropTypes.object,
}