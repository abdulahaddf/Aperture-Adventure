/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/UseAxiousSecure";
import './checkOut.css'
import Swal from "sweetalert2";
import { ImSpinner10 } from 'react-icons/im'

const CheckOut = ({ cls, price }) => {
    console.log(price, cls)
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
  

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async event => {
        event.preventDefault()
    
        if (!stripe || !elements) {
          return
        }
    
        const card = elements.getElement(CardElement)
        if (card === null) {
          return
        }
    
        const { error } = await stripe.createPaymentMethod({
          type: 'card',
          card,
        })
    
        if (error) {
          console.log('error', error)
          setCardError(error.message)
        } else {
          setCardError('')
          // console.log('payment method', paymentMethod)
        }
    
        setProcessing(true)
        
        const { paymentIntent, error: confirmError } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || 'unknown',
                name: user?.displayName || 'anonymous',
              },
            },
          })
    
        if (confirmError) {
          console.log(confirmError)
          setCardError(confirmError.message)
        }
    
        console.log('payment intent', paymentIntent)
    
        if (paymentIntent.status === 'succeeded') {
          // save payment information to the server
          const paymentInfo = {
            ...cls,
            transactionId: paymentIntent.id,
            date: new Date(),
          }
          axiosSecure.post('/payments', paymentInfo).then(res => {
            console.log(res.data)
            if (res.data.insertedId) {
           
                  setProcessing(false)
                 
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Booking Successful!, TransactionId: ${paymentIntent.id}`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                  
                 
              
            }
          })
        }
      }

    return (
        <div className="w-11/12 mx-auto"> 
        <h1 className="text-3xl text-center mt-10">You Need to Pay <span className="">${price}</span> for the {cls.className} Class</h1>
            <form className="w-2/3 mt-20 mx-auto  p-5 border-double border-4 border-cyan-600" onSubmit={handleSubmit}>
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
                <button
            type='submit'
            // disabled={!stripe || !clientSecret || processing}
            className='inline-flex justify-center rounded-md border border-transparent bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2'
          >
            {processing ? (
              <ImSpinner10 className='m-auto animate-spin' size={24} />
            ) : (
              `Pay ${price}$`
            )}
          </button>
           <div>
           {cardError && <p className="text-red-600 ">{cardError}</p>}
          
           </div>
            </form>
        </div>
    );
};

export default CheckOut;