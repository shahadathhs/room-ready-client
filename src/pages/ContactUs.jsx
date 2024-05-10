import { Helmet, HelmetProvider } from "react-helmet-async";
import Lottie from "lottie-react";
import contactUs1 from "../assets/lottie/contactUs1.json";
import contactUs2 from "../assets/lottie/contactUs2.json"

const ContactUs = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Contact Us | RoomReady</title>
        </Helmet>
        <div className="space-y-3">
          {/* introduction */}
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* left */}
              <div className="text-center lg:text-left p-4">
                <Lottie  animationData={contactUs1} loop={true} />
              </div>
              {/* right */}
              <div className="flex flex-col justify-center p-4 text-center rounded-sm max-w-md lg:text-left">
                <h1 className="font-bold leading-none text-2xl dark:text-blue-400">
                  Get in Touch with Us
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                Have a question, comment, or suggestion? We would love to hear from you! Reach out to us using the contact information below or fill out the form, and we will get back to you as soon as possible.
                </p>
              </div>
            </div>
          </section>
          {/* information */}
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* right */}
              <div className="text-center lg:text-left p-4">
                <Lottie  animationData={contactUs2} loop={true} />
              </div>
              {/* left */}
              <div className="flex flex-col justify-center p-4 text-center rounded-sm max-w-md lg:text-left space-y-3">
                <h1 className="font-bold leading-none text-2xl dark:text-blue-400">
                  Contact Information:
                </h1>
                <p>Email: roomready@protonmail.com</p>
                <p>Phone: 01234567891</p>
                <p>Address: West FirozShah, AkbarShah, Chattogram</p>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Office Hours</h2>
                  <p>
                    Monday - Friday: 9:00 AM - 5:00 PM <br />
                    Saturday: 10:00 AM - 3:00 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* form */}
          <section className=" dark:bg-gray-800 dark:text-gray-100">
            <div className="grid grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 justify-center items-center">
              {/* left */}
              <div className="py-6 md:py-0 md:px-6 max-w-[500px]">
                <h1 className="text-4xl font-bold">We are Here to Help</h1>
                <p className="pt-2 pb-4">
                Our dedicated team is here to assist you with any inquiries or support you may need. Whether it is booking assistance, feedback on your recent stay, or general questions about our services, we are committed to providing you with exceptional customer service. Do not hesitate to reach out. We are just a message or call away!
                </p>
              </div>
              {/* right */}
              <form className="space-y-8 p-4 border-[1px] max-w-[500px] rounded-md shadow-md" >
                <div className="space-y-4">
                  {/* name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm">Name</label>
                    <input type="text" name="name" id="name" placeholder="leroy@jenkins.com" required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 
                    dark:text-gray-100 focus:dark:border-blue-400" />
                  </div>
                  {/* email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Email address</label>
                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 
                    dark:text-gray-100 focus:dark:border-blue-400" />
                  </div>
                  {/* email */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm">Message</label>
                    <textarea type="text" name="message" id="message" placeholder="Your Message" required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 
                    dark:text-gray-100 focus:dark:border-blue-400" />
                  </div>
                </div>
                {/* submit */}
                <input type="submit" value="Submit"
                className="mx-auto px-8 py-3 font-bold rounded-md btn btn-outline text-blue-600" />
              </form>
            </div>
          </section>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ContactUs;