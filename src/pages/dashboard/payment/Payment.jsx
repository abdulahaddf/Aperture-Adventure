import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";

import { useLocation } from "react-router-dom";


const Payment = () => {
    const location = useLocation();
    // console.log(location.state);
    const {price, cls} = location.state;
    console.log(price, cls);
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
            <h1 className="headingCyan">Proceed to the Payment</h1>
            <div> 
          <Elements  stripe={stripePromise}>
            <CheckOut price={price} cls={cls}></CheckOut>
           </Elements> 
            </div>
        </div>
    );
};

export default Payment;