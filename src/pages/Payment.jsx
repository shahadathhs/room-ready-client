import Lottie from "lottie-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import payment from "../assets/lottie/payment.json";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Payment | RoomReady</title>
        </Helmet>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* banner */}
          <div className="text-center text-2xl mx-auto p-4 flex flex-col md:flex-row justify-center items-center gap-16">
            <Lottie className="h-[400px]" animationData={payment} loop={true} />
          </div>
          {/* payment form */}
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
      
    </HelmetProvider>
  );
};

export default Payment;