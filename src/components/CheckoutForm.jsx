import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";

const CheckoutForm = () => {
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState('');
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [bookings, setBookings] = useState([]);

  const url = `/bookings?email=${user.email}`

  useEffect(()=> {
    axiosSecure.get(url)
      .then(res => {
        setBookings(res.data)
      })

  }, [url, axiosSecure])

  const totalPrice = bookings.reduce((sum, item) => sum + parseFloat(item.pricePerNight), 0);
  console.log(totalPrice)

  useEffect(() => {
    if (totalPrice > 0) { 
      axiosSecure.post("/create-payment-intent", { price: totalPrice })
        .then(res => {
          console.log("Client Secret:", res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch(error => {
          console.error('Error creating payment intent:', error);
        });
    } else {
      console.error('Invalid totalPrice:', totalPrice);
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('');
    }

    // confirm card payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'anonymous' ,
            email: user?.email || 'anonymous' ,
          },
        },
      },
    );

    if (confirmError) {
      console.log('[confirmError]', confirmError);
    } else {
      console.log('[PaymentIntent]', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log("Transaction Id", paymentIntent.id)
        setTransactionId(paymentIntent.id)
        // Get current UTC date
        const currentUTCDate = moment.utc();
        // Convert and format the date
        const formattedDate = currentUTCDate.format('YYYY-MM-DD HH:mm:ss');

        // now save the payment to database
        const payment = {
          name: user.displayName,
          email: user.email,
          transactionId: paymentIntent.id,
          price: totalPrice,
          data: formattedDate,
          bookingsIds: bookings.map(item => item._id),
          roomsIds: bookings.map(item => item.previousID),
          status: 'pending'
        }

        const res = await axiosSecure.post('/payments', payment);
        console.log("payment saved",res.data)
        if (res.data.paymentResult.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your payment completed",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/rooms')
        }
      }
    }
  };

  return (
    <div className="m-2 p-2 border-2 rounded-md">
      <h2 className="text-center font-semibold text-xl text-blue-600">PAY {totalPrice}$</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <CardElement
          options={{
            style: {
              base: {
              fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                    color: '#aab7c4',
                  },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
            
        <button type="submit" disabled={!stripe || !clientSecret} 
        className="btn btn-outline btn-sm">
        Pay</button>
        { error && <p className="text-red-500">{error}</p>}
        { transactionId && <p className="text-green-500">Your transaction ID: {transactionId}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;