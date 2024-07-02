# RoomReady | Seamless Hotel Booking Experience

## Live Site URL

### Client Side

- [RoomReady - Web App](https://eleventh-a-roomready.web.app)


## Tools & Technology

- HTML
- CSS
- Tailwind CSS
- JavaScript
- React.js
- React Router
- Firebase Authentication
- Firebase Hosting
- Vercel (Server Deployment)

## How to run locally

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Firebase account for authentication and hosting

### Running the Frontend Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/room-ready-client.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd roomready-client
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Create a `.env.local` file in the root directory and add the following environment variables with your own credentials:**

   ```env
   VITE_APIKEY=your_firebase_api_key
   VITE_AUTHDOMAIN=your_firebase_auth_domain
   VITE_PID=your_firebase_project_id
   VITE_STORAGE=your_firebase_storage_bucket
   VITE_MESSAGE=your_firebase_messaging_sender_id
   VITE_APPTD=your_firebase_app_id

   VITE_API_URL=your_server_api_url

   VITE_IMAGE_HOSTING_KEY=your_imgbb_api_key

   VITE_PAYMENT_GATEWAY_PK=your_stripe_public_key
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

### Running the Backend Locally

1. **Visit server repository:** [Server Repository on GitHub](https://github.com/your-username/room-ready-server)



## Features

- **Visual Experience Banner:** Engage users with captivating images of luxurious hotel rooms, enticing them to explore further.

- **Interactive Map:** Provide users with an easy-to-access map displaying the hotel's location, enhancing convenience for potential guests.

- **Newsletter Sign-Up:** Encourage users to subscribe to newsletters for updates, exclusive offers, and deals, enhancing customer engagement and retention.

- **Featured Rooms:** Highlight a curated selection of rooms with attractive images and descriptions, facilitating quick bookings with a prominent "Book Now" button.

- **User Reviews:** Showcase authentic user reviews and ratings prominently on the homepage using a testimonial carousel, building trust and credibility for prospective guests.

- **User Authentication:** Enable seamless user authentication with options for email/password-based login and Google authentication via Firebase, ensuring secure access to personalized features.

- **Navigation Bar:** Streamline navigation with links to essential pages like "Rooms" and "My Bookings," ensuring easy access to key functionalities for users.

- **Rooms Page:** Present a comprehensive list of available rooms with filtering options by price range, enabling users to find their ideal accommodation easily.

- **Room Details Page:** Provide detailed information about each room, including description, price per night, availability, images, special offers, and reviews, facilitating informed booking decisions.

- **Booking System:** Implement a seamless booking process with date selection and a confirmation modal, ensuring users can book available rooms securely and efficiently.

- **My Bookings Page:** Enable users to view and manage their bookings, including cancellation and date modification functionalities, enhancing user control and satisfaction.

- **Review System:** Allow users to post reviews for rooms they have booked, enhancing transparency and facilitating feedback for continuous improvement.

- **Access Control:** Restrict access to certain features like booking and review posting for non-logged-in users, enhancing security and user experience.

- **404 Page:** Create a customized 404 page with an engaging image/gif and a "Back to Home" button, ensuring a seamless user experience even in case of navigation errors.

- **Additional Packages:** Implement browser tab title and meta-data updates for improved SEO, integrate animation library Aos for enhanced visual appeal, and utilize MapLibrary for interactive map functionalities.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## Contact

For any inquiries, please reach out to Shahadath Hossen Sajib at <shahadathhossensajib732@gmail.com>.