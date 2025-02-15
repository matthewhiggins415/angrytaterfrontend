import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import React, { useCallback, useState, useEffect } from "react";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_KEY);

const CheckoutForm = () => {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`, {
      method: "POST",
    })
    .then((res) => res.json())
    .then((data) => data.clientSecret);
  }, []);

  const options = {fetchClientSecret};
  
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

export default CheckoutForm;
