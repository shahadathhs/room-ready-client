import Swal from "sweetalert2";
import hotel from "../assets/hotel.jpg"

const NewsLetter = () => {
  const handleNewsletter = event => {
    event.preventDefault();
    
    const form = event.target;
    
    const email = form.email.value;
    console.log({email})

    fetch(`${import.meta.env.VITE_API_URL}/newsletters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email}),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Newsletter subscribe Successful', data);
          Swal.fire({
            title: 'Successful!',
            text: 'Newsletter subscribe Successful',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
      })
      .catch((error) => {
        console.error("Error subscribing to newsletter:", error);
      });
    form.reset();

  }

  return (
    <div className="hero">
      <img src={hotel} className="w-full h-[600px] md:h-[400px] rounded-3xl object-cover" alt="" />
      <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
      <div className="hero-content text-center text-neutral-content grid grid-cols-1 md:grid-cols-2 gap-5">
        
        <div 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="max-w-md text-center md:text-right">
          <h1 className="mb-5 text-5xl font-bold">Stay in the Loop!</h1>
          <p>
            Sign up for our newsletter to receive the latest updates, exclusive deals, and special offers straight to your inbox. Be the first to know about new promotions, upcoming events, and insider tips to enhance your stay. Do not miss out – subscribe now for a chance to unlock exclusive benefits and elevate your travel experience with us.
          </p>
        </div>
        
        <div 
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="text-center md:text-left space-y-4">
          {/* from */}
          <form onSubmit={handleNewsletter}
          className="join">
            <input type="email" name="email" className="input input-bordered join-item w-[200px]" placeholder="Email"/>
            <button type="submit" className="btn btn-outline text-blue-600 join-item rounded-r-full">Subscribe</button>
          </form>
          <div className="space-y-4">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-7 h-7 text-gray-50">
                <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
              </svg>
              <span className="flex flex-col items-start ml-4 leading-none">
                <span className="mb-1 text-xs">GET IT ON</span>
                <span className="font-semibold title-font">Google Play</span>
              </span>
            </button>
            <br />
            <button className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 text-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-current w-7 h-7 text-gray-50">
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
              </svg>
              <span className="flex flex-col items-start ml-4 leading-none">
                <span className="mb-1 text-xs">Download on the</span>
                <span className="font-semibold title-font">App Store</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;