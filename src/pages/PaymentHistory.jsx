import { Helmet, HelmetProvider } from "react-helmet-async";
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useEffect, useState } from "react";

const PaymentHistory = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure()

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = () => {
      axiosSecure.get(`/payments?email=${user.email}`)
        .then(res => {
          setPayments(res.data);
        })
        .catch(error => {
          console.error('Error fetching payments:', error);
        });
    };

    if (user.email) {
      fetchPayments();
    }
  }, [axiosSecure, user.email]);

  console.log(payments);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Payment History | RoomReady</title>
        </Helmet>
        <div className="m-2 space-y-3">
          {/* banner */}
          <div className="text-center p-4 space-y-3">
            <p className="text-blue-600 text-xl">All Payments</p>
            <h2 className="text-3xl">Total Payment: {payments.length}</h2>
          </div>
          {/* payment table */}
          <div className="overflow-x-auto border-2 rounded-md hover:shadow-xl">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>TransactionId</th>
                  <th>Name</th>
                  <th>Payment amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* row */}
                {
                  payments.map(item =>
                    <tr key={item._id} className="hover">
                      <th>
                        {item.transactionId}
                      </th>
                      
                      <td>
                        {item.data}
                      </td>
                      
                      <th>
                        {item.price}
                      </th>

                      <td>
                        {item.status}
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PaymentHistory;